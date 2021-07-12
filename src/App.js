import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard';
import ColorPicker from './components/ColorPicker/ColorPicker';
import GameTimer from './components/GameTimer/GameTimer';
import NewGameButton from './components/NewGameButton/NewGameButton';
import GuessRow from './components/GuessRow/GuessRow'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">React Mastermind</header>
        <GameBoard />
        <ColorPicker />
        <GameTimer />
        <NewGameButton />
        <GuessRow num={1} />
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
