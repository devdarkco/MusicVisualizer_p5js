class Particle {

  constructor(speed) {
    if (userData.device == 'pc') {
      this.pos = createVector(width / 2, height - 30)
    } else if (userData.device == 'smartphone') {
      this.pos = createVector(width / 2, height / 2)
    }
    this.speed = speed
    this.a = 255
    this.c = color(255, 255, 255, 0)
    this.decreaseAlpha = random(3, 5)
  }

  update() {
    if (userData.device == 'pc') {
      this.vel = createVector(random(-this.speed, this.speed), random(-10, -20))
      this.pos.x += this.vel.x * 100;
      this.pos.y += this.vel.y * this.speed * 2;
      if (this.a > 0) this.a -= 3
      this.setColor();
    } else if (userData.device == 'smartphone') {
      this.vel = createVector(random(-this.speed, this.speed), random(-20, 20))
      this.pos.x += this.vel.x * 100;
      this.pos.y += this.vel.y * this.speed * 2;
      if (this.a > 0) this.a -= 3
      this.setColor();
    }

  }

  show() {
    push()
    stroke(this.c)
    strokeWeight(15)
    point(this.pos.x, this.pos.y)
    pop()
  }

  isDead() {
    if (this.a <= 0) {
      return true;
    } else {
      return false;
    }
  }

  setColor() {
    if (this.speed < 0.1) {
      this.c = color(204, 0, 0, this.a)
    } else if (this.speed > 0.1 && this.speed < 0.2) {
      this.c = color(128, 0, 0, this.a)
    } else if (this.speed > 0.2) {
      this.c = color(0, 0, 0, this.a)
    }
  }
}