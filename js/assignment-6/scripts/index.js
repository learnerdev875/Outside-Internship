const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = 360;
const CANVAS_HEIGHT = 640;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
let counter = 0;
let score = 0;
let animation = null;
//pipe
const PIPE_WIDTH = 50;
const PIPE_GAP = 200;
const PIPE_MIN_HEIGHT = 100;
const PIPE_MAX_HEIGHT = CANVAS_HEIGHT - PIPE_GAP - PIPE_MIN_HEIGHT;
const pipePositionX = (CANVAS_WIDTH - PIPE_WIDTH) * 2;
const pipeSpeed = 1;
const pipes = [];
let startTime = null;
const duration = 1000;
const pipeHeight = CANVAS_HEIGHT / 2;

//game state
let gameState = "menu";

//base
const baseImg = new Image();
baseImg.src = "./assets/base.png";

//bird
const bird = new Bird(
  document.querySelector("#bird_img"),
  50,
  40,
  CANVAS_HEIGHT,
  CANVAS_WIDTH
);
//background
const background = new Background(
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
  document.querySelector("#background_img")
);

//function to createPipes
function createPipes() {
  const obstacleHeight =
    PIPE_MIN_HEIGHT + Math.random() * (PIPE_MAX_HEIGHT - PIPE_MIN_HEIGHT);
  const topObstacle = new Pipe(
    PIPE_WIDTH,
    obstacleHeight,
    document.querySelector("#pipe_up"),
    pipePositionX,
    0
  );
  const bottomObstacle = new Pipe(
    PIPE_WIDTH,
    CANVAS_HEIGHT - (obstacleHeight + PIPE_GAP) + 10,
    document.querySelector("#pipe_down"),
    pipePositionX,
    obstacleHeight + PIPE_GAP - 60
  );
  pipes.push(topObstacle, bottomObstacle);
}

//function to move Pipe
function renderPipes() {
  if (gameState === "running") {
    counter++;
  }
  for (const pipe of pipes) {
    if (gameState === "running") {
      pipe.update(pipeSpeed, bird);
    }
    pipe.draw(ctx);
  }

  pipes.filter((pipe) => pipe.position.x > 0);
  if (gameState === "running") {
    if (counter > 250) {
      createPipes();
      counter = 0;
    }
  }
}

function accelerate(n) {
  bird.gravity = n;
}

//Game Controls
new InputHandler(accelerate);

//render menu
function renderMenu() {
  ctx.font = "20px Arial";
  ctx.fillText("Press Space to Start", 100, CANVAS_HEIGHT / 2);
}

//render game over
function renderGameOver() {
  // console.log(pipes);
  ctx.fillText("Game Over", 130, CANVAS_HEIGHT / 2);
  ctx.fillText("Your Score " + score / 2, 125, CANVAS_HEIGHT / 2 + 30);
}

//render score
function renderScore() {
  ctx.font = "20px Arial";
  ctx.fillStyle = "white";
  ctx.fillText("Score: " + score / 2, CANVAS_WIDTH / 2 - 30, 50);
}

//game loop
function gameLoop(timestamp) {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  if (!startTime) {
    startTime = timestamp;
  }
  const runTime = timestamp - startTime;
  const relativeProgress = runTime / duration;
  background.draw(ctx);
  ctx.drawImage(baseImg, 0, CANVAS_HEIGHT - 50, CANVAS_WIDTH, 50);

  bird.draw(ctx);
  if (gameState === "menu") {
    renderMenu();
  } else if (gameState === "running") {
    bird.update();
    renderPipes();
    renderScore();
  } else if (gameState === "gameover") {
    cancelAnimationFrame(gameLoop);
    renderGameOver();
    renderPipes();
  }
  requestAnimationFrame(gameLoop);
}

gameLoop();
