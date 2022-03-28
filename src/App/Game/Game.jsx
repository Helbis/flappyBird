import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";

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
    this.pipesAmount = 20;
    this.pipes = [];

    for (let i=0; i<this.pipesAmount; i++) {
      this.pipes.push( new Pipe( this.state.width ) );
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

      this.setPipes();

    };

    p5.draw = () => {
      p5.background(51, 51, 51);

      this.handlePipes( p5 );

      this.bird.draw( p5 );
      this.bird.fall( p5 );
    }
  }

  handlePipes = ( p5 ) => {
    // console.log(this.pipes); //DEBUG
    for (let i=0 ; i<this.pipes.length ; i++) {
      this.pipes[i].resetOffScreen();
      this.pipes[i].moveOnX();

      // console.log("B4 = ", i);
      if ( this.pipes[i].checkIfOffScreen() ) {
        this.pipes[i].changePos( p5.width * 2 );
        this.pipes[i].resetWidthAndHeight();
        // console.log("Af = ", i);
        continue;
      }

      this.pipes[i].draw( p5 );
    }
  }

  setPipes = () => {
    for (let i=0 ; i<10 ; i++) {
      this.pipes[i].changePos( (i + 10) * 100 );
    }
  }

  render = () => {
    return (
      <>
        <ReactP5Wrapper id="Game" className="Game" sketch={this.sketch} />
      </>
    )
  }
};


export default Game;
