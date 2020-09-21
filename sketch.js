var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "orange";
  fixedRect.debug = true;

  movingRect = createSprite(1000, 200, 80, 50);
  movingRect.shapeColor = "orange";
  movingRect.debug = true;
}

function draw() {
  background("lightgray");  

  console.log("Fixed Rect x : "+fixedRect.x);
  console.log("Moving Rect x : "+movingRect.x);
  console.log((fixedRect.width/2)+(movingRect.width/2));
  console.log(movingRect.x -  fixedRect.x);
 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x -  fixedRect.x < fixedRect.width/2 + movingRect.width/2 
    && fixedRect.x -  movingRect.x < fixedRect.width/2 + movingRect.width/2 
    && movingRect.y -  fixedRect.y < fixedRect.height/2 + movingRect.height/2 
    && fixedRect.y -  movingRect.y < fixedRect.height/2 + movingRect.height/2 )
  {
    fixedRect.shapeColor = "lightblue";
    movingRect.shapeColor = "lightblue";
  }
  else
  {
    fixedRect.shapeColor = "orange";
    movingRect.shapeColor = "orange";
  }
  

  drawSprites();
}