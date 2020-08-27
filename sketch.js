var helicopterIMG, helicopterSprite, packageSprite,packageIMG , packageOptions ;
var packageBody,ground;
var world , engine;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10 , );
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(400,650 , 800,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

    packageOptions =  {
		 'restitution' : 0.4,
		 'isStatic' : true 
		}


	packageBody = Bodies.circle(width/2 , 200 , 5 ,packageOptions);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(350, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 
	 box1 = new Box(390,600,20,20);
	 box2 = new Box(340,640,20,40);
	 box3 = new Box(440,640,20,40);

	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  box1.display();
  box2.display(); 
  box3.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyWentDown(DOWN_ARROW)) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false);
  }
}



