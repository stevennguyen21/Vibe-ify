import React from 'react';
import './css/BPM.css';
import Slider from './Slider.jsx';
import Genres from './Genres.jsx';
import getTracks from '../Actions.js';
import getProfile from '../Playlist.js';
import Tracks from './Tracks.jsx';
import ImageSlider from './ImageSlider.jsx';
import lowBPMTracks from '../exampleTracks/lowBPM.js';
import highBPMTracks from '../exampleTracks/highBPM.js';

class BPM extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: [0, 100],
            type: 'tempo',
            tracks: [],
        }
        this.updateRange = this.updateRange.bind(this);
        this.discover = this.discover.bind(this);
        this.tryAgain = this.tryAgain.bind(this);
        this.getProfile = this.getProfile.bind(this);
    }
    updateRange(e, data) {
        this.setState({
            value: data
        })
    }

    tryAgain() {
        this.setState({tracks : []})
    }

    discover(input) {
        let temp = input.join('%2C%20').toLowerCase();
        let temp2 = this.state.value.map((value) => value / 100);
        // let tracks = getTracks(temp, this.state.type, temp2[0].toFixed(1), temp2[1].toFixed(1), this.props.params)
        const setTracks = async() => {
            const tracks = await getTracks(temp, this.state.type, temp2[0].toFixed(1), temp2[1].toFixed(1), this.props.params);
            this.setState({ tracks })
            console.log('discovered ', this.state.discovered)
        }
        setTracks();
        // fix it so it automatically doesn't just goto the found tracks page
    }

    getProfile() {
        const getUser = async() => {
            const user = await getProfile(this.props.params);
            console.log(user);
        }
        getUser();
    }
    render() {
        if (this.state.tracks === undefined || this.state.tracks.length === 0) {
            return (
                <div className="bpm-page">
                    <div className="main">
                        <div className="overline">
                            <div className="page">
                                BPM
                            </div>
                            <div className="tooltip">
                                <i className="far fa-question-circle"></i>
                                <span className="tooltip-text">
                                    The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.                               
                                </span>
                            </div>
                        </div>
                        <div className="instructions">
                            Drag the sliders to refine your selection, then choose up to 5 genres and click 'Get Recommendations'
                        </div>
                        <div className="examples">
                            <div className="example1">
                                Some songs with low BPM:
                                <ImageSlider slides={lowBPMTracks}/>
                            </div>
                            <div className="example2">
                            Some songs with high BPM:
                                <ImageSlider slides={highBPMTracks}/>
                            </div>
                        </div>
                        <div style={{width:600}}>
                            <Slider value={this.state.value} onChange={this.updateRange} />
                        </div>
                        <div className="values">
                            <div className="min">
                                {this.state.value[0]}
                            </div>
                            <div className="max">
                                {this.state.value[1]}
                            </div>
                        </div>
                        <div style={{width:600}}>
                            Choose up to 5 genres:
                            <div className="genres">
                                <Genres discover={this.discover}/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <Tracks tracks={this.state.tracks.slice(0, 12)} tryAgain={this.tryAgain} access={this.props.params} createPlaylist={this.props.createPlaylist}/>
            )
        }

    }

}



export default BPM;