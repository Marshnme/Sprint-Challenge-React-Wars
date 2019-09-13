import React, {useEffect, useState} from 'react';
import CharCard from "./CharCard"
import axios from "axios";
import styled from "styled-components";

const Entry = styled.div`
    display:flex;
    flex-flow: row wrap;
    justify-content: space-around;
    
`;

function CharList(){
    const [starPeople, SetStarPeople ] = useState([])
    useEffect(() => {
        axios
            .get("https://swapi.co/api/people/")
            .then(response => {
                SetStarPeople(response.data.results);
                console.log(response.data.results)
            })
    },[])

    return (
        <div className = "container">
            <Entry>
                {starPeople.map(item =>{
                    return (
                        <CharCard
                            name = {item.name}
                            height = {item.height}
                            mass = {item.mass}
                        />
                    )
                })}
            </Entry>
        </div>

    )
}



export default CharList;