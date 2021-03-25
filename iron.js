class Iron {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':3,
          'density':30
      }
     
      this.width = 50;
      this.height = 40;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      World.add(world, this.body);
    }
    display(){
      var posid =this.body.position;
      var angled = this.body.angle;
      push();
      translate(posid.x, posid.y);
      rotate(angled);
      rectMode(CENTER);

      fill("grey");
      rect(0, 0, this.width, this.height);
      pop();
    }
  }