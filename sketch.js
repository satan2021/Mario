const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, mario1, bg1;
var clouds, cloudImg;

function preload(){
  bg1 = loadImage("mario/bg1.jpg");
  cloudImg = loadImage("mario/cloud.jpeg")
}


function setup() {
  createCanvas(1250,500);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 475, 1300, 90);
  mario1 = new Mario(150, 474, 80, 80);
 
  
}

function draw() {
  background("lightblue"); 

  Engine.update(engine);

  ground.display();
  mario1.display();
  
 

  drawSprites();
}

  