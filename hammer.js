class Hammer {
    constructor(x, y) {
      var options = {
        'density':3,
        'friction': 1.5,
        'restitution':0.25
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 180;
      this.height = 49;
      World.add(world, this.body);
    }
    display(){
      var posed = this.body.position;
      posed.x = mouseX;
      posed.y = mouseY;
      var Angle = this.body.angle;
  
      push();
      translate(posed.x, posed.y);
      rotate(Angle);
      strokeWeight(3);
     
      fill('cyan')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    }
  }
  