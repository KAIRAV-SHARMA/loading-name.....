class Stone{
    constructor(x, y,width, height) {
      var options = {
          'restitution':0.5,
          'friction':1,
          'density':15
      }
      
    
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      World.add(world, this.body);
    }
    display(){
      var poses =this.body.position;
      var angled = this.body.angle;
      push();
      translate(poses.x, poses.y);
      rotate(angled);
      rectMode(CENTER);
      fill("black");
      rect(0, 0, this.width, this.height);
      pop()
    }
  }
  