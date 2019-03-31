import React, { Component } from "react";
import "./App.css";
import Person from './Person/Person'

class App extends Component {
  
  state = {
    persons: [
      { name:'Maciej', age:29 },
      { name: 'Olimpiada', age:29 },
      { name: 'Jakubek', age:39 },
      { name: 'Miłoszo', age:21 },
      { name: 'Mikołajo', age:32 }
    ],
    otherState: "some new info"
  }

  switchButtonHandler = () => {
    this.setState({
      persons: [
        { name:'Maciej', age:29 },
        { name: 'Olimpiada', age:29 },
        { name: 'Jakubeka', age:39 },
        { name: 'Miłoszo', age:21 },
        { name: 'Mikołajow', age:32 }
    ]
    })
  }
  
  render() {
    return (
      <div className="App">
        <h1>
          Hi, i'm a React App
        </h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}> I really like travel!</Person>
        <button onClick={this.switchButtonHandler}>Switch Name!</button>
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age}/>
        <Person name={this.state.persons[4].name} age={this.state.persons[4].age}/>
      </div>
    );

    // return (
    //   React.createElement('div', {className: 'App'},React.createElement('h1', null, 'im very busy now' ))
    // )

  }
}

export default App;
