import React from 'react';
import './css/MainScreen.css';

const MainScreen = () => (
    <div className="main">
        <div>
            <h1>
                Spotify Recommender
            </h1>
        </div>
        <div>
            <p>
                Easy User Interface For Fine Tuning Your Recommendations
            </p>
        </div>
        <a href="http://localhost:8888">
            <button className="login">Login with Spotify</button>
        </a>
    </div>
)

export default MainScreen;