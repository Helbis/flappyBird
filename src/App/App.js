import './App.css';
import React from "react";

/* Game imports */
import Game from "./Game/Game";
import ButtonRestart from "./Buttons/ButtonRestart";
import ButtonPausePlay from "./Buttons/ButtonPausePlay";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Game />
        <ButtonRestart />
        <ButtonPausePlay />
      </div>
    )
  }
}

export default App;
