import React, { Component } from 'react';

import UserInput from './../UserInput/UserInput'
import UserOutput from './../UserOutput/UserOutput'

class Root extends Component {
    state = {
        username: 'Olimpiada ',
        password: ' !Olimpia!'
    };

    switchDataHandler = newName => {
        this.setState({
            username: newName,
            password: "!kot123",
        });
    };

  render() {
    return (
      <>
        <UserInput />
        <UserOutput name='Maciej'/>
        <UserOutput name={this.state.username} password={this.state.password} />
        <button onClick={this.switchDataHandler.bind(this, 'Olimpia')}>Switch data</button>
      </>
    );
  }
}
export default Root;
