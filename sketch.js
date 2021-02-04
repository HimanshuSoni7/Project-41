const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var bruce, lightning;
var bruce_walking, lightning1;

var drops = [];

function preload(){
    bruce_walking=loadAnimation("images/walking_8.png","images/walking_7.png","images/walking_6.png","images/walking_5.png","images/walking_4.png","images/walking_3.png","images/walking_2.png","images/walking_1.png");
    lightning1=loadAnimation("images/1.png","images/2.png","images/3.png","images/4.png");
}

function setup(){
   createCanvas(400,657); 
   engine = Engine.create();
   world = engine.world;
   
   bruce=createSprite(200,490,0,0);
   bruce.addAnimation("walking",bruce_walking);
   bruce.scale=0.5;

   lightning=createSprite(150,20,0,0);
   lightning.addAnimation("crackling",lightning1);
   lightning.scale=0.55;
}

function draw(){
    background("black");
    Engine.update(engine);

    if(frameCount%5===0){
      drops.push(new Drop(random(width-380, width), 5,5));
    }

    for (var j = 0; j < drops.length; j++) {
  
      drops[j].display();
    }

    drawSprites();
}   

