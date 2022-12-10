let a;
let b;
let scl = 20;
let w = 400;
let h = 400;


function setup() {
  createCanvas(400, 400, WEBGL);
  a = w / scl;
  b = h / scl;  
}

function draw() {
  background(0);
  translate(-200, 50);
  rotateX(PI / 2);  
  for(let x = 0; x < a; x++){
    for(let y = 0; y < b; y++){
      stroke(255);
      noFill();
      rect(x*scl, y*scl, scl, scl);
    }
  }
}

  