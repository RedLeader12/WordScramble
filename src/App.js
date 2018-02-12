import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    input: ''
  }

  stringLengthHandler = (event) => {
    this.setState({input: event.target.value});
  }


  render() {
    return (
      <div className="App">
        <input className="Lengthfield" onChange={this.stringLengthHandler} type="text" />
        <p> {this.state.input} </p>
      </div>
    );
  }
}

export default App;
