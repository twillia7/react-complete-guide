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

  switchNameHandler = (newName) => {
    this.setState({persons: [
      {name: newName, age: 23},
      {name: 'Calista', age: 20},
      {name: 'Bill', age: 27}
    ]})
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Taylor', age: 23},
        {name: event.target.value, age: 20},
        {name: 'Bill', age: 27}
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hello World!</h1>
        <p>A Paragraph</p>
        <button 
          style={style}
          onClick={this.switchNameHandler.bind(this, 'TayTay')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'TAYLOR')}
          changed={this.nameChangedHandler}/>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
