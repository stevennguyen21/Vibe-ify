import React from 'react';
import './css/Genres.css';
import Genre from './Genre.jsx';

class Genres extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            genres: ['Pop', 'Rock', 'Hip-Hop', 'Electronic', 'Indie', 'Metal', 'Punk', 'Classical', 'Classical', 'Alternative', 'Chill', 'Country', 'Techno'],
            count: 0,
            selected: [],
            max: false
        }
        this.handleSelect = this.handleSelect.bind(this);
    }    

    handleSelect(input) {
        if (this.state.count !== 5) {
            let temp = this.state.selected;
            if (this.state.selected.indexOf(input) === -1) {
                temp.push(input);
                this.setState({ 
                    selected: temp,
                    count: this.state.selected.length
                });

            } else {
                temp.splice(temp.indexOf(input), 1);
                this.setState({ 
                    selected: temp,
                    count: this.state.selected.length
                });
            }
        } else {
            let temp = this.state.selected;
            if (this.state.selected.indexOf(input) !== -1) {
                temp.splice(temp.indexOf(input), 1);
                this.setState({
                    selected: temp,
                    count: this.state.selected.length
                })
            }
        }
        if (this.state.selected.length === 5) {
            this.setState({ max : true }) 
        } else {
            this.setState({ max : false })
        }
    }


    render() {
        return (
            <div className="genres">
                {
                    this.state.genres.map((genre) => (
                        <Genre className="genre" genre={genre} handleSelect={this.handleSelect} max={this.state.max}/>
                    ))
                }
                <div>
                    Ready?
                    <div className="genre" onClick={() => this.props.discover(this.state.selected)}>Get Recommendations</div>
                </div>
            </div>
        )
    }
}

export default Genres;