import React, { useState } from 'react';
import './css/Genre.css';

const Genre = (props) => {
    const [selected, updateSelected] = useState(false);


    if (selected) {
        return (
            <div className="selectedGenre" onClick={() => {
                updateSelected(!selected);
                props.handleSelect(props.genre)
                }}>
                {props.genre}
            </div>
        )
    } else {
        return (
            <div className="genre" onClick={() => {
                updateSelected(!selected);
                props.handleSelect(props.genre)
                }}>
                {props.genre}
            </div>
        )
    }
}


export default Genre;