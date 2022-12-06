import React from "react";


/*
Useage of props and state
*/

const person = (props) =>{

    let rando = Math.floor(Math.random()* 30);

    return (
        <div>
            <p>Some nonsense from a tutorial</p>
            <p onClick={props.tagclick}>a person named {props.name} this is my number {props.age}</p>
            <p>{props.children} &lt;~~ props.children</p>
            <p>Oh look a random number</p>
            <input 
            type="text" 
            onChange={props.changed} 
            value={props.name}/>
            <hr/>
        </div>
    )
}

export default person; 