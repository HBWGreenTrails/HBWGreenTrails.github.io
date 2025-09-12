import '../styles/style.css'
import '../styles/sadnavbar.css'
import React from 'react';
import { Link } from 'react-router-dom';

    interface NavbarProps {
        bgcolor?: string;
        boxShadow?: boolean;
    }

    const Navbar: React.FC<NavbarProps> = ({ bgcolor = 'rgb(94, 136, 94)', boxShadow = true }) => {
        return (
            <div id='navbar' style={{ backgroundColor: bgcolor, boxShadow: boxShadow ? '0 4px 8px -2px #222' : 'none' }}>
                <div className='link' id='homepage'><Link className="a" to="/HBWGreentrails/">home</Link></div>
                <div className='link' id='volunteer'><Link className="a" to="/volenterpage/">Volenter!!</Link></div>
                <div className='link' id='leaderboard'><Link className="a" to="/leaderboard/">Leaderboard</Link></div>
                <div className='link' id='Signup'><Link className="a" to="/signup/">Signup</Link></div>
            </div> 
        )
    }
    export default Navbar;
    