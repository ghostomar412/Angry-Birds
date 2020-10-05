const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var log,log1,log2,log3,log4;

var engine, world;
var box1,box2,box3,box4,box5;
var pig,pig1;
var bird;
var bgImage;
var platform;
var chain;
function preload(){
bgImage=loadImage("sprites/bg.png");


}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    platform = new Ground(150,330,300,150);
    ground = new Ground(600,height,1200,20)
    pig=new Pig(810,320)
    log=new Log(810,270,299,PI/2)
    box3 = new Box(700,250,70,70);
    
    box4 = new Box(920,250,70,70);
    pig1= new Pig (810,250);
    log1 = new Log (810,180,300,PI/2);
    box5= new Box(810,160,70,70);
    log2 = new Log (760,120,150,PI/7);
    log3 = new Log (870,120,150,-PI/7);
    bird = new Bird (175,200);
    chain=new Chain(bird.body,{x:275,y:100});
    
       
}

function draw(){
    background(bgImage);
    Engine.update(engine);
    box1.display();
    box2.display();
    pig.display();
    log.display();
    log1.display();
    pig1.display();
    box3.display();
    box4.display();
    box5.display();
    log2.display();
    log3.display();
    bird.display();
    ground.display();
    platform.display();
    chain.display();


    
}

function mouseDragged(){
Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})



}
function mouseReleased() {
    chain.fly()
  }
