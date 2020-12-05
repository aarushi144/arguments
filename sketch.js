var moving ;
var fixed ; 
function setup() {
  createCanvas(800,800);
  moving = createSprite(100, 200, 50, 50);
  fixed = createSprite(800, 200, 150, 50);
  moving.velocityX = 3
  fixed.velocityX = -3

}

function draw() {
  
  background(0); 
  // moving.x = mouseX ; 
  // moving.y = mouseY ;
 bounceoff (moving , fixed);

  drawSprites();
}

