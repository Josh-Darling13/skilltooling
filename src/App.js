import React, {Component, useState} from 'react';
import './App.css';
import Person from './Person';




class App extends Component {

  state = {
     persons : [
     {name: 'Chasey', age: 34},
     {name: 'Steffi', age: 28},
     {name: 'Ginger', age: 22},
   ],
    moreUseless: 'empty data'
  }

  switchNameHandler = () => {
    console.log('clicked');
    this.setState({
      persons:[
       {name: 'Roxy', age: 45},
       {name: 'Nancy', age: 21},
       {name: 'Bonnie', age: 19},
     ],
     otherDate: 'no one cares',
    })
   }

   render(){

    return (

      <div className="App">
        <h1>bumping the button down</h1><button onClick={this.switchNameHandler}>REMEMBER TO PAY YOUR BILLS</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
          
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          tagclick={this.switchNameHandler}
        >
          Some text for example stuff </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}>
          Probably Rotten
        </Person>
      </div>
      
    );
  }
}

export default App;