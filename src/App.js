import React, {Component} from 'react';
import './App.css';
import Person from './Person';

/*
Basic react program for the use of keeping skills sharp
most of this is in the Person.js file
*/

class App extends Component {

  state = {
     persons : [
     {name: 'Chasey', age: 34},
     {name: 'Steffi', age: 28},
     {name: 'Ginger', age: 22},
   ],
    moreUseless: 'empty data',
    showPersons : false,
  }



   nameChangeHandler = (event)=>{
    this.setState({
      persons:[
       {name: 'Chasey', age: 45},
       {name: event.target.value, age: 21},
       {name: 'Bonnie', age: 19},
     ],
     otherDate: 'no one cares',
    })
   }

   togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow}); 
   }


   render(){

    const betterButton = {
      color: "1c1c1c",
      backgroundColor: 'antiquewhite',
      border: '3px solid #04d4db',
      borderRadius: "10px",
      fontSize:".8em",
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons){
      persons = (
      <div>
          { this.state.persons.map( stuff => {
              return <Person
              name={stuff.name}
              age={stuff.age} />
              
            })}
      </div>
      );
    }

    return (

      <div className="App">
        <h1>bumping the button down</h1>
        <button 
        onClick={this.togglePersonsHandler}
        style={betterButton}
        >Hide Stuff</button>
      {persons}
      </div>
    );
  }
}

export default App;