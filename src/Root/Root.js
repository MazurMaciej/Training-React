import React, { Component } from 'react';

import UserInput from './../UserInput/UserInput'
import UserOutput from './../UserOutput/UserOutput'

class Root extends Component {
  render() {
    return (
      <>
        <UserInput />
        <UserOutput name="Maciej:__"/>
        <UserOutput />
        
      </>
    );
  }
}
export default Root;
