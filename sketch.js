var helicopterIMG, helicopterSprite, packageSprite,packageIMG,wall1Object,wall2Object,wall3Object;
var packageBody,ground,engine,world,bodies;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

var pakageSprite,helicopterSprite,groundSprite,ground;
var wall1Object,wall2Object,wall3Object;
var helicopterIMG,packageIMG;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;
    
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;



	groundSprite=createSprite(width/2, 650, width,10);
	groundSprite.shapeColor=color(255);


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 wall1Object = new Mark2(320,505,20,130);
	   wall2Object = new Mark2(460,505,20,130);
  	 wall3Object = new Mark1(390,580,140,20);

	packageSprite=new Supply(width/2,200, 40);


	Engine.run(engine);
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  packageSprite.display();
  //packageSprite.x=packageBody.x;
  //packageSprite.y=packageBody.y;

  wall1Object.display();
  wall2Object.display();
  wall3Object.display();
 // keyPressed();
  
  drawSprites();
}
 
function keyPressed(){

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageSprite.body,false);
		console.log("hi");
		console.log(packageSprite);
		console.log(packageSprite.body.isStatic);
	}
	//console.log("hello");

	if (keyCode === LEFT_ARROW) {

		helicopterSprite.x=helicopterSprite.x-20;    
		translation={x:-20,y:0}
		Matter.Body.translate(packageSprite.body, translation)
	  } 
	  
	  if (keyCode === RIGHT_ARROW) {
		helicopterSprite.x=helicopterSprite.x+20;
		translation={x:20,y:0}
		Matter.Body.translate(packageSprite.body, translation)
	  }
}