import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'


class App extends Component {
  state = {
    info: [
      {name:"pallavi", description: "Hey I'm learning web."},
      {name:"Dishani", description: "I love reading."},
      {name:"Yash", description: "I love planets."}
    ]
  }
  hobbyChanger = () => {
    this.setState({
      info: [
        {name:"pallavi", description: "Hey I'm interested in cyber security."},
        {name:"Dishani", description: "I wanna do some social work"},
        {name:"Yash", description: "I want to be a cricketer"}
      ]
    })
  }
  onChangeDescription = (event) => {
    this.setState({
      info: [
        {name:"pallavi", description: event.target.value},
        {name:"Dishani", description: "I wanna do some social work"},
        {name:"Yash", description: "I want to be a cricketer"}
      ]
    })
  }
  render() {
    const style = {
      height: "5%",
      width: "10%",
      backgroundColor: "#ccd",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    }
    return (
      <div className="App">
        <h1>This is first React Assignment</h1>
        <UserInput changed={this.onChangeDescription}/>
        <UserOutput name={this.state.info[0].name} description={this.state.info[0].description} />
        <UserOutput name={this.state.info[1].name} description={this.state.info[1].description} />
        <UserOutput name={this.state.info[2].name} description={this.state.info[2].description} />
        <button onClick= {this.hobbyChanger} style={style}>Change the hobby</button>
      </div>
    );
  }
}

export default App;
