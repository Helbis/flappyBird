class Pipe {
  static maxHeight = 200;
  static minHeight = 100;
  static maxWidth = 75;
  static minWidth = 10;
  static topBottomProportion = 0.5;
  static spacing = 200;

  constructor ( x ) {
    this.speed = 10;

    this.x = x + Pipe.spacing;
    this.height = this.randNum(Pipe.minHeight, Pipe.maxHeight);
    this.width =  this.randNum(Pipe.minWidth, Pipe.maxWidth);
    this.positionOnTop = this.setPos();

    this.color = [ 255, 0, 0 ];

    this.offScreen = this.checkIfOffScreen();
  }

  moveOnX =             ()    => { this.x -= this.speed; }
  changePos =           ( x ) => { this.x = x + Pipe.spacing; }
  changeHeight =        ( h ) => { this.height = h; }
  changeWidth =         ( w ) => { this.width = w; }
  randNum =             ( min, max ) => Math.random() * (max - min + 1) + min;
  setPos =              () => Math.random() < Pipe.topBottomProportion;
  checkIfOffScreen =    () => this.x < -this.width;
  resetOffScreen =      () => { this.offScreen = this.checkIfOffScreen(); }
  resetWidthAndHeight = () => { this.width = this.randNum(Pipe.minWidth, Pipe.maxWidth);
                                this.height = this.randNum(Pipe.minHeight, Pipe.maxHeight); }

  draw = ( p5 ) => {
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
