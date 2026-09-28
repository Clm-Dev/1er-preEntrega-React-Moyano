import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Header() {
    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 30px', backgroundColor: '#1a1a1a', borderBottom: '2px solid #00ffcc' }}>
            <div>
                <Link to="/" style={{ color: '#00ffcc', fontSize: '24px', fontWeight: 'bold', textDecoration: 'none' }}>
                    Mundo Gamer 🎮
                </Link>
            </div>
            <Navbar />
        </header>
    );
}

export default Header;