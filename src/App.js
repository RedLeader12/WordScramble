import React, { Component } from 'react';
import Validation from './Validation/Validation'
import Char from './Char/Char'
import './App.css';

class App extends Component {

  state = {
    input: ''
  }

  stringLengthHandler = (event) => {
    this.setState({input: event.target.value});
  }


  render() {

    const charList = this.state.input.split('').map((ch,index)=> {
      return <Char character={ch} key={index}/>;
    });

    return (
      <div className="App">
        <input className="Lengthfield" onChange={this.stringLengthHandler} type="text" />
        <p> {this.state.input} </p>
        <Validation inputLength={this.state.input.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
