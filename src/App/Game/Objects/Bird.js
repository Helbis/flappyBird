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

  flap ( p5 ) {
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
