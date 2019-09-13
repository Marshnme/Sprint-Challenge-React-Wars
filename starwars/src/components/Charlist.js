import React, {useEffect, useState} from 'react';
import CharCard from "./CharCard"
import axios from "axios";


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
            {starPeople.map(item =>{
                return (
                    <CharCard
                        name = {item.name}
                        height = {item.height}
                        mass = {item.mass}
                    />
                )
            })}

        </div>

    )
}



export default CharList;