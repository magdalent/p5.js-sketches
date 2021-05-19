function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  for(i=0; i< width; i = i + 10){
      for(m =0; m< height; m = m + 10){
        
      fr = 5;
      frameRate(fr); 
        noStroke();
        fill(1130,random(255),22);
        rect(i,m, 20,20);
    
    }
  }
}