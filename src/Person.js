import React from "react";

const person = () =>{

    let rando = Math.floor(Math.random()* 30);

    return (
        <div>
            <p>Some nonsense from a tutorial</p>
            <p>Oh look a random number {rando}</p>
        </div>

    )
}

export default person;