let snake;
let food;
let w;
let h;
let habibi = 20;
function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  w = floor(width / habibi);
  h = floor(height / habibi);
  frameRate(10)
  snake = new Snake();
  foodLocation();
}

function draw() {
  fill(0)
  text ("Press KeyCode 32 to go on HARD MODE")
  scale(habibi);
  background(150,150,0);
  if (snake.eat(food)) {
    foodLocation();
  }
  snake.update();
  snake.show();

  if (snake.endGame()) {
    background(255, 0, 0);
    noLoop();
  }


  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }
   if(keyCode === 32){
     frameRate(30);
   }
}


function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
}
