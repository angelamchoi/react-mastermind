import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">React Mastermind</header>
        <GameBoard />
      </div>
    );
  }
}

export default App;

//--------NOTES-------//
// Key Class
//-- must have a render method
//-- needs a function 
//-- uses class extends
//-- uses this keyword (this.props.earthlings)
//-- NO COMMAS 
