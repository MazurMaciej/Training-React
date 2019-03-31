import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = () => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Maciej", age: 29 },
      { name: "Olimpiada", age: 29 },
      { name: "Jakubek", age: 39 },
      { name: "Miłoszo", age: 21 },
      { name: "Mikołajo", age: 32 }
    ],
    otherState: "some new info"
  });

  const switchButtonHandler = () => {
    setPersonsState({
      persons: [
        { name: "Maciej", age: 29 },
        { name: "Olimpiada", age: 29 },
        { name: "Jakubeka", age: 39 },
        { name: "Miłoszo", age: 21 },
        { name: "Mikołajow", age: 32 }
      ]
    });
  };
  return (
    <div className="App">
      <h1>Hi, i'm a React App</h1>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      >
        {" "}
        I really like travel!
      </Person>
      <button onClick={switchButtonHandler}>Switch Name!</button>
      <Person
        name={personsState.persons[3].name}
        age={personsState.persons[3].age}
      />
      <Person
        name={personsState.persons[4].name}
        age={personsState.persons[4].age}
      />
    </div>
  );
};

export default App;
