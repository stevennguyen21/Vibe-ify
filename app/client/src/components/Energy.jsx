import React from 'react';
import './css/Energy.css';
import Slider from './Slider.jsx';
import Genres from './Genres.jsx';
import getTracks from '../Actions.js';
import Tracks from './Tracks.jsx';
import ImageSlider from './ImageSlider.jsx';
import lowEnergyTracks from '../exampleTracks/lowEnergy.js';
import highEnergyTracks from '../exampleTracks/highEnergy.js';



class Energy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: [0, 100],
            type: 'energy',
            tracks: [],
        }
        this.updateRange = this.updateRange.bind(this);
        this.discover = this.discover.bind(this);
        this.tryAgain = this.tryAgain.bind(this);
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

        }
        setTracks();
        // fix it so it automatically doesn't just goto the found tracks page
    }


    render() {
        if (this.state.tracks === undefined || this.state.tracks.length === 0) {
            return (
                <div className="energy-page">
                    <div className="main">
                        <div className="overline">
                            <div className="page">
                                ENERGY
                            </div>
                            <div className="tooltip">
                                <i className="far fa-question-circle"></i>
                                <span className="tooltip-text">
                                Energy is a measure from 0 to 100 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy. 
                                </span>
                            </div>
                        </div>
                        <div className="instructions">
                            Drag the sliders to refine your selection, then choose up to 5 genres and click 'Get Recommendations'
                        </div>
                        <div className="examples">
                            <div className="example1">
                                Some low energy songs:
                                <ImageSlider slides={lowEnergyTracks}/>
                            </div>
                            <div className="example2">
                                Some high energy songs:
                                <ImageSlider slides={highEnergyTracks}/>
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


export default Energy;