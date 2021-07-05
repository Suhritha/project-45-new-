var ground;
var airLand;
var person;



function setup() {
  createCanvas(displayWidth,displayHeight-200);

  ground = createSprite(100, displayHeight-210, 3000, 20);
  ground.shapeColor="brown";

  person = createSprite(100,displayHeight-250,20,60);
  person.shapeColor="black";
}


function draw() {
  background("grey"); 
  ground.velocityX = -3;
  if(ground.x < 0 ){
  	ground.x = 300;
  } 

  if(keyDown("space")){
  	person.velocityY = -10;

  }
    person.velocityY+=0.8;
   

  if(keyDown(LEFT_ARROW)){
  	person.x-=20
  	
  }

  if(keyDown(RIGHT_ARROW)){
  	person.x+=20
  	
  }

  floatingLand();
  person.collide(ground);
  drawSprites();
}

function floatingLand(){
	if(frameCount %200 === 0){
      airLand= createSprite(displayWidth-100,200,50,10);
      airLand.y = Math.round(random(100,displayHeight-250))
      console.log(airLand.y);
      airLand.shapeColor="blue";
      airLand.velocityX = -3;
	}
}




