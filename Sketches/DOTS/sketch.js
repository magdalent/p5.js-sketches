function setup() {
  createCanvas(400, 400);
  background(220);

  
}

function draw() {
  noStroke();
  fill(mouseX);
  ellipse(mouseX, mouseY, 20,20);
}
function mouseDragged(){
  fill(23,90,33,80);
}
function mousePressed(){
  background(220);
}