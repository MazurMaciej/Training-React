import React, { Component } from "react";
import "./App.css";
import Person from "../Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Maciejto", age: 29 },
      { name: "Olimpiada", age: 29 },
      { name: "Jakubek", age: 39 },
      { name: "Miłoszo", age: 21 },
      { name: "Mikołajo", age: 32 }
    ],
    otherState: "some new info",
    showPersons: false
  };

  switchButtonHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 29 },
        { name: "Maciej", age: 29 },
        { name: "Jakubeka", age: 39 },
        { name: "Miłoszo", age: 21 },
        { name: "Mikołajow", age: 32 }
      ]
    });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "Olimpia", age: 29 },
        { name: "Maciej", age: 29 },
        { name: event.target.value, age: 39 },
        { name: "Miłoszo", age: 21 },
        { name: "Mikołajow", age: 32 }
      ]
    });
  };

  toggleOnList = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const styleButton = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons =(
        <div>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          changed={this.nameChangeHandler}
        >
          {" "}
          I really like travel!
        </Person>
        <Person
          name={this.state.persons[3].name}
          age={this.state.persons[3].age}
        />
        <Person
          name={this.state.persons[4].name}
          age={this.state.persons[4].age}
        />
      </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, i'm a React App</h1>
        <button style={styleButton} onClick={this.toggleOnList}>
          Switch Name!
        </button>
        {persons}
      </div>
    );

    // return (
    //   React.createElement('div', {className: 'App'},React.createElement('h1', null, 'im very busy now' ))
    // )
  }
}

export default App;
