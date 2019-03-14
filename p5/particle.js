class Particle {

    constructor(speed) {
      this.pos = createVector(width/2, height - 30)
      
      this.speed = speed
      this.a = 255
     
      this.decreaseAlpha = random(2, 5)
    }
  
    update() {

        
        this.vel = createVector(random(-50, 50), random(-5, -10))
        this.pos.x += this.vel.x * this.speed * 1.3;
        this.pos.y += this.vel.y * this.speed * 2;
        if(this.a > 0) this.a -= this.decreaseAlpha
    }

    show() {
        stroke(255, this.a)
        strokeWeight(10)
        point(this.pos.x, this.pos.y)
    }

    isDead(){
        if(this.a <= 0){
          return true;
        } else {
          return false;
        }
      }
  }