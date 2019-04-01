import React, { Component } from 'react';

import UserInput from './../UserInput/UserInput'
import UserOutput from './../UserOutput/UserOutput'

class Root extends Component {
  render() {
    return (
      <>
        <h1>Hello Maciej</h1>
        <UserInput />
        <UserOutput />
        
      </>
    );
  }
}
export default Root;
