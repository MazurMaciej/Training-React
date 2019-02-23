import React, { Component } from 'react';
import './App.css';

class App extends Component {

    state = {
      people: [],
    };
  
    componentDidMount() {
      fetch(process.env.PUBLIC_URL + '/data/people.json')
        .then(response => response.json())
        .then(data => this.setState({ people: data }));
    }

  render() {

    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              <th>Name  </th>
              <th>Surname  </th>
              <th>Phone number</th>
            </tr>
          </thead>
          <tbody>
            {this.state.people.map(person => (
              <tr>
                <td>{person.name}</td>
                <td>{person.surname}</td>
                <td>{person.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
