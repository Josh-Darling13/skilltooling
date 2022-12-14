import React from "react";
import './Person.css'

/*
Useage of props and state,
state is controlled in the App.js
file
*/

const person = (props) =>{

    let rando = Math.floor(Math.random()* 30);

    return (
        <div className="Person" >
            <p>Some nonsense from a tutorial</p>
            <p onClick={props.tagclick}>a person named {props.name} this is my number {props.age}</p>
            <p>{props.children} &lt;~~ props.children</p>
            <p>Oh look a random number</p>
            <input 
            className="Input"
            type="text" 
            onChange={props.changed} 
            value={props.name}/>
            <hr/>
        </div>
    )
}

export default person; 