
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var tree;
var stone;
var ground;
var boy,boyImage;


function preload()
{
	boy= loadImage("images/project/boy.png")
}

function setup() {
	createCanvas(1200, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree= new Tree(550,400,300,300);
	mango1 = new Mango(110,580,50,50);
	mango2 = new Mango(650,400,50,50);
	mango3= new Mango(680,400,50,50);
	mango4= new Mango(620,450,50,50);
	mango5 = new Mango(690,500,50,50);
	mango6 = new Mango(620,500,50,50);

	rope= new Rope(boy.body,mango1.body);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  image(boy,100,750,200,200);
 
  
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  rope.display();
 
}



