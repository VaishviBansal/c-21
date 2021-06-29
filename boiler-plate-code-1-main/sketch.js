var fixedRect,movingRect;
var r1,r2,r3,r4;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  r1 = createSprite(100,100,50,50);
  r2= createSprite(200,100,50,50)
  r3= createSprite(300,100,50,50)
 r4 = createSprite(400,100,50,50)
 r1.shapeColor="pink"
 r2.shapeColor="pink"
 r3.shapeColor="pink"
 r4.shapeColor="pink"
}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  //A-200 < 65

console.log(movingRect.x-fixedRect.x)

if(isTouching(movingRect,r4)){
  movingRect.shapeColor="cyan";
  r4.shapeColor="cyan";
}
else{
  movingRect.shapeColor="pink";
  r4.shapeColor="pink";
}

  drawSprites();
}

