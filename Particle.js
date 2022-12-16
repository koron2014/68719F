class Particle {
  constructor() {
    this.pos = createVector(width/2, height/2);
    this.vel = createVector(random(-1, 1), random(-1, 0));
    this.acc = createVector(0, 0.5);

    this.c = color(255);
    this.w = 50;
  }

  addForce(aForce) {
    this.acc.add(aForce);
  }

  update() {
    this.checkEdge();
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }


  checkEdge() {
    if (this.pos.y > height) {
      this.pos.x = 0;
    }
    if (this.pos.x < 0) {
      this.pos.x = height
    }
  }


  show() {
    ellipse(800, 0, 50, 10);
  }
}
