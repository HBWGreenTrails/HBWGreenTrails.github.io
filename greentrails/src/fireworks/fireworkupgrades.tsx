import '../styles/style.css'
import '../styles/leaderboard.css'
import React, { useEffect, useState } from 'react';
import { db } from '../base/firebaseConfig';
import { doc, getDoc, updateDoc, increment } from "firebase/firestore";
import { useAuth } from '../context/AuthContext';
import Navbar from '../componets/sadnavbar';
import Top from '../componets/header';
import { Cloudfooter } from '../componets/footer';
import { showNotification } from '../componets/Notification';

interface UserUpgrades {
    autoClickerLevel: number;
    spawnSpeedLevel: number;
    fireworkWorthLevel: number;
    fireworksPopped: number;
    luckyClickLevel: number;
    goldRushLevel: number;
    clickMultiplierLevel: number;
}

const FireworkUpgrades: React.FC = () => {
    const { currentUser } = useAuth();
    const [upgrades, setUpgrades] = useState<UserUpgrades>({
        autoClickerLevel: 0,
        spawnSpeedLevel: 0,
        fireworkWorthLevel: 0,
        fireworksPopped: 0,
        luckyClickLevel: 0,
        goldRushLevel: 0,
        clickMultiplierLevel: 0
    });
    const [loading, setLoading] = useState(true);

    // Auto-clicker costs: Extended to 10 levels
    const autoClickerCosts = [10, 25, 50, 100, 200, 400, 800, 1600, 3200, 6400];
    // Spawn speed costs: Extended to 10 levels
    const spawnSpeedCosts = [15, 30, 60, 120, 240, 480, 960, 1920, 3840, 7680];
    // Firework worth costs: Extended to 10 levels
    const fireworkWorthCosts = [20, 40, 80, 160, 320, 640, 1280, 2560, 5120, 10240];
    // Lucky Click costs: 5% chance per level to get double points
    const luckyClickCosts = [30, 75, 150, 300, 600, 1200, 2400, 4800, 9600, 19200];
    // Gold Rush costs: Occasionally spawn golden fireworks worth 5x points
    const goldRushCosts = [50, 125, 250, 500, 1000, 2000, 4000, 8000, 16000, 32000];
    // Click Multiplier costs: Multiplies all clicks by (1 + level * 0.1)
    const clickMultiplierCosts = [100, 250, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000];

    useEffect(() => {
        if (currentUser) {
            loadUserUpgrades();
        } else {
            setLoading(false);
        }
        
        // Listen for firework pop events to update count in real-time
        const handleFireworkPopped = (event: Event) => {
            const customEvent = event as CustomEvent<{ increment: number }>;
            const increment = customEvent.detail?.increment || 1;
            setUpgrades(prev => ({
                ...prev,
                fireworksPopped: prev.fireworksPopped + increment
            }));
        };
        
        window.addEventListener('fireworkPopped', handleFireworkPopped);
        
        return () => {
            window.removeEventListener('fireworkPopped', handleFireworkPopped);
        };
    }, [currentUser]);

    const loadUserUpgrades = async () => {
        if (!currentUser) return;
        
        try {
            const userDocRef = doc(db, "Users", currentUser);
            const userDoc = await getDoc(userDocRef);
            
            if (userDoc.exists()) {
                const userData = userDoc.data();
                setUpgrades({
                    autoClickerLevel: userData.autoClickerLevel || 0,
                    spawnSpeedLevel: userData.spawnSpeedLevel || 0,
                    fireworkWorthLevel: userData.fireworkWorthLevel || 0,
                    fireworksPopped: userData.fireworksPopped || 0,
                    luckyClickLevel: userData.luckyClickLevel || 0,
                    goldRushLevel: userData.goldRushLevel || 0,
                    clickMultiplierLevel: userData.clickMultiplierLevel || 0
                });
            }
        } catch (error) {
            console.error("Error loading upgrades:", error);
        } finally {
            setLoading(false);
        }
    };

    const purchaseAutoClicker = async () => {
        if (!currentUser) {
            showNotification("Please login to purchase upgrades!", "error");
            return;
        }

        const level = upgrades.autoClickerLevel;
        if (level >= autoClickerCosts.length) {
            showNotification("Max level reached!", "info");
            return;
        }

        const cost = autoClickerCosts[level];
        if (upgrades.fireworksPopped < cost) {
            showNotification(`Not enough fireworks! You need ${cost} fireworks but only have ${upgrades.fireworksPopped}.`, "error");
            return;
        }

        try {
            const userDocRef = doc(db, "Users", currentUser);
            await updateDoc(userDocRef, {
                fireworksPopped: increment(-cost),
                autoClickerLevel: increment(1)
            });
            
            // Update local state
            setUpgrades({
                ...upgrades,
                fireworksPopped: upgrades.fireworksPopped - cost,
                autoClickerLevel: upgrades.autoClickerLevel + 1
            });
            
            showNotification(`Auto-clicker upgraded to level ${level + 1}!`, "success");
        } catch (error) {
            console.error("Error purchasing upgrade:", error);
            showNotification("Failed to purchase upgrade. Please try again.", "error");
        }
    };

    const purchaseSpawnSpeed = async () => {
        if (!currentUser) {
            showNotification("Please login to purchase upgrades!", "error");
            return;
        }

        const level = upgrades.spawnSpeedLevel;
        if (level >= spawnSpeedCosts.length) {
            showNotification("Max level reached!", "info");
            return;
        }

        const cost = spawnSpeedCosts[level];
        if (upgrades.fireworksPopped < cost) {
            showNotification(`Not enough fireworks! You need ${cost} fireworks but only have ${upgrades.fireworksPopped}.`, "error");
            return;
        }

        try {
            const userDocRef = doc(db, "Users", currentUser);
            await updateDoc(userDocRef, {
                fireworksPopped: increment(-cost),
                spawnSpeedLevel: increment(1)
            });
            
            // Update local state
            setUpgrades({
                ...upgrades,
                fireworksPopped: upgrades.fireworksPopped - cost,
                spawnSpeedLevel: upgrades.spawnSpeedLevel + 1
            });
            
            showNotification(`Spawn speed upgraded to level ${level + 1}!`, "success");
        } catch (error) {
            console.error("Error purchasing upgrade:", error);
            showNotification("Failed to purchase upgrade. Please try again.", "error");
        }
    };

    const purchaseFireworkWorth = async () => {
        if (!currentUser) {
            showNotification("Please login to purchase upgrades!", "error");
            return;
        }

        const level = upgrades.fireworkWorthLevel;
        if (level >= fireworkWorthCosts.length) {
            showNotification("Max level reached!", "info");
            return;
        }

        const cost = fireworkWorthCosts[level];
        if (upgrades.fireworksPopped < cost) {
            showNotification(`Not enough fireworks! You need ${cost} fireworks but only have ${upgrades.fireworksPopped}.`, "error");
            return;
        }

        try {
            const userDocRef = doc(db, "Users", currentUser);
            await updateDoc(userDocRef, {
                fireworksPopped: increment(-cost),
                fireworkWorthLevel: increment(1)
            });
            
            // Update local state
            setUpgrades({
                ...upgrades,
                fireworksPopped: upgrades.fireworksPopped - cost,
                fireworkWorthLevel: upgrades.fireworkWorthLevel + 1
            });
            
            showNotification(`firework worth upgraded to level ${level + 1}!`, "success");
        } catch (error) {
            console.error("Error purchasing upgrade:", error);
            showNotification("Failed to purchase upgrade. Please try again.", "error");
        }
    };

    const purchaseLuckyClick = async () => {
        if (!currentUser) {
            showNotification("Please login to purchase upgrades!", "error");
            return;
        }

        const level = upgrades.luckyClickLevel;
        if (level >= luckyClickCosts.length) {
            showNotification("Max level reached!", "info");
            return;
        }

        const cost = luckyClickCosts[level];
        if (upgrades.fireworksPopped < cost) {
            showNotification(`Not enough fireworks! You need ${cost} fireworks but only have ${upgrades.fireworksPopped}.`, "error");
            return;
        }

        try {
            const userDocRef = doc(db, "Users", currentUser);
            await updateDoc(userDocRef, {
                fireworksPopped: increment(-cost),
                luckyClickLevel: increment(1)
            });
            
            // Update local state
            setUpgrades({
                ...upgrades,
                fireworksPopped: upgrades.fireworksPopped - cost,
                luckyClickLevel: upgrades.luckyClickLevel + 1
            });
            
            showNotification(`Lucky click upgraded to level ${level + 1}!`, "success");
        } catch (error) {
            console.error("Error purchasing upgrade:", error);
            showNotification("Failed to purchase upgrade. Please try again.", "error");
        }
    };

    const purchaseGoldRush = async () => {
        if (!currentUser) {
            showNotification("Please login to purchase upgrades!", "error");
            return;
        }

        const level = upgrades.goldRushLevel;
        if (level >= goldRushCosts.length) {
            showNotification("Max level reached!", "info");
            return;
        }

        const cost = goldRushCosts[level];
        if (upgrades.fireworksPopped < cost) {
            showNotification(`Not enough fireworks! You need ${cost} fireworks but only have ${upgrades.fireworksPopped}.`, "error");
            return;
        }

        try {
            const userDocRef = doc(db, "Users", currentUser);
            await updateDoc(userDocRef, {
                fireworksPopped: increment(-cost),
                goldRushLevel: increment(1)
            });
            
            // Update local state
            setUpgrades({
                ...upgrades,
                fireworksPopped: upgrades.fireworksPopped - cost,
                goldRushLevel: upgrades.goldRushLevel + 1
            });
            
            showNotification(`Gold rush upgraded to level ${level + 1}!`, "success");
        } catch (error) {
            console.error("Error purchasing upgrade:", error);
            showNotification("Failed to purchase upgrade. Please try again.", "error");
        }
    };

    const purchaseClickMultiplier = async () => {
        if (!currentUser) {
            showNotification("Please login to purchase upgrades!", "error");
            return;
        }

        const level = upgrades.clickMultiplierLevel;
        if (level >= clickMultiplierCosts.length) {
            showNotification("Max level reached!", "info");
            return;
        }

        const cost = clickMultiplierCosts[level];
        if (upgrades.fireworksPopped < cost) {
            showNotification(`Not enough fireworks! You need ${cost} fireworks but only have ${upgrades.fireworksPopped}.`, "error");
            return;
        }

        try {
            const userDocRef = doc(db, "Users", currentUser);
            await updateDoc(userDocRef, {
                fireworksPopped: increment(-cost),
                clickMultiplierLevel: increment(1)
            });
            
            // Update local state
            setUpgrades({
                ...upgrades,
                fireworksPopped: upgrades.fireworksPopped - cost,
                clickMultiplierLevel: upgrades.clickMultiplierLevel + 1
            });
            
            showNotification(`Click multiplier upgraded to level ${level + 1}!`, "success");
        } catch (error) {
            console.error("Error purchasing upgrade:", error);
            showNotification("Failed to purchase upgrade. Please try again.", "error");
        }
    };

    if (!currentUser) {
        return (
            <div>
                <Top message="Firework Shop" shadow={true} />
                <Navbar />
                <div style={{ 
                    padding: '40px', 
                    textAlign: 'center',
                    minHeight: '60vh',
                    backgroundColor: '#f5f5f5'
                }}>
                    <h2 style={{ color: '#d32f2f', marginBottom: '20px' }}>🎆 Firework Shop</h2>
                    <p style={{ fontSize: '18px', color: '#666' }}>
                        Please login to access the Firework Shop!
                    </p>
                </div>
                <Cloudfooter />
            </div>
        );
    }

    if (loading) {
        return (
            <div>
                <Top message="Firework Shop" shadow={true} />
                <Navbar />
                <div style={{ padding: '40px', textAlign: 'center' }}>
                    <p>Loading...</p>
                </div>
                <Cloudfooter />
            </div>
        );
    }

    return (
        <div>
            <Top message="Firework Shop" shadow={true} />
            <Navbar />
            <div style={{ 
                padding: '40px',
                maxWidth: '1400px',
                margin: '0 auto',
                minHeight: '60vh',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                marginTop: '20px',
                marginBottom: '20px'
            }}>
                <h2 style={{ 
                    textAlign: 'center', 
                    color: '#ffffff', 
                    marginBottom: '10px',
                    fontSize: '48px',
                    fontWeight: 'bold',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                }}>
                    🎆 Firework Shop 🎆
                </h2>
                <p style={{
                    textAlign: 'center',
                    color: '#f0f0f0',
                    fontSize: '18px',
                    marginBottom: '30px',
                    fontStyle: 'italic'
                }}>
                    Upgrade your firework-catching abilities!
                </p>

                {/* Stats Section */}
                <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    padding: '30px',
                    borderRadius: '15px',
                    marginBottom: '30px',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                    border: '3px solid #ffd700'
                }}>
                    <h3 style={{ 
                        color: '#d32f2f', 
                        marginBottom: '20px',
                        textAlign: 'center',
                        fontSize: '28px',
                        fontWeight: 'bold'
                    }}>
                        💰 Your Stats
                    </h3>
                    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '30px' }}>
                        <div style={{ 
                            textAlign: 'center',
                            padding: '15px 30px',
                            backgroundColor: '#fff5f5',
                            borderRadius: '10px',
                            border: '2px solid #d32f2f'
                        }}>
                            <p style={{ fontSize: '20px', marginBottom: '8px', color: '#666' }}>🎆 Fireworks Available</p>
                            <p style={{ fontSize: '36px', fontWeight: 'bold', color: '#d32f2f', margin: 0 }}>
                                {upgrades.fireworksPopped}
                            </p>
                        </div>
                        <div style={{ 
                            textAlign: 'center',
                            padding: '15px 30px',
                            backgroundColor: '#f0f8ff',
                            borderRadius: '10px',
                            border: '2px solid #2196F3'
                        }}>
                            <p style={{ fontSize: '20px', marginBottom: '8px', color: '#666' }}>💎 firework Value</p>
                            <p style={{ fontSize: '36px', fontWeight: 'bold', color: '#2196F3', margin: 0 }}>
                                {upgrades.fireworkWorthLevel + 1}x
                            </p>
                        </div>
                    </div>
                </div>

                {/* Upgrades Section */}
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '25px'
                }}>
                    {/* Auto-Clicker Upgrade */}
                    <div style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        padding: '25px',
                        borderRadius: '15px',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                        border: '3px solid #4CAF50',
                        transition: 'transform 0.2s',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            padding: '5px 15px',
                            borderRadius: '20px',
                            fontSize: '14px',
                            fontWeight: 'bold'
                        }}>
                            Level {upgrades.autoClickerLevel}/{autoClickerCosts.length}
                        </div>
                        <h3 style={{ color: '#4CAF50', marginBottom: '15px', fontSize: '28px', fontWeight: 'bold' }}>
                            🖱️ Auto-Clicker
                        </h3>
                        <p style={{ marginBottom: '15px', color: '#555', lineHeight: '1.6', minHeight: '80px' }}>
                            Automatically clicks fireworks for you every few seconds! The ultimate passive income for party planners.
                            {upgrades.autoClickerLevel > 0 && (
                                <span style={{ display: 'block', marginTop: '10px', color: '#4CAF50', fontWeight: 'bold' }}>
                                    ✓ Active: Clicking every {Math.max(2, 10 - upgrades.autoClickerLevel * 2)}s
                                </span>
                            )}
                        </p>
                        {upgrades.autoClickerLevel < autoClickerCosts.length ? (
                            <>
                                <p style={{ fontSize: '20px', marginBottom: '20px', textAlign: 'center' }}>
                                    Cost: <strong style={{ color: '#d32f2f', fontSize: '24px' }}>
                                        {autoClickerCosts[upgrades.autoClickerLevel]} 🎆
                                    </strong>
                                </p>
                                <button 
                                    onClick={purchaseAutoClicker}
                                    disabled={upgrades.fireworksPopped < autoClickerCosts[upgrades.autoClickerLevel]}
                                    style={{
                                        padding: '15px 25px',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        backgroundColor: upgrades.fireworksPopped >= autoClickerCosts[upgrades.autoClickerLevel] ? '#4CAF50' : '#ccc',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '8px',
                                        cursor: upgrades.fireworksPopped >= autoClickerCosts[upgrades.autoClickerLevel] ? 'pointer' : 'not-allowed',
                                        width: '100%',
                                        transition: 'all 0.3s',
                                        boxShadow: upgrades.fireworksPopped >= autoClickerCosts[upgrades.autoClickerLevel] ? '0 4px 8px rgba(76, 175, 80, 0.3)' : 'none'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (upgrades.fireworksPopped >= autoClickerCosts[upgrades.autoClickerLevel]) {
                                            e.currentTarget.style.transform = 'scale(1.05)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                    onFocus={(e) => {
                                        if (upgrades.fireworksPopped >= autoClickerCosts[upgrades.autoClickerLevel]) {
                                            e.currentTarget.style.transform = 'scale(1.05)';
                                        }
                                    }}
                                    onBlur={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                >
                                    ⬆️ Upgrade Now
                                </button>
                            </>
                        ) : (
                            <div style={{ 
                                textAlign: 'center',
                                padding: '20px',
                                backgroundColor: '#e8f5e9',
                                borderRadius: '8px'
                            }}>
                                <p style={{ color: '#4CAF50', fontWeight: 'bold', fontSize: '20px', margin: 0 }}>
                                    ✓ MAX LEVEL REACHED!
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Spawn Speed Upgrade */}
                    <div style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        padding: '25px',
                        borderRadius: '15px',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                        border: '3px solid #2196F3',
                        transition: 'transform 0.2s',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            backgroundColor: '#2196F3',
                            color: 'white',
                            padding: '5px 15px',
                            borderRadius: '20px',
                            fontSize: '14px',
                            fontWeight: 'bold'
                        }}>
                            Level {upgrades.spawnSpeedLevel}/{spawnSpeedCosts.length}
                        </div>
                        <h3 style={{ color: '#2196F3', marginBottom: '15px', fontSize: '28px', fontWeight: 'bold' }}>
                            ⚡ Spawn Speed
                        </h3>
                        <p style={{ marginBottom: '15px', color: '#555', lineHeight: '1.6', minHeight: '80px' }}>
                            Increases how often fireworks appear on your screen! More fireworks = more opportunities to click.
                            {upgrades.spawnSpeedLevel > 0 && (
                                <span style={{ display: 'block', marginTop: '10px', color: '#2196F3', fontWeight: 'bold' }}>
                                    ✓ Active: Spawn time reduced by {upgrades.spawnSpeedLevel * 20}%
                                </span>
                            )}
                        </p>
                        {upgrades.spawnSpeedLevel < spawnSpeedCosts.length ? (
                            <>
                                <p style={{ fontSize: '20px', marginBottom: '20px', textAlign: 'center' }}>
                                    Cost: <strong style={{ color: '#d32f2f', fontSize: '24px' }}>
                                        {spawnSpeedCosts[upgrades.spawnSpeedLevel]} 🎆
                                    </strong>
                                </p>
                                <button 
                                    onClick={purchaseSpawnSpeed}
                                    disabled={upgrades.fireworksPopped < spawnSpeedCosts[upgrades.spawnSpeedLevel]}
                                    style={{
                                        padding: '15px 25px',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        backgroundColor: upgrades.fireworksPopped >= spawnSpeedCosts[upgrades.spawnSpeedLevel] ? '#2196F3' : '#ccc',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '8px',
                                        cursor: upgrades.fireworksPopped >= spawnSpeedCosts[upgrades.spawnSpeedLevel] ? 'pointer' : 'not-allowed',
                                        width: '100%',
                                        transition: 'all 0.3s',
                                        boxShadow: upgrades.fireworksPopped >= spawnSpeedCosts[upgrades.spawnSpeedLevel] ? '0 4px 8px rgba(33, 150, 243, 0.3)' : 'none'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (upgrades.fireworksPopped >= spawnSpeedCosts[upgrades.spawnSpeedLevel]) {
                                            e.currentTarget.style.transform = 'scale(1.05)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                    onFocus={(e) => {
                                        if (upgrades.fireworksPopped >= spawnSpeedCosts[upgrades.spawnSpeedLevel]) {
                                            e.currentTarget.style.transform = 'scale(1.05)';
                                        }
                                    }}
                                    onBlur={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                >
                                    ⬆️ Upgrade Now
                                </button>
                            </>
                        ) : (
                            <div style={{ 
                                textAlign: 'center',
                                padding: '20px',
                                backgroundColor: '#e3f2fd',
                                borderRadius: '8px'
                            }}>
                                <p style={{ color: '#2196F3', fontWeight: 'bold', fontSize: '20px', margin: 0 }}>
                                    ✓ MAX LEVEL REACHED!
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Firework Worth Upgrade - NEW */}
                    <div style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        padding: '25px',
                        borderRadius: '15px',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                        border: '3px solid #FF9800',
                        transition: 'transform 0.2s',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            backgroundColor: '#FF9800',
                            color: 'white',
                            padding: '5px 15px',
                            borderRadius: '20px',
                            fontSize: '14px',
                            fontWeight: 'bold'
                        }}>
                            Level {upgrades.fireworkWorthLevel}/{fireworkWorthCosts.length}
                        </div>
                        <h3 style={{ color: '#FF9800', marginBottom: '15px', fontSize: '28px', fontWeight: 'bold' }}>
                            💎 Firework Worth
                        </h3>
                        <p style={{ marginBottom: '15px', color: '#555', lineHeight: '1.6', minHeight: '80px' }}>
                            Increases the value of each Firework you pop! Each level adds +1 to your score per click.
                            {upgrades.fireworkWorthLevel > 0 && (
                                <span style={{ display: 'block', marginTop: '10px', color: '#FF9800', fontWeight: 'bold' }}>
                                    ✓ Active: Each firework worth {upgrades.fireworkWorthLevel + 1} points
                                </span>
                            )}
                        </p>
                        {upgrades.fireworkWorthLevel < fireworkWorthCosts.length ? (
                            <>
                                <p style={{ fontSize: '20px', marginBottom: '20px', textAlign: 'center' }}>
                                    Cost: <strong style={{ color: '#d32f2f', fontSize: '24px' }}>
                                        {fireworkWorthCosts[upgrades.fireworkWorthLevel]} 🎆
                                    </strong>
                                </p>
                                <button 
                                    onClick={purchaseFireworkWorth}
                                    disabled={upgrades.fireworksPopped < fireworkWorthCosts[upgrades.fireworkWorthLevel]}
                                    style={{
                                        padding: '15px 25px',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        backgroundColor: upgrades.fireworksPopped >= fireworkWorthCosts[upgrades.fireworkWorthLevel] ? '#FF9800' : '#ccc',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '8px',
                                        cursor: upgrades.fireworksPopped >= fireworkWorthCosts[upgrades.fireworkWorthLevel] ? 'pointer' : 'not-allowed',
                                        width: '100%',
                                        transition: 'all 0.3s',
                                        boxShadow: upgrades.fireworksPopped >= fireworkWorthCosts[upgrades.fireworkWorthLevel] ? '0 4px 8px rgba(255, 152, 0, 0.3)' : 'none'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (upgrades.fireworksPopped >= fireworkWorthCosts[upgrades.fireworkWorthLevel]) {
                                            e.currentTarget.style.transform = 'scale(1.05)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                    onFocus={(e) => {
                                        if (upgrades.fireworksPopped >= fireworkWorthCosts[upgrades.fireworkWorthLevel]) {
                                            e.currentTarget.style.transform = 'scale(1.05)';
                                        }
                                    }}
                                    onBlur={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                >
                                    ⬆️ Upgrade Now
                                </button>
                            </>
                        ) : (
                            <div style={{ 
                                textAlign: 'center',
                                padding: '20px',
                                backgroundColor: '#fff3e0',
                                borderRadius: '8px'
                            }}>
                                <p style={{ color: '#FF9800', fontWeight: 'bold', fontSize: '20px', margin: 0 }}>
                                    ✓ MAX LEVEL REACHED!
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Lucky Click Upgrade - NEW */}
                    <div style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        padding: '25px',
                        borderRadius: '15px',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                        border: '3px solid #9C27B0',
                        transition: 'transform 0.2s',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            backgroundColor: '#9C27B0',
                            color: 'white',
                            padding: '5px 15px',
                            borderRadius: '20px',
                            fontSize: '14px',
                            fontWeight: 'bold'
                        }}>
                            Level {upgrades.luckyClickLevel}/{luckyClickCosts.length}
                        </div>
                        <h3 style={{ color: '#9C27B0', marginBottom: '15px', fontSize: '28px', fontWeight: 'bold' }}>
                            🍀 Lucky Click
                        </h3>
                        <p style={{ marginBottom: '15px', color: '#555', lineHeight: '1.6', minHeight: '80px' }}>
                            Gives you a chance to get double points on each click! Feeling lucky?
                            {upgrades.luckyClickLevel > 0 && (
                                <span style={{ display: 'block', marginTop: '10px', color: '#9C27B0', fontWeight: 'bold' }}>
                                    ✓ Active: {upgrades.luckyClickLevel * 5}% chance for 2x points
                                </span>
                            )}
                        </p>
                        {upgrades.luckyClickLevel < luckyClickCosts.length ? (
                            <>
                                <p style={{ fontSize: '20px', marginBottom: '20px', textAlign: 'center' }}>
                                    Cost: <strong style={{ color: '#d32f2f', fontSize: '24px' }}>
                                        {luckyClickCosts[upgrades.luckyClickLevel]} 🎆
                                    </strong>
                                </p>
                                <button 
                                    onClick={purchaseLuckyClick}
                                    disabled={upgrades.fireworksPopped < luckyClickCosts[upgrades.luckyClickLevel]}
                                    style={{
                                        padding: '15px 25px',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        backgroundColor: upgrades.fireworksPopped >= luckyClickCosts[upgrades.luckyClickLevel] ? '#9C27B0' : '#ccc',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '8px',
                                        cursor: upgrades.fireworksPopped >= luckyClickCosts[upgrades.luckyClickLevel] ? 'pointer' : 'not-allowed',
                                        width: '100%',
                                        transition: 'all 0.3s',
                                        boxShadow: upgrades.fireworksPopped >= luckyClickCosts[upgrades.luckyClickLevel] ? '0 4px 8px rgba(156, 39, 176, 0.3)' : 'none'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (upgrades.fireworksPopped >= luckyClickCosts[upgrades.luckyClickLevel]) {
                                            e.currentTarget.style.transform = 'scale(1.05)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                    onFocus={(e) => {
                                        if (upgrades.fireworksPopped >= luckyClickCosts[upgrades.luckyClickLevel]) {
                                            e.currentTarget.style.transform = 'scale(1.05)';
                                        }
                                    }}
                                    onBlur={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                >
                                    ⬆️ Upgrade Now
                                </button>
                            </>
                        ) : (
                            <div style={{ 
                                textAlign: 'center',
                                padding: '20px',
                                backgroundColor: '#f3e5f5',
                                borderRadius: '8px'
                            }}>
                                <p style={{ color: '#9C27B0', fontWeight: 'bold', fontSize: '20px', margin: 0 }}>
                                    ✓ MAX LEVEL REACHED!
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Gold Rush Upgrade - NEW */}
                    <div style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        padding: '25px',
                        borderRadius: '15px',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                        border: '3px solid #FFD700',
                        transition: 'transform 0.2s',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            backgroundColor: '#FFD700',
                            color: '#333',
                            padding: '5px 15px',
                            borderRadius: '20px',
                            fontSize: '14px',
                            fontWeight: 'bold'
                        }}>
                            Level {upgrades.goldRushLevel}/{goldRushCosts.length}
                        </div>
                        <h3 style={{ color: '#DAA520', marginBottom: '15px', fontSize: '28px', fontWeight: 'bold' }}>
                            🌟 Gold Rush
                        </h3>
                        <p style={{ marginBottom: '15px', color: '#555', lineHeight: '1.6', minHeight: '80px' }}>
                            Occasionally spawn golden fireworks worth 5x normal points! Strike gold!
                            {upgrades.goldRushLevel > 0 && (
                                <span style={{ display: 'block', marginTop: '10px', color: '#DAA520', fontWeight: 'bold' }}>
                                    ✓ Active: {upgrades.goldRushLevel * 3}% chance for golden firework
                                </span>
                            )}
                        </p>
                        {upgrades.goldRushLevel < goldRushCosts.length ? (
                            <>
                                <p style={{ fontSize: '20px', marginBottom: '20px', textAlign: 'center' }}>
                                    Cost: <strong style={{ color: '#d32f2f', fontSize: '24px' }}>
                                        {goldRushCosts[upgrades.goldRushLevel]} 🎆
                                    </strong>
                                </p>
                                <button 
                                    onClick={purchaseGoldRush}
                                    disabled={upgrades.fireworksPopped < goldRushCosts[upgrades.goldRushLevel]}
                                    style={{
                                        padding: '15px 25px',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        backgroundColor: upgrades.fireworksPopped >= goldRushCosts[upgrades.goldRushLevel] ? '#FFD700' : '#ccc',
                                        color: '#333',
                                        border: 'none',
                                        borderRadius: '8px',
                                        cursor: upgrades.fireworksPopped >= goldRushCosts[upgrades.goldRushLevel] ? 'pointer' : 'not-allowed',
                                        width: '100%',
                                        transition: 'all 0.3s',
                                        boxShadow: upgrades.fireworksPopped >= goldRushCosts[upgrades.goldRushLevel] ? '0 4px 8px rgba(255, 215, 0, 0.3)' : 'none'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (upgrades.fireworksPopped >= goldRushCosts[upgrades.goldRushLevel]) {
                                            e.currentTarget.style.transform = 'scale(1.05)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                    onFocus={(e) => {
                                        if (upgrades.fireworksPopped >= goldRushCosts[upgrades.goldRushLevel]) {
                                            e.currentTarget.style.transform = 'scale(1.05)';
                                        }
                                    }}
                                    onBlur={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                >
                                    ⬆️ Upgrade Now
                                </button>
                            </>
                        ) : (
                            <div style={{ 
                                textAlign: 'center',
                                padding: '20px',
                                backgroundColor: '#fffbea',
                                borderRadius: '8px'
                            }}>
                                <p style={{ color: '#DAA520', fontWeight: 'bold', fontSize: '20px', margin: 0 }}>
                                    ✓ MAX LEVEL REACHED!
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Click Multiplier Upgrade - NEW */}
                    <div style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        padding: '25px',
                        borderRadius: '15px',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                        border: '3px solid #E91E63',
                        transition: 'transform 0.2s',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            backgroundColor: '#E91E63',
                            color: 'white',
                            padding: '5px 15px',
                            borderRadius: '20px',
                            fontSize: '14px',
                            fontWeight: 'bold'
                        }}>
                            Level {upgrades.clickMultiplierLevel}/{clickMultiplierCosts.length}
                        </div>
                        <h3 style={{ color: '#E91E63', marginBottom: '15px', fontSize: '28px', fontWeight: 'bold' }}>
                            ⚡ Click Multiplier
                        </h3>
                        <p style={{ marginBottom: '15px', color: '#555', lineHeight: '1.6', minHeight: '80px' }}>
                            Multiplies all your clicks! The ultimate power-up for serious firework hunters.
                            {upgrades.clickMultiplierLevel > 0 && (
                                <span style={{ display: 'block', marginTop: '10px', color: '#E91E63', fontWeight: 'bold' }}>
                                    ✓ Active: {(1 + upgrades.clickMultiplierLevel * 0.1).toFixed(1)}x multiplier
                                </span>
                            )}
                        </p>
                        {upgrades.clickMultiplierLevel < clickMultiplierCosts.length ? (
                            <>
                                <p style={{ fontSize: '20px', marginBottom: '20px', textAlign: 'center' }}>
                                    Cost: <strong style={{ color: '#d32f2f', fontSize: '24px' }}>
                                        {clickMultiplierCosts[upgrades.clickMultiplierLevel]} 🎆
                                    </strong>
                                </p>
                                <button 
                                    onClick={purchaseClickMultiplier}
                                    disabled={upgrades.fireworksPopped < clickMultiplierCosts[upgrades.clickMultiplierLevel]}
                                    style={{
                                        padding: '15px 25px',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        backgroundColor: upgrades.fireworksPopped >= clickMultiplierCosts[upgrades.clickMultiplierLevel] ? '#E91E63' : '#ccc',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '8px',
                                        cursor: upgrades.fireworksPopped >= clickMultiplierCosts[upgrades.clickMultiplierLevel] ? 'pointer' : 'not-allowed',
                                        width: '100%',
                                        transition: 'all 0.3s',
                                        boxShadow: upgrades.fireworksPopped >= clickMultiplierCosts[upgrades.clickMultiplierLevel] ? '0 4px 8px rgba(233, 30, 99, 0.3)' : 'none'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (upgrades.fireworksPopped >= clickMultiplierCosts[upgrades.clickMultiplierLevel]) {
                                            e.currentTarget.style.transform = 'scale(1.05)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                    onFocus={(e) => {
                                        if (upgrades.fireworksPopped >= clickMultiplierCosts[upgrades.clickMultiplierLevel]) {
                                            e.currentTarget.style.transform = 'scale(1.05)';
                                        }
                                    }}
                                    onBlur={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                >
                                    ⬆️ Upgrade Now
                                </button>
                            </>
                        ) : (
                            <div style={{ 
                                textAlign: 'center',
                                padding: '20px',
                                backgroundColor: '#fce4ec',
                                borderRadius: '8px'
                            }}>
                                <p style={{ color: '#E91E63', fontWeight: 'bold', fontSize: '20px', margin: 0 }}>
                                    ✓ MAX LEVEL REACHED!
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Instructions */}
                <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    padding: '25px',
                    borderRadius: '15px',
                    marginTop: '30px',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                    border: '3px solid #ffd700'
                }}>
                    <h3 style={{ 
                        color: '#d32f2f', 
                        marginBottom: '20px',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}>
                        ℹ️ How to Play
                    </h3>
                    <ol style={{ lineHeight: '2', color: '#555', fontSize: '16px', paddingLeft: '30px' }}>
                        <li><strong>Click flying Fireworks</strong> anywhere on the site to pop them and earn points!</li>
                        <li><strong>Spend your points</strong> on upgrades to become more efficient</li>
                        <li><strong>Auto-clicker</strong> works on ALL pages across the site automatically</li>
                        <li><strong>Spawn speed</strong> increases how often Fireworks appear</li>
                        <li><strong>firework worth</strong> makes each click more valuable</li>
                        <li><strong>Lucky click</strong> gives you a chance for double points</li>
                        <li><strong>Gold rush</strong> spawns special golden fireworks worth 5x points</li>
                        <li><strong>Click multiplier</strong> boosts all your clicks exponentially</li>
                        <li><strong>Pro tip:</strong> Combine all upgrades for maximum efficiency!</li>
                    </ol>
                </div>
            </div>
            <Cloudfooter />
        </div>
    );
};

export default FireworkUpgrades;
