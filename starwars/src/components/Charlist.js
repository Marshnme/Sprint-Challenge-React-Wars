import React, {useEffect, useState} from 'react';
import CharCard from "./CharCard"
import axios from "axios";


function CharList(){
    const [people, SetPeople ] = useState("")
    useEffect(() => {
        axios
            .get("https://swapi.co/api/people/")
            .then(response => {
                console.log("SW data", response.data.results)
            })
    },[])

    return (
        <div className = "container">
            {people.map(item =>{
                return (
                    <CharCard
                        
                    
                    />
                )
            })}

        </div>

    )
}



export default CharList;