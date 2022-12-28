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
    moreUseless: 'empty data'
  }

  switchNameHandler = (newName) => {
    console.log('clicked');
    this.setState({
      persons:[
       {name: newName, age: 45},
       {name: 'Nancy', age: 21},
       {name: 'Bonnie', age: 19},
     ],
     otherDate: 'no one cares',
    })
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

   render(){

    return (

      <div className="App">
        <h1>bumping the button down</h1>
        <button onClick={()=> this.switchNameHandler('August')}>Hide Stuff</button>

        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            tagclick={this.switchNameHandler.bind(this, 'Alexis')}
            changed={this.nameChangeHandler}
          >
            Some text for example stuff </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}>
            Probably Rotten
          </Person>
        </div>
      </div>
      
    );
  }
}

export default App;