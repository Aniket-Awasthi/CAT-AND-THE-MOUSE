var garden;
var cat, catImg, catAni;
var mouse, mouseImg, mouseAni;
var catImg2, mouseImg2;


function preload() {
  garden = loadImage("garden.png");
  catImg = loadAnimation("cat1.png");
  catAni = loadAnimation("cat2.png", "cat3.png");
  catImg2 = loadAnimation("cat4.png");
  mouseImg = loadAnimation("mouse1.png");
  mouseAni = loadAnimation("mouse2.png", "mouse3.png");
  mouseImg2 = loadAnimation("mouse4.png");
}

function setup() {
  createCanvas(1000, 800);


  cat = createSprite(800, 650);
  cat.addAnimation(catImg);


  mouse = createSprite(100, 650);
  mouse.addAnimation(mouseImg);



}

function draw() {
  background(garden);

  if (keyDown("space")) {
    mouse.changeAnimation(mouseAni);
    cat.chamgeAnimation(catAni);
    cat.velocityX = -1;
  }

  if (cat.x - mouse.x < cat.width / 2 + mouse.width / 2) {
    cat.velocityX = 0;
    mouse.changeAnimation(mouseImg2);
    cat.chamgeAnimation(catImg2);

  }

  drawSprites();
}



