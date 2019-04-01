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


  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }; 
    
    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;
    
    this.setState({persons: persons})

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
            key={person.id}
            name={person.name}
            age={person.age}
            changed={(event)=>this.nameChangeHandler(event,person.id)}
            click={()=>this.deletePersonHandler(index)}
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
