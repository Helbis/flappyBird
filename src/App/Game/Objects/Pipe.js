class Pipe {
  constructor () {
    this.x = 0;
    this.speed = 10;

    this.height = this.randNum(100, 200);
    this.width =  this.randNum(10, 75);
    this.positionOnTop = this.setPos();

    this.color = [ 255, 0, 0 ];
  }

  moveOnX()         { this.x -= this.speed; }
  changePos( x )    { this.x = x; }
  changeHeight( h ) { this.height = h; }
  changeWidth( w )  { this.width = w; }

  randNum = ( min, max ) => Math.random() * (max - min + 1) + min;

  setPos = () => Math.random() < 0.5;

  draw ( p5 ) {
    p5.fill( this.color );

    if ( this.positionOnTop ) {
      //Draw starting on the top
      p5.rect( this.x, 0, this.width, this.height );

    } else {
      //Draw starting from the bottom
      p5.rect( this.x, p5.height - this.height, this.width, this.height );
    }
  }
}

export default Pipe;
