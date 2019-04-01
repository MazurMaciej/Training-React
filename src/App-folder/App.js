import React, { Component } from "react";
import "./App.css";
import Person from "../Person/Person";

class App extends Component {
  state = {
    persons: [
      { id:'sad1', name: "Maciejto", age: 29 },
      { id:'sad2', name: "Olimpiada", age: 29 },
      { id:'sad3', name: "Jakubek", age: 39 },
      { id:'sad4', name: "Miłoszo", age: 21 },
      { id:'sad5', name: "Mikołajo", age: 32 }
    ],
    otherState: "some new info",
    showPersons: false
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons})
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
          {this.state.persons.map((person, index)=>{
            return <Person  
            click={()=>this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            />
          })}
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
