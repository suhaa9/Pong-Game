let paddle, ball;
let score = 0;

function preload() {

}

function setup() {
  createCanvas(400,400);
  background(224,224,224);

  paddle = new Sprite(200,380,100,20);
  paddle.color = color(95,158,160);
  paddle.rotationLock = true;
  
  ball = new Sprite(100, 50, 20);
  ball.color = color(0,128,128);
  ball.direction = 'down';
  ball.speed = 5;
  
  walls = new Group();
	walls.w = 10;
	walls.h = 400;
  walls.collider = "static";
  walls.visible = false;

	new walls.Sprite(0, height / 2);
	new walls.Sprite(width, height / 2);
  
	let wallTop = new walls.Sprite(width / 2, 0);
	wallTop.rotation = 90;
}

function draw() {
  background(224,224,224);

  if (ball.collides(paddle)) {
    ball.speed = 8;
    score = score + 1;
  }

  if (ball.y > 390) {
    ball.y = 430
    ball.speed = 0;
    
    fill(0);
    textSize(20);
    text('You lose!', 160, 160); 
  }

  fill(0, 128, 128);
  textAlign(LEFT);
  textSize(20);
  text('Score = ' + score, 10, 30);
}	