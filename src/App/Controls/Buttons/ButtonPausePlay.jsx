import React from "react";
import "./ButtonPausePlay.css";


class ButtonPausePlay extends React.Component {
  constructor ( props ) {
    super(props);
    this.state = {
      paused : false
    };
  }

  pausePlay = () => {
    if ( this.state.paused ) {
      this.setState((state) =>
        {
          return { paused : false };
        });
    } else {
      this.setState((state) =>
        {
          return { paused : true };
        });
    }
  }

  printPausedState = () => {
    if (this.state.paused) {
      return "Play";
    } else {
      return "Pause";
    }
  }

  render () {
    return (
      <button id="pausePlay" onClick={this.pausePlay} onKeyDown={console.log("pressed key")}>{this.printPausedState()}</button>
    )
  }
}


export default ButtonPausePlay;
