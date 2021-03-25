
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var wy,hammersdv,stonez,rubr,irons
function preload()
{
	
}

function setup() {
	createCanvas(800,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	wy = new Olain(400,580,800,10);
	hammersdv = new Hammer(400,300);
	stonez = new Stone (360,140,107,70);
	rubr = new Rubber(563,500,180);
    irons = new Iron(299,40);
}


function draw() {
  rectMode(CENTER);
  background("darkblue");
  wy.display();
  hammersdv.display();
 stonez.display(); 
 rubr.display();
 irons.display();
  drawSprites();
 
}



