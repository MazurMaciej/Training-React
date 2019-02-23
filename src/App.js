import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    people: [],
    isFavorite: false
  };

  componentDidMount() {
    fetch(process.env.PUBLIC_URL + "/data/people.json")
      .then(response => response.json())
      .then(data => this.setState({ people: data }));
  }

  handleToggleMode = () => {
    this.setState({
      isFavorite: !this.state.isFavorite
    });
  };

  render() {
    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              <th className="App-text">Name </th>
              <th className="App-text">Surname </th>
              <th className="App-text">Phone number</th>
            </tr>
          </thead>
          <tbody>
            {this.state.people.map(person => (
              <tr
                style={{
                  background: this.state.isFavorite ? "yellow" : "white"
                }}
              >
                <td className="App-text">{person.name}</td>
                <td className="App-text">{person.surname}</td>
                <td className="App-text">{person.phone}</td>
                <td>
                  <button onClick={this.handleToggleMode}>
                    Toggle favorite
                  </button>
                </td>
                <td>
                  <button>Remove contact</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
