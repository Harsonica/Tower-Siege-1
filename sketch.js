const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var hexagonObj;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16; 
var ground1, ground2;
var polygon;

function preload(){


}

function setup(){
  
  ground1 = new Ground(320, 120, 50, 40);
  ground2 = new Ground(340, 140, 50, 40);

  block1 = new Block(330, 120, 30, 40);
  block2 = new Block(360, 120, 30, 40);
  block3 = new Block(390, 120, 30, 40);
  block4 = new Block(420, 120, 30, 40);
  block5 = new Block(450, 120, 30, 40);
  block6 = new Block(480, 120, 30, 40);
  block7 = new Block(500, 120, 30, 40);
 
  block8 = new Block(330, 235, 30, 40); 
  block9 = new Block(360, 235, 30, 40);
  block10 = new Block(390, 235, 30, 40); 
  block11 = new Block(420, 235, 30, 40);
  block12 = new Block(450, 235, 30, 40); 

  block13 = new Block(360, 195, 30, 40);
  block14 = new Block(390, 195, 30, 40);
  block15 = new Block(420, 195, 30, 40);

  block16 = new Block(390, 155, 30, 40);
  
  polygon = Bodies.circle(50, 200, 20);
  World.add(world, polygon);


  slingShot = new Slingshot(this.polygon,{x:100, y:200});

  ImageMode(CENTER)
  image(polygn_img, polygon.position.x, polygon.position.y, 40, 40);
}



function draw(){

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  ground1.display(); 
  ground2.display();

  
  
  
  
  drawSprites()


}


function mouseDragged(){
    Matter.Body.setPosition(hexagonObj.body, {x: mouseX , y: mouseY});
  }
  
  
  function mouseReleased(){
    Slingshot.fly();
  }
  
  