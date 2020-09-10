var car1,car2,car3;
var wall1,wall2,wall3;
var lane1,lane2,lane3,lane4;
var speed1,speed2,speed3,weight;

function setup() {
 createCanvas(1600,400); 

 speed1=random(55,90);
 speed2=random(55,90);
 speed3=random(55,90);
 
 weight=random(400,1500); 

 car1 =createSprite(50, 90, 70, 40);
 car1.velocityX=speed1;
 
 car2 =createSprite(50, 200, 70, 40);
 car2.velocityX=speed2;

 car3 =createSprite(50, 310, 70, 40);
 car3.velocityX=speed3;

 wall1=createSprite(1550,90,30,89);
 wall1.shapeColor=color(80,80,80);
 wall1.shapeColor=color("brown");

 wall2=createSprite(1550,200,30,89);
 wall2.shapeColor=color(80,80,80);
 wall2.shapeColor=color("brown");

 wall3=createSprite(1550,310,30,89);
 wall3.shapeColor=color(80,80,80);
 wall3.shapeColor=color("brown"); 
 
 lane1=createSprite(0,40,3000,10);
 lane1.shapeColor=color("yellow")

 lane2=createSprite(0,145,3000,10);
 lane2.shapeColor=color("yellow")

 lane3=createSprite(0,250,3000,10);
 lane3.shapeColor=color("yellow")

 lane4=createSprite(0,355,3000,10);
 lane4.shapeColor=color("yellow")


}

function draw() {
  background(0,0,0); 

 if(wall1.x-car1.x<(car1.width/2+wall1.width/2))
  {
  car1.velocityX= 0;
  var deformation=0.5*weight*speed1*speed1/22500;
  car1.collide(wall1);
  if(deformation>180){
   car1.shapeColor=color(255,0,0);
 }
 if(deformation<180 && deformation>100){
   car1.shapeColor=color(230,230,0);
 } 
   if(deformation<100){
   car1.shapeColor=color(0,255,0);}
  }

  if(wall2.x-car2.x<(car2.width/2+wall2.width/2))
 {
   car2.velocityX=0 ;
   var deformation=0.5*weight*speed2*speed2/22500;
   car2.collide(wall2);
   if(deformation>180){
   car2.shapeColor=color(255,0,0);
 }
 if(deformation<180 && deformation>100){
   car2.shapeColor=color(230,230,0);
   } 
   if(deformation<100){
   car2.shapeColor=color(0,255,0);}
  }

   if(wall3.x-car3.x<(car3.width/2+wall2.width/2))
   {
   car3.velocityX= 0;
   var deformation=0.5*weight*speed3*speed3/22500;
   car3.collide(wall3);
   if(deformation>180){
   car3.shapeColor=color(255,0,0);
   }
   if(deformation<180 && deformation>100){
   car3.shapeColor=color(230,230,0);
   } 
     if(deformation<100){
     car3.shapeColor=color(0,255,0);}
    }

    drawSprites();
}