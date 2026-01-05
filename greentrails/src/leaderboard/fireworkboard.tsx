import '../styles/style.css'
import '../styles/leaderboard.css'
import React, { useEffect } from 'react';
import { db } from '../base/firebaseConfig';
import { collection, getDocs } from "firebase/firestore";

const FireworkLeaderboard: React.FC = () => {
    interface User {
        id: string;
        fireworksPopped: number;
        Name: string;
    }

    const [leaderboardData, setLeaderboardData] = React.useState<User[]>([]);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "Users"));
                const fetchedData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    fireworksPopped: doc.data().fireworksPopped || 0,
                    Name: doc.data().Name,
                })) as User[];
                setLeaderboardData(fetchedData.sort((a, b) => b.fireworksPopped - a.fireworksPopped));
            } catch (error) {
                console.error("Error fetching firework leaderboard:", error);
            }
        };
        fetchLeaderboard();

        // Refresh leaderboard every 5 seconds
        const interval = setInterval(fetchLeaderboard, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div id='firework-table'>
            <h3 id='firework-title'>Fireworks Popped</h3>
            <div id='firework-leaderboard' className='boardcon'> 
                {leaderboardData.map((user, index) => (
                    <div className='lbentrie' key={user.id}>
                        <p className='place'>{index+1}.</p>
                        <p className='username'>{user.Name}</p>
                        <p className='userscore'>{user.fireworksPopped}</p>
                        <p className='username'>  </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FireworkLeaderboard;
