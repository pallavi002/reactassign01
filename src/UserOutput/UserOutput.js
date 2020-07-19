import React from 'react';
// import './App.css';

function UserOutput(props) {
  return (
    <div className="UserOutput">
      <i><h2>This is UserOutput</h2></i>
      <p>Name: {props.name}</p>
      <p>Description: {props.description}</p>
    </div>
  );
}

export default UserOutput;
