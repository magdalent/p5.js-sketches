function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0,0,255);
  
  for(var z = 0; z <= width; z = z + 20){
    for(var y = 0; y <= height; y = y + 20){
        strokeWeight(2);
        stroke(255);
        fill(random(255), random(255),random(255));
        rect(z ,y, 20,20);
    }
  }
}