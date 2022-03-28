import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
// import ButtonPausePlay from "../Controls/Buttons/ButtonPausePlay.jsx";

import Bird from "./Objects/Bird.js";
import Pipe from "./Objects/Pipe.js";


class Game extends React.Component {

  constructor ( props ) {
    super(props);

    this.state = {
      width: 500 * 1.618,
      height: 500,
      fps: 60,
      playing: true
    };

    this.bird = new Bird();
    this.pipes = [];

    for (let i=0; i<10; i++) {
      this.pipes.push( new Pipe() );
    }
  }


  sketch = ( p5 ) => {
    p5.keyPressed = () => {
      switch ( p5.keyCode ) {
        case 32: { /* SPACE */
          this.bird.flap( p5 )
          break;
        }
        case 80: { /* P -> Pause / Play toggle */
          // this.bird.togglePlaying();
          if ( this.state.playing ) {
            p5.noLoop();
            this.setState({ playing: false });
          } else {
            p5.loop();
            this.setState({ playing: true });
          }
          break;
        }
        default: { break; }
      }
    };

    p5.setup = () => {
      p5.createCanvas(this.state.width, this.state.height, p5.P2D);

      p5.frameRate( this.state.fps );

      for (let i=0 ; i<10 ; i++) {
        this.pipes[i].changePos( (i + 10) * 100 );
      }
    };

    p5.draw = () => {
      p5.background(51, 51, 51);

      // Draw
      this.bird.draw( p5 );
      this.drawPipes( p5 );

      // Logic
      this.bird.fall( p5 );
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
      </>
    )
  }
};


export default Game;
