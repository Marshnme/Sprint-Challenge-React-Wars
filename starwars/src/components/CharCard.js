import React from 'react';
import styled from "styled-components";

const Card = styled.div`
    width:30%;
    border: 1px solid black;
    margin-top:3%;
    background:#f7b94f;
`;

    const CharCard = props => {
        return(
            <Card>
                <h2>{props.name}</h2>
                <p>Height: {props.height}</p>
                <p>Mass: {props.mass}</p>

            </Card>
        )
    };

export default CharCard;