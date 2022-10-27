import React from "react";

const person = (props) =>{

    let rando = Math.floor(Math.random()* 30);

    return (
        <div>
            <p>Some nonsense from a tutorial</p>
            <p>a person named {props.name} this is my number {props.age}</p>
            <p>Oh look a random number</p>
            <hr/>
        </div>

    )
}

export default person;