import React, {useState} from 'react';
import './App.css';
import Person from './Person';




const App = props => {

  const [personState, setPersonState] = useState({
     persons : [
     {name: 'Max', age: 45},
     {name: 'Nancy', age: 21},
     {name: 'Bonnie', age: 25},
   ],
    moreUseless: 'empty data'

  })

  const switchNameHandler = () => {
    console.log('clicked');
    setPersonState({persons:[
       {name: 'Roxy', age: 45},
       {name: 'Nancy', age: 21},
       {name: 'Bonnie', age: 18},
     ]})
   }

    return (
      <div className="App">
        <h1>bumping the button down</h1>
        <button onClick={switchNameHandler}>REMEMBER TO PAY YOUR BILLS</button>
        
        <Person 
        name={personState.persons[0].name}
        age={personState.persons[0].age} />
        
        <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
        tagClick={this.switchNameHandler}
        >
          Some text for example stuff </Person>
        
        <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age}>
          Probably Rotten</Person>
      </div>
    );
}

export default App;


// state = {
//   persons : [
//     {name: 'Max', age: 45},
//     {name: 'Nancy', age: 21},
//     {name: 'Bonnie', age: 25},
//   ]
// }

//   switchNameHandler = () => {
//     // console.log('clicked');
//     this.setState({persons:[
//       {name: 'Roxy', age: 45},
//       {name: 'Nancy', age: 21},
//       {name: 'Bonnie', age: 18},
//     ]})

//   }