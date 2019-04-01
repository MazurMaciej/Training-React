import React from "react";

const UserOutput = props => {
  return (
    <div>
      
      <p>
          Dane użytkownika: 
      {props.name}{props.password}<br/>
      </p>
      <p> {props.username}
        Donec et tortor vel enim egestas tempor ac sit amet magna. Suspendisse
        eget tristique tellus. Aliquam metus tellus, efficitur quis tempus quis,
        tincidunt quis sem. Curabitur quis laoreet massa, malesuada fringilla
        justo. Fusce sodales risus in ante elementum, quis porta tortor
        imperdiet. Cras augue magna, laoreet aliquet aliquam ac, finibus at leo.
        Nunc rhoncus sed risus id ultrices. Donec maximus, mi at congue mattis,
        lectus est aliquet purus, sed sodales libero nisl sed augue. Suspendisse
        finibus vehicula ipsum, quis lacinia dolor vulputate et.
      </p>
    </div>
  );
};

export default UserOutput;
