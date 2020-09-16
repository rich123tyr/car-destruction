var car,wall;
var weight,speed;
var deformation;

function setup() {
  createCanvas(800,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(775,200,50,height/2);
  speed=random(50,90);
  weight=random(400,1500);
  car.velocityX=speed;
 

}

function draw() {
  background(255,255,255);
  if(wall.x-car.x<(car.width+wall.width)/1.0){
    car  .velocityX=0;
    deformation = 0.5*weight*speed*speed/22500;
    if(deformation<100){
      car.shapeColor=color(0,255,0);
    }
    else if(deformation>100 && deformation<180){
      car.shapeColor=color(230,230,0);
    }
    else(deformation>180)
      car.shapeColor=color(255,0,0);
    

  }
  drawSprites();
}