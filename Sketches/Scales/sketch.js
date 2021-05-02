
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  move();
  bounce();
}
function move(){
  for(var x = 0; x <= width; x = x +3){
    fill(255,0,0);
    ellipse(x,200,20,20);
  }
  
}
function bounce(){
  for(var m = 0; m <= height; m = m + 12){
    for(var y = 0; y <= width; y = y + 12){
      fill(0,random(255),0);
      ellipse(m,y,20,20);
      
    }
  }
    
  
}
function display(){
  
}