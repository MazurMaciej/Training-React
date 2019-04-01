import React, { Component } from "react";

import UserInput from "./../UserInput/UserInput";
import UserOutput from "./../UserOutput/UserOutput";

class Root extends Component {
  state = {
    username: "Olimpiada ",
    password: " !Olimpia!"
  };

  switchDataHandler = () => {
    this.setState({
      username: 'Mikołaj',
      password: "!kot123"
    });
  };

  nameChangeHandler = event => {
    this.setState({
      username: event.target.value,
      password: " !Olimpia!"
    });
  };

  render() {
    return (
      <>
        <UserInput changed={this.nameChangeHandler} />
        <UserOutput name="Maciej" />
        <UserOutput username="Jakub " />
        <UserOutput name={this.state.username} password={this.state.password} />
        <button onClick={this.switchDataHandler.bind(this, "Olimpia")}>
          Switch data
        </button>
      </>
    );
  }
}
export default Root;
