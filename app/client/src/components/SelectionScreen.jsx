import React from 'react';
import './css/SelectionScreen.css';
import Energy from './Energy.jsx';
import BPM from './BPM.jsx';
import Mood from './Mood.jsx';
import Navbar from './Navbar.jsx';

class SelectionScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 'Home'
        }
        this.setPage = this.setPage.bind(this);
    }

    setPage(input) {
        this.setState({
            page: input
        })
    }
    
    render() {
        if (this.state.page === 'Home') {
            return (
                <div>
                    <Navbar setPage={this.setPage}/>
                    <div className="container">
                        <div className="box" onClick={() => this.setPage('Energy')}> 
                            <div className="icon">
                                <i class="fas fa-battery-full"></i>
                            </div>   
                            <div className="content">
                                <h3>Energy</h3>
                                <p>
                                    Find a playlist based on an energy you select
                                </p>
                            </div>
                        </div>
                        <div className="box" onClick={() => this.setPage('BPM')}>    
                            <div className="icon">
                                <i class="fa fa-heartbeat" aria-hidden="true"></i>
                            </div>
                            <div className="content">
                                <h3>BPM</h3>
                                <p>
                                    Find a playlist based on a range of beats per minute you set
                                </p>
                            </div>
                        </div>
                        <div className="box"  onClick={() => this.setPage('Mood')}>  
                            <div className="icon">
                                <i class="far fa-smile-beam"></i>
                            </div> 
                            <div className="content">
                                <h3>Mood</h3>
                                <p>
                                    Find a playlist based on your mood
                                </p>
                            </div> 
                        </div>
            
                    </div>
                </div>
            );
        } else if (this.state.page === 'Energy') {
            return (
                <div>
                    <Navbar setPage={this.setPage}/>
                    <Energy setPage={this.setPage} params={this.props.params} createPlaylist={this.props.createPlaylist}/>
                </div>
            )
        } else if (this.state.page === 'BPM') {
            return (
                <div>
                    <Navbar setPage={this.setPage}/>
                    <BPM setPage={this.setPage} params={this.props.params}/>
                </div>
            )
        } else if (this.state.page === 'Mood') {
            return (
                <div>
                    <Navbar setPage={this.setPage}/>
                    <Mood />
                </div>
            )
        }
    }
}


export default SelectionScreen;