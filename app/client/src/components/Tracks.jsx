import React from 'react';
import './css/Tracks.css';

const Tracks = (props) => {

    return (
        <div className="mainTracks">
            <div className="recommendText">
                Here are some the recommended tracks we found for you:
            </div>
            <div className="tracks">
                <div className="grid">
                    {
                        props.tracks.map((track) => (
                            <div className="track">
                                <a href={track.album.external_urls.spotify}>
                                    {/* <img className="trackPic" src={track.album.images[2].url} alt="yeet"></img> */}
                                    <iframe src={`https://open.spotify.com/embed/track/${track.external_urls.spotify.split('/track/')[1]}`} width="250" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                                </a>
                            </div>
                        ))
                            
                    }
                </div>
            </div>
            <div className="buttons">
                <div className="tryAgain" onClick={() => props.createPlaylist()}>
                    Create Playlist
                    <i className="fab fa-spotify"></i>
                </div>
                <div className="tryAgain" onClick={props.tryAgain}>
                    Try Again
                </div>
            </div>
        </div>
    )
}

export default Tracks;