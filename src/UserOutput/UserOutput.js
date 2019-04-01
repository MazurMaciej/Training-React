import React from "react";

const UserOutput = props => {
  return (
    <div>
      
      <p>
          Dane użytkownika: 
      {props.name}{props.password}<br/>
      </p>

    </div>
  );
};

export default UserOutput;
