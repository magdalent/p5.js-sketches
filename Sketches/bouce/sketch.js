var  x = 0;
var speed = 1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  strokeWeight(3);
  fill(255,0,0);
  ellipse(x,200, 30,30);
  
  
  if(x > width|| x < 0 ) {
       speed = speed * -1;

    
  }

    x = x + speed;

}