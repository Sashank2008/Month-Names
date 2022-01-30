var trex, trexImage;
var ground, groundImage;
var invisibleGround;
var Clouds, CloudImage;
var obstacles,
  obstaclesImage1,
  obstaclesImage2,
  obstaclesImage3,
  obstaclesImage4,
  obstaclesImage5,
  obstaclesImage6;
function preload() {
  trexImage = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundImage = loadImage("ground2.png");
  CloudImage = loadImage("cloud.png");
  obstaclesImage1 = loadImage("obstacle1.png");
  obstaclesImage2 = loadImage("obstacle2.png");
  obstaclesImage3 = loadImage("obstacle3.png");
  obstaclesImage4 = loadImage("obstacle4.png");
  obstaclesImage5 = loadImage("obstacle5.png");
  obstaclesImage6 = loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 400);
  trex = createSprite(30, 360);
  trex.addAnimation("Dinosoures", trexImage);
  trex.scale = 0.4;
  ground = createSprite(200, 380, 600, 10);
  ground.addImage("floor", groundImage);
  ground.velocityX = -4;

  invisibleGround = createSprite(25, 384, 400, 10);

  invisibleGround.visible = false;
}

function draw() {
  background("black");
  drawSprites();

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  if (keyDown("space") && trex.y >= 350) {
    trex.velocityY = -8;
  }
  trex.velocityY = trex.velocityY + 0.5;

  trex.collide(invisibleGround);

  //  console.log(trex.y);

  //Calling functions
  createClouds();
  createobstecles();
}

function createClouds() {
  if (frameCount % 60 === 0) {
    Clouds = createSprite(570, 100, 50, 10);
    Clouds.velocityX = -6;
    Clouds.addImage("cloud", CloudImage);
    Clouds.y = Math.round(random(150, 300));
    Clouds.depth = trex.depth;
    trex.depth += 1;
    console.log("trex depth is:" + trex.depth);
    console.log("clouds depth is:" + Clouds.depth);

    // lifetime = distance / speed
    // cloudlifetime = 570/6
    Clouds.lifetime = 94;
  }
}

function createobstecles() {
  if (frameCount % 50 === 0) {
    obstacles = createSprite(580, 363, 10, 100);
    obstacles.velocityX = -6;
    obstacles.lifetime = 96;
    obstacles.scale = 0.4;

    var Number = Math.round(random(1, 6));
    switch (Number) {
      case 1:
        obstacles.addImage(obstaclesImage1);
        break;

      case 2:
        obstacles.addImage(obstaclesImage2);
        break;

      case 3:
        obstacles.addImage(obstaclesImage3);
        break;

      case 4:
        obstacles.addImage(obstaclesImage4);
        break;

      case 5:
        obstacles.addImage(obstaclesImage5);
        break;

      case 6:
        obstacles.addImage(obstaclesImage6);
        break;

      default:
        break;
    }
  }
}
