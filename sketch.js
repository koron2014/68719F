let a;
let b;
let scl = 20;
let w = 400;
let h = 400;


function setup() {
  createCanvas(800, 800, WEBGL);
  a = w / scl;
  b = h / scl;  
}

function draw() {
  background(0);
  // translate(-200, 50);
  // rotateX(PI/2);  
  stroke(255);
  noFill();  
  for(let y = 0; y < b; y++){
    beginShape(QUAD_STRIP);
    for(let x = 0; x < a; x++){
      vertex(x*scl, y*scl);
      vertex(x*scl, (y+1)*scl);      
    }
    endShape();
  }
}

  