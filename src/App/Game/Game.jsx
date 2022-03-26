import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import ButtonPausePlay from "../Controls/Buttons/ButtonPausePlay.jsx";

import Bird from "./Objects/Bird.js";


class Game extends React.Component {

  constructor ( props ) {
    super(props);
    this.state = {
      width: 500 * 1.618,
      height: 500
    };

    this.bird = new Bird();
  }

  sketch = ( p5 ) => {
    p5.keyPressed = () => {
      // console.log(p5.keyCode); //DEBUG

      switch ( p5.keyCode ) {
        case 32: { /* SPACE */
          this.bird.flap( p5 )
          break;
        }
        case 80: { /* P */
          this.bird.togglePlaying();
          document.getElementById("pausePlay").click();

          break;
        }
        default: { break; }
      }
    };

    p5.setup = () => {
      p5.createCanvas(this.state.width, this.state.height, p5.P2D);
    };

    p5.draw = () => {
      p5.background(51, 51, 51);
      this.bird.draw( p5 );

      // Logic
      this.bird.fall( p5 );

    };
  }

  render () {
    return (
      <ReactP5Wrapper id="Game" className="Game" sketch={this.sketch} />
    )
  };
};


export default Game;
