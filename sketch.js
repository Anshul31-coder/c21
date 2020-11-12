var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  obj1 = createSprite(100,100,50,50);
  obj1.shapeColor = "blue";

  obj2 = createSprite(200,100,50,50);
  obj2.shapeColor = "blue";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0); 

  obj2.x = World.mouseX;
 obj2.y = World.mouseY;

bounceOff(movingRect,fixedRect);
  if(isTouching(obj1,obj2))
 {
   obj2.shapeColor = "red";
    obj1.shapeColor = "red";
 }
 else
 {
    obj2.shapeColor = "blue";
    obj1.shapeColor = "blue";
 }
  drawSprites();
}

