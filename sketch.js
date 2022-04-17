const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var parede1,parede2,parede3,parede4, circulo;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  parede1 = new Ground(200,20,500,20)
  parede2 = new Ground(200,380,500,20)
  parede3 = new Ground(380,200,20,500)
  parede4 = new Ground(20,200,20,500)

  var lala = {
    restitution: 0.01,
    frictionAir: 0.1
  }
  
  circulo = Bodies.circle ( 200, 200, 10, lala)
  
  World.add (world,circulo)
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse (circulo.position.x, circulo.position.y,20)

  parede1.display()
  parede2.display()
  parede3.display()
  parede4.display()

  if (keyCode == RIGHT_ARROW){
    hforce()
  }
}

function hforce () {
  Matter.Body.applyForce (circulo, {x:0,y:0}, {x:0.00005, y:-0.00003})
}

