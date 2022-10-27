import './App.css';
import Person from './Person';

function App() {
  return (
    <div className="App">
      <Person name="Spud" age="72"/>
      <Person name="Nancy" age="27">Some text for example stuff </Person>
      <Person name="Bonnie" age="30"> Probably Rotten</Person>
    </div>
  );
}

export default App;
