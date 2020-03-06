import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Taylor', age: 23},
      {name: 'Calista', age: 20},
      {name: 'Bill', age: 37}
    ]
  }

  switchNameHandler = () => {
    this.setState({persons: [
      {name: 'TAYLOR', age: 23},
      {name: 'Calista', age: 20},
      {name: 'Bill', age: 27}
    ]})
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <p>A Paragraph</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
