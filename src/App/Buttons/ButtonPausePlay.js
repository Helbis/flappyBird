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
    // console.log(paused); //DEBUG

    if ( this.state.paused ) {
      this.setState((state) =>
        (
          {
          paused : false
          }
        ));
    } else {
      this.setState((state) =>
        (
          {
            paused : true
          }
        ));
      // this.setState({paused : true});
    }
  }

  printPausedState = () => {
    if (this.state.paused) {
      // console.log("True"); //DEBUG
      return "Play";
    } else {
      // console.log("False"); //DEBUG
      return "Pause";
    }
  }

  render () {
    return (
      <button id="pausePlay" onClick={this.pausePlay}>{this.printPausedState()}</button>
    )
  }
}


export default ButtonPausePlay;
