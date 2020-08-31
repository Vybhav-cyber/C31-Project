const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var  engine, world;
var particles = []
var plinkos = []
var divisions = []
var divisionHeight=300;

//var division;

function setup() {
  var canvas = createCanvas(520, 800);

	engine = Engine.create();
	world = engine.world;
  
  ground = new Ground(240,790,480,10);
  
  
  
  for(var k=0; k<=width; k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }
  
  for (var j = 75; j <=width; j=j+50) 
  {    
     plinkos.push(new Plinko(j,55));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {    
     plinkos.push(new Plinko(j,155));
  }

  for (var j = 75; j <=width; j=j+50) 
  {    
     plinkos.push(new Plinko(j,255));
  }

   for (var j = 50; j <=width-10; j=j+50) 
  {    
     plinkos.push(new Plinko(j,355));
  }

  
}

function draw() {  
  background("black");
  Engine.update(engine);
  
  ground.display();

  if(frameCount%90===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,8));
  }

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();    
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }

  for(var k=0; k<divisions.length; k++){
    divisions[k].display();
  }  
  
  drawSprites();
}

