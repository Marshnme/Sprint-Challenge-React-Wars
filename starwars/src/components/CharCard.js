import React from 'react';

    const CharCard = props => {
        return(
            <div className = "container">
                <h2>{props.name}</h2>
                <p>{props.height}</p>
                <p>{props.mass}</p>

            </div>
        )
    };

export default CharCard;