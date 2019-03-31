import React, { Component } from "react";
import "./App.css";
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          Hi, i'm a React App
        </h1>
        <Person name='Maciej' age='29'/>
        <Person name='Olimpia' age='29'/>
        <Person name='Jakub' age='39'> I really like travel!</Person>
        <Person name='Miłosz' age='21'/>
        <Person name='Mikołaj' age='32'/>
      </div>
    );

    // return (
    //   React.createElement('div', {className: 'App'},React.createElement('h1', null, 'im very busy now' ))
    // )

  }
}

export default App;
