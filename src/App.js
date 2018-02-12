import React, { Component } from 'react';
import Validation from './Validation/Validation'
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
        <Validation inputLength={this.state.input.length}/>
      </div>
    );
  }
}

export default App;
