//physics engine
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

//to create the sprite objects
var treeObj;
var groundObject;
var launcherObject;
var world;
var boy;

//to preload the images
function preload(){

	boy = loadImage("images/boy.png");

	treeObj = loadImage("images/tree.png");

  }

function setup() {

	//to create the canvas
	createCanvas(1300, 600);

	//to create the engine and world
	engine = Engine.create();
	world = engine.world;

	//to create the game objects
	mango1 = new mango(1140, 130, 30);
	mango2 = new mango(1050, 175, 30);
	mango3 = new mango(1170, 200, 30);
	mango4 = new mango(970, 255, 30);
	mango5 = new mango(1100, 240, 30);
	mango6 = new mango(1030, 290, 30);
	mango7 = new mango(1215, 240, 30);
    mango8 = new mango(1155, 290, 30);
    mango9 = new mango(1245, 300, 30);

	stone = new Stone();

	groundObject = new ground(width/2,600,width,20);

	chain = new Chain(stone.body,{x:245, y:445});
	
	//to run the engine
	Engine.run(engine);

}

function draw() {

  //to give the background
  background(230);

  //to display the game objects
  image(boy, 200, 375, 200, 300);
  image(treeObj, 900, 80, 400, 550);
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();

  stone.display();

  chain.display();

  groundObject.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x : mouseX, y : mouseY});
}

function mouseReleased(){
    chain.fly();
}