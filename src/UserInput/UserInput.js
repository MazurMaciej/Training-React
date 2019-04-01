import React from 'react';
import { AST_PropAccess } from 'terser';

const UserInput = (props) => {
    return (

        <input type="text" onChange={props.changed} value={props.name}></input>

    )
};

export default UserInput;