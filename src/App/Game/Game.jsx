import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
// import ButtonPausePlay from "../Controls/Buttons/ButtonPausePlay.jsx";

import Bird from "./Objects/Bird.js";
import Pipe from "./Objects/Pipe.js";


class Game extends React.Component {

  constructor ( props ) {
    super(props);

    this.p5 = {};

    this.state = {
      width: 500 * 1.618,
      height: 500,
      fps: 60
    };

    this.bird = new Bird();
    this.pipes = [];

    for (let i=0; i<10; i++) {
      this.pipes.push( new Pipe() );
    }
  }


  sketch = ( p5 ) => {
    p5.keyPressed = () => {
      // console.log(p5.keyCode); //DEBUG

      switch ( p5.keyCode ) {
        case 32: { /* SPACE */
          this.bird.flap( p5 )
          break;
        }
        case 80: { /* P -> Pause / Play toggle */
          this.bird.togglePlaying();
          p5.noLoop();
          break;
        }
        default: { break; }
      }
    };

    p5.setup = () => {
      p5.createCanvas(this.state.width, this.state.height, p5.P2D);

      p5.frameRate( this.state.fps );

      this.p5 = p5; //DEBUG

      for (let i=0 ; i<10 ; i++) {
        this.pipes[i].changePos( (i + 10) * 100 );
      }
    };

    p5.draw = () => {
      // document.getElementById("FPS").innerText = p5.floor( p5.getFrameRate() );

      p5.background(51, 51, 51);
      this.bird.draw( p5 );

      // Logic
      this.bird.fall( p5 );

      this.drawPipes( p5 );
    }
  }

  drawPipes ( p5 ) {
    for (let i=0 ; i<10 ; i++) {
      this.pipes[i].moveOnX();
      this.pipes[i].draw( p5 );
    }
  }

  render () {
    return (
      <>
        <ReactP5Wrapper id="Game" className="Game" sketch={this.sketch} />
        <p id="FPS"></p>
      </>
    )
  }
};


export default Game;
