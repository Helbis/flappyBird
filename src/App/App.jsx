import './App.css';
import React from "react";

/* Game imports */
import Game from "./Game/Game";
import Controls from "./Controls/Controls";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Game />
        <Controls />
      </div>
    )
  }
}

export default App;
