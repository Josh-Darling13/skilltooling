import React, {Component} from 'react';
import './App.css';
import Person from './Person';

class App extends Component {

  state = {
    persons : [
      {name: 'Max', age: 45},
      {name: 'Nancy', age: 21},
      {name: 'Bonnie', age: 25},
    ]
  }



  render(){ 
    return (
      <div className="App">
        <h1>bumping the button down</h1>
        <button onClick={}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Some text for example stuff </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}> Probably Rotten</Person>
      </div>
    );
}}

export default App;
