import React from 'react';
// import './App.css';

function UserInput(props) {
  return (
    <div className="UserInput">
      <i><h2>This is UserInput</h2></i>
      <input type="text" onChange={props.changed}/>
    </div>
  );
}

export default UserInput;
