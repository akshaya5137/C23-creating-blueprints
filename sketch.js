const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var myWorld, myEngine;
//Objects 
var ground;
var box,box2;

function setup() {
  createCanvas(400,400);
   
  myEngine=Engine.create();
  myWorld=myEngine.world;

  ground= new Ground();
  box = new Box(200,300,50,50);
  box2 = new Box(240,100,50,100);
  
}

function draw() {
  background("black");  
  Engine.update(myEngine);

  ground.display();
  box.display();
  box2.display();
  
}