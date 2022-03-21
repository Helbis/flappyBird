import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";


class Game extends React.Component {

  constructor ( props ) {
    super(props);
    this.state = {
      width: 500 * 1.618,
      height: 500
    }
  }

  sketch = ( p5 ) => {
    p5.setup = () => p5.createCanvas(this.state.width, this.state.height, p5.WEBGL);
    p5.draw = () => {
      p5.background(51, 51, 51);
      p5.normalMaterial();
      p5.push();
      p5.rotateZ(p5.frameCount * 0.01);
      p5.rotateX(p5.frameCount * 0.01);
      p5.rotateY(p5.frameCount * 0.01);
      p5.plane(100);
      p5.pop();
    };
  }

  render () {
    return (
      <ReactP5Wrapper id="Game" className="Game" sketch={this.sketch} />
    )
  }
}


export default Game;
