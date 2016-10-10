function setup() {
  createCanvas( windowWidth , windowHeight );
  background( 255 , 255 , 255 );
}

function draw() {
  //noStroke();
  stroke( 0 , 0 , 0 , 50 );
  fill( 20 , 147 , 232 , 50);
  ellipse( mouseX , mouseY , 100 , 100 );
}
