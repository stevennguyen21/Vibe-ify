import React from 'react';
import './css/Navbar.css';

const Navbar = (props) => (


    <div className="nav-main">
        <div>
            <i className="fas fa-record-vinyl fa-2x"></i>
            <div className="nav-logo" onClick={() => props.setPage('Home')}>
                Vibe-ify
            </div>
        </div>
        <nav>
            <ul className="nav-links">
                <li onClick={() => props.setPage('Home')}>Home</li>
                <li onClick={() => props.setPage('Energy')}>Energy</li>
                <li onClick={() => props.setPage('BPM')}>BPM</li>
                <li onClick={() => props.setPage('Mood')}>Mood</li>
            </ul>
        </nav>
    </div>
);

export default Navbar;