var FoodIMG, Food2IMG, Food3IMG, Food4IMG, Food;
var backgroundIMG;
var Crown,crownIMG
var ground;
var database;
var WaterIMG, water;
var bird, birdIMG;
var Prize,PrizeIMG,Prize2
var score = 0
var score = 0
var gameState = 1
var PLAY = 1
var END = 1
function preload() {
  backgroundIMG = loadImage('BackGround.png');
   WaterIMG = loadImage('Water.png');
  birdIMG = loadImage('Bird.png');
  FoodIMG = loadImage('Food.png');
  Food2IMG = loadImage('Food2.png');
  Food3IMG = loadImage('Food3.png');
  Food4IMG = loadImage('Food4.png');
  PrizeIMG = loadImage('Prize.png')
  crownIMG = loadImage('Crown.png');
 // Prize2IMG = loadImage('Prize2.png')
 }
function setup() {
  createCanvas(1200, 400);
  database = firebase.database();
 Prize = createSprite(50,30);
 Prize.addImage(PrizeIMG);
 Prize.scale = 0.2

 
  ground = createSprite(600, 400, 1200, 400);
  ground.addImage(backgroundIMG);
  ground.scale = 0.4;
  bird = createSprite(120, 300);
  bird.addImage(birdIMG);
  bird.scale = 0.01;
  

  water = createSprite(500, 490);
  water.addImage(WaterIMG);
  }
function draw() {
  background('pink');
  noStroke();
  textSize(30)
  fill("white")
  if(gameState === PLAY){
    score=score++
  }
  food();
  Prize2 = createSprite(220,30);
  Prize2.addImage(PrizeIMG);
  Prize2.scale = 0.2
  Crown = createSprite(78,20);
 Crown.addImage(crownIMG);
 Crown.scale = 0.1
 
 
  water.velocityX = -3;
console.log(water.x)
  if (water.x < 0) {
    water.x = water.width / 2;
  }
  ground.velocityX = -2;
  ground.velocityY = 0
console.log(ground.x)
  if (ground.x < 0) {
    ground.x = ground.width/ 2;
  }
  if(ground.y<0){
    ground.y = ground.height/2
  }

  
  if (keyWentDown('UP_ARROW')) {
    bird.x = bird.x;
    bird.y = bird.y - 20;
  }
  if (keyWentDown('Down_ARROW')) {
    bird.x = bird.x;
    bird.y = bird.y + 20;
  }
  if (keyWentDown('LEFT_ARROW')) {
    bird.velocityX = -5;
    bird.velocityY = 0;
  }
  if (keyWentDown('RIGHT_ARROW')) {
    bird.velocityX = 5;
    bird.velocityY = 0;
  }
  //bird.collide();
  drawSprites();
 Prize.display();
 text("score : " + score, 80,40)
// Prize2.dispaly();


 }
function food() {
  if (frameCount % 80 === 0) {
    Food = createSprite(1000, 200, 30, 30);
    Food.scale = 0.1;
    Food.velocityX = -5;
    var r = Math.round(random(1, 4));

    switch (r) {
      case 1:
        console.log('1 added');
        Food.addImage(FoodIMG);
        break;
      case 2:
        console.log('2 added');
        Food.addImage(Food2IMG);
        break;
      case 3:
        console.log('3 added');
        Food.addImage(Food3IMG);
        break;
      case 4:
        console.log('4 added');
        Food.addImage(Food4IMG);
        break;
    }

    console.log(r);
    console.log(frameCount);
    console.log(Food.x);
  }
}
