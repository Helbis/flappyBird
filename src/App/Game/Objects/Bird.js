class Bird {
  constructor() {
    this.pos = {
      x: 100,
      y: 200
    };

    this.width = 50;
    this.fallAmount = 1;
    this.flapHeight = 50;
  }

  stopGame() {
    this.fallAmount = 0;
    this.flapHeight = 0;
  }

  startGame() {
    this.fallAmount = 1;
    this.flapHeight = 50;
  }

  togglePlaying() {
    if ( this.gameIsPaused ) {
      this.startGame();
      this.gameIsPaused = !this.gameIsPaused;
    } else {
      this.stopGame();
      this.gameIsPaused = !this.gameIsPaused;
    }
  }

  flap ( p5 ) {
    // let dy =

    this.pos.y -= this.flapHeight;
  }

  fall( p5 ) {
    this.pos.y += this.fallAmount;
  }

  draw ( p5 ) {
    p5.fill(200, 0, 0);
    p5.rect(this.pos.x, this.pos.y, this.width, this.width);
  }
}

export default Bird;
