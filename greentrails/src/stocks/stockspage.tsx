import '../styles/style.css'
import '../styles/stocks.css'
import React, { useEffect, useState, useRef } from 'react';
import { db } from '../base/firebaseConfig';
import { doc, getDoc, updateDoc, runTransaction, Timestamp } from "firebase/firestore";
import { useAuth } from '../context/AuthContext';
import Navbar from '../componets/sadnavbar';
import Top from '../componets/header';
import { Cloudfooter } from '../componets/footer';
import { showNotification } from '../componets/Notification';

interface Stock {
    ticker: string;
    name: string;
    price: number;
    change: number;
    changePercent: number;
}

interface UserPortfolio {
    [ticker: string]: number; // ticker -> quantity
}

interface UserStockData {
    portfolio: UserPortfolio;
    fireworks: number;
    lastStockUpdate?: Date;
}

const StocksPage: React.FC = () => {
    const { currentUser } = useAuth();
    const [stocks, setStocks] = useState<Stock[]>([]);
    const [userPortfolio, setUserPortfolio] = useState<UserPortfolio>({});
    const [userFireworks, setUserFireworks] = useState(0);
    const [loading, setLoading] = useState(true);
    const [selectedStock, setSelectedStock] = useState<Stock | null>(null);
    const [tradeAmount, setTradeAmount] = useState('');
    const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy');
    const updateIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const lastUpdateRef = useRef<Date>(new Date());

    // Constants
    const STOCK_CACHE_LIFETIME_MS = 30000; // 30 seconds
    const TRANSACTION_FEE_RATE = 0.01; // 1% fee
    const MIN_STOCK_PRICE = 10; // Minimum price floor
    const PRICE_UPDATE_INTERVAL_MS = 10000; // Update every 10 seconds

    // Initial stock data - these will fluctuate over time
    const initialStocks: Stock[] = [
        { ticker: 'GRNT', name: 'GreenTrails Tech', price: 100, change: 0, changePercent: 0 },
        { ticker: 'ECOF', name: 'EcoFriendly Inc', price: 50, change: 0, changePercent: 0 },
        { ticker: 'NATX', name: 'Nature Express', price: 150, change: 0, changePercent: 0 },
        { ticker: 'LEAF', name: 'Leaf Energy', price: 75, change: 0, changePercent: 0 },
        { ticker: 'TREE', name: 'TreeCorp', price: 200, change: 0, changePercent: 0 },
    ];

    // Valid stock tickers for security
    const VALID_TICKERS = ['GRNT', 'ECOF', 'NATX', 'LEAF', 'TREE'];

    useEffect(() => {
        if (currentUser) {
            loadUserData();
            initializeStocks();
            startPriceUpdates();
        }
        
        return () => {
            if (updateIntervalRef.current) {
                clearInterval(updateIntervalRef.current);
            }
        };
    }, [currentUser]);

    const loadUserData = async () => {
        if (!currentUser) return;
        
        try {
            const userDocRef = doc(db, "Users", currentUser);
            const userDoc = await getDoc(userDocRef);
            
            if (userDoc.exists()) {
                const data = userDoc.data();
                setUserFireworks(data.santasPopped || 0);
                setUserPortfolio(data.stockPortfolio || {});
                
                // Initialize stock portfolio field if it doesn't exist
                if (!data.stockPortfolio) {
                    await updateDoc(userDocRef, {
                        stockPortfolio: {}
                    });
                }
            }
        } catch (error) {
            console.error("Error loading user data:", error);
            showNotification("Error loading user data", "error");
        } finally {
            setLoading(false);
        }
    };

    const initializeStocks = () => {
        // Load stocks from localStorage or use defaults
        const savedStocks = localStorage.getItem('stockPrices');
        const savedTimestamp = localStorage.getItem('stockPricesTimestamp');
        
        if (savedStocks && savedTimestamp) {
            const timeDiff = Date.now() - parseInt(savedTimestamp);
            // If saved data is less than cache lifetime, use it
            if (timeDiff < STOCK_CACHE_LIFETIME_MS) {
                setStocks(JSON.parse(savedStocks));
                return;
            }
        }
        
        // Otherwise, initialize with defaults
        setStocks(initialStocks);
        saveStocksToLocalStorage(initialStocks);
    };

    const saveStocksToLocalStorage = (stocksData: Stock[]) => {
        localStorage.setItem('stockPrices', JSON.stringify(stocksData));
        localStorage.setItem('stockPricesTimestamp', Date.now().toString());
    };

    const startPriceUpdates = () => {
        // Update prices at regular intervals
        updateIntervalRef.current = setInterval(() => {
            updateStockPrices();
        }, PRICE_UPDATE_INTERVAL_MS);
    };

    const updateStockPrices = () => {
        setStocks(prevStocks => {
            const newStocks = prevStocks.map(stock => {
                // Random price change between -5% and +5%
                const changePercent = (Math.random() - 0.5) * 10;
                const priceChange = stock.price * (changePercent / 100);
                const newPrice = Math.max(MIN_STOCK_PRICE, stock.price + priceChange);
                
                return {
                    ...stock,
                    price: Math.round(newPrice * 100) / 100,
                    change: Math.round(priceChange * 100) / 100,
                    changePercent: Math.round(changePercent * 100) / 100
                };
            });
            
            saveStocksToLocalStorage(newStocks);
            lastUpdateRef.current = new Date();
            return newStocks;
        });
    };

    const handleTrade = async () => {
        if (!currentUser || !selectedStock) {
            showNotification("Please select a stock first", "error");
            return;
        }

        // Validate ticker against whitelist for security
        if (!VALID_TICKERS.includes(selectedStock.ticker)) {
            showNotification("Invalid stock ticker", "error");
            return;
        }

        const amount = parseInt(tradeAmount);
        if (isNaN(amount) || amount <= 0) {
            showNotification("Please enter a valid amount", "error");
            return;
        }

        const totalCost = selectedStock.price * amount;
        const fee = Math.ceil(totalCost * TRANSACTION_FEE_RATE);
        
        try {
            const userDocRef = doc(db, "Users", currentUser);
            
            await runTransaction(db, async (transaction) => {
                const userDoc = await transaction.get(userDocRef);
                
                if (!userDoc.exists()) {
                    throw new Error("User not found");
                }
                
                const data = userDoc.data();
                const currentFireworks = data.santasPopped || 0;
                const currentPortfolio = data.stockPortfolio || {};
                const currentHolding = currentPortfolio[selectedStock.ticker] || 0;
                
                if (tradeType === 'buy') {
                    const totalWithFee = totalCost + fee;
                    if (currentFireworks < totalWithFee) {
                        throw new Error("Not enough fireworks");
                    }
                    
                    transaction.update(userDocRef, {
                        santasPopped: currentFireworks - totalWithFee,
                        [`stockPortfolio.${selectedStock.ticker}`]: currentHolding + amount
                    });
                    
                    showNotification(
                        `Bought ${amount} shares of ${selectedStock.ticker} for ${Math.round(totalCost)} fireworks (fee: ${fee})`,
                        "success"
                    );
                } else {
                    // Sell
                    if (currentHolding < amount) {
                        throw new Error("Not enough shares to sell");
                    }
                    
                    const totalMinusFee = totalCost - fee;
                    
                    transaction.update(userDocRef, {
                        santasPopped: currentFireworks + totalMinusFee,
                        [`stockPortfolio.${selectedStock.ticker}`]: currentHolding - amount
                    });
                    
                    showNotification(
                        `Sold ${amount} shares of ${selectedStock.ticker} for ${Math.round(totalCost)} fireworks (fee: ${fee})`,
                        "success"
                    );
                }
            });
            
            // Reload user data
            await loadUserData();
            setTradeAmount('');
            
        } catch (error: any) {
            console.error("Error executing trade:", error);
            showNotification(error.message || "Error executing trade", "error");
        }
    };

    const calculatePortfolioValue = (): number => {
        let total = 0;
        for (const [ticker, quantity] of Object.entries(userPortfolio)) {
            const stock = stocks.find(s => s.ticker === ticker);
            if (stock) {
                total += stock.price * quantity;
            }
        }
        return Math.round(total);
    };

    const getStockHolding = (ticker: string): number => {
        return userPortfolio[ticker] || 0;
    };

    if (!currentUser) {
        return (
            <div className='mainbody'>
                <Top />
                <Navbar />
                <div className="container">
                    <h1>Stock Market</h1>
                    <p>Please log in to access the stock market.</p>
                </div>
                <Cloudfooter />
            </div>
        );
    }

    if (loading) {
        return (
            <div className='mainbody'>
                <Top />
                <Navbar />
                <div className="container">
                    <h1>Loading...</h1>
                </div>
                <Cloudfooter />
            </div>
        );
    }

    return (
        <div className='mainbody'>
            <Top />
            <Navbar />
            <div className="container stocks-container">
                <h1>🎆 Stock Market</h1>
                
                <div className="portfolio-summary">
                    <div className="stat-box">
                        <h3>Your Fireworks</h3>
                        <p className="stat-value">{userFireworks.toLocaleString()}</p>
                    </div>
                    <div className="stat-box">
                        <h3>Portfolio Value</h3>
                        <p className="stat-value">{calculatePortfolioValue().toLocaleString()}</p>
                    </div>
                    <div className="stat-box">
                        <h3>Total Worth</h3>
                        <p className="stat-value">{(userFireworks + calculatePortfolioValue()).toLocaleString()}</p>
                    </div>
                </div>

                <div className="stocks-section">
                    <h2>Available Stocks</h2>
                    <p className="update-info">Prices update every 10 seconds</p>
                    <div className="stocks-grid">
                        {stocks.map(stock => {
                            const holding = getStockHolding(stock.ticker);
                            const isSelected = selectedStock?.ticker === stock.ticker;
                            
                            return (
                                <div 
                                    key={stock.ticker} 
                                    className={`stock-card ${isSelected ? 'selected' : ''}`}
                                    onClick={() => setSelectedStock(stock)}
                                >
                                    <div className="stock-header">
                                        <h3>{stock.ticker}</h3>
                                        <p className="stock-name">{stock.name}</p>
                                    </div>
                                    <div className="stock-price">
                                        <span className="price">{stock.price.toFixed(2)}</span>
                                        <span className={`change ${stock.change >= 0 ? 'positive' : 'negative'}`}>
                                            {stock.change >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                                        </span>
                                    </div>
                                    {holding > 0 && (
                                        <div className="stock-holding">
                                            You own: {holding} shares (Value: {Math.round(stock.price * holding)})
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {selectedStock && (
                    <div className="trading-section">
                        <h2>Trade {selectedStock.ticker}</h2>
                        <div className="trade-form">
                            <div className="trade-type-selector">
                                <button 
                                    className={`trade-btn ${tradeType === 'buy' ? 'active' : ''}`}
                                    onClick={() => setTradeType('buy')}
                                >
                                    Buy
                                </button>
                                <button 
                                    className={`trade-btn ${tradeType === 'sell' ? 'active' : ''}`}
                                    onClick={() => setTradeType('sell')}
                                >
                                    Sell
                                </button>
                            </div>
                            
                            <div className="trade-input-group">
                                <label>Number of Shares</label>
                                <input 
                                    type="number" 
                                    value={tradeAmount}
                                    onChange={(e) => setTradeAmount(e.target.value)}
                                    placeholder="Enter amount"
                                    min="1"
                                />
                            </div>
                            
                            {tradeAmount && parseInt(tradeAmount) > 0 && (
                                <div className="trade-summary">
                                    <p>Price per share: {selectedStock.price.toFixed(2)} fireworks</p>
                                    <p>Total: {Math.round(selectedStock.price * parseInt(tradeAmount))} fireworks</p>
                                    <p>Fee ({(TRANSACTION_FEE_RATE * 100).toFixed(0)}%): {Math.ceil(selectedStock.price * parseInt(tradeAmount) * TRANSACTION_FEE_RATE)} fireworks</p>
                                    <p className="trade-total">
                                        {tradeType === 'buy' ? 'Total Cost' : 'You Receive'}: {' '}
                                        {tradeType === 'buy' 
                                            ? Math.round(selectedStock.price * parseInt(tradeAmount) * (1 + TRANSACTION_FEE_RATE))
                                            : Math.round(selectedStock.price * parseInt(tradeAmount) * (1 - TRANSACTION_FEE_RATE))
                                        } fireworks
                                    </p>
                                </div>
                            )}
                            
                            <button 
                                className="execute-trade-btn"
                                onClick={handleTrade}
                            >
                                {tradeType === 'buy' ? 'Buy Shares' : 'Sell Shares'}
                            </button>
                        </div>
                    </div>
                )}

                <div className="info-section">
                    <h3>📈 How It Works</h3>
                    <ul>
                        <li>Invest your fireworks in stocks to potentially grow your wealth</li>
                        <li>Stock prices fluctuate every 10 seconds based on market conditions</li>
                        <li>All trades have a 1% transaction fee</li>
                        <li>Buy low, sell high to maximize your profits!</li>
                        <li>Your portfolio is saved automatically</li>
                    </ul>
                </div>
            </div>
            <Cloudfooter />
        </div>
    );
};

export default StocksPage;
