let a;
let b;
let scl = 20;
let w = 880;
let h = 880;
let land = [];
let movement = 0;

function setup() {
  createCanvas(800, 800, WEBGL);
  a = w / scl;
  b = h / scl; 
  
    for(let x = 0; x < a; x++){
      land[x] = [];
      for(let y = 0; y < b; y++){
        land[x][y] = 0;
      }
    }
}

function draw() {
  
  movement += 0.1;
  let xUP = 0;
    for(let x = 0; x < a; x++){
      let yUP = movement;
      for(let y = 0; y < b; y++){
        land[x][y] = map(noise(xUP, yUP), 0, 1, -10, 10);
        xUP += 0.1;
      }
      yUP += 0.1;
    }  
  
  frameRate(60);
  background(0);
  translate(-440, 0);
  rotateX(PI / 2.2);  
  stroke(255);
  noFill();  
  for(let y = 0; y < b; y++){
    beginShape(QUAD_STRIP);
    for(let x = 0; x < a; x++){
      vertex(x*scl, y*scl, land[x][y]);
      vertex(x*scl, (y+1)*scl, land[x][y+1]);      
    }
    endShape();
  }
}
