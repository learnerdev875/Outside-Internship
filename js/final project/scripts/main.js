import { Frog } from "./Frog.js";
import { Obstacles } from "./obstacles.js";
import { Particle } from "./particles.js";
import { Life } from "./Life.js";

//global variables
let score = 0;
let grid = 50;
let frame = 0;
let keys = [];
let life = 3;
let lifeArray = [];
let vehiclesArray = [];
let logsArray = [];
let ripplesArray = [];
let maxParticles = 300;
let safe = false;
let gameStarted = false;
let gameOver = false;
//game speed will increase whenever we score a point
let gameSpeed = 1;

//Images
const log = new Image();
log.src = "assets/log.png";
const background = new Image();
background.src = "assets/background_lvl2.png";
const grass = new Image();
grass.src = "assets/grass.png";
const frogImg = new Image();
frogImg.src = "assets/frog_spritesheet.png";
const collisions = new Image();
collisions.src = "assets/collisions.png";
const turtleImg = new Image();
turtleImg.src = "assets/turtles.png";
const carsImg = new Image();
carsImg.src = "assets/cars.png";
const heart = new Image();
heart.src = "assets/life.png";
const restartImg = new Image();
restartImg.src = "assets/restart1.jpg";

//CANVAS ELEMENTS
const CANVASWIDTH = 600;
const CANVASHEIGHT = 600;
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
canvas.width = CANVASWIDTH;
canvas.height = CANVASHEIGHT;
//frogger object
const frog = new Frog(CANVASWIDTH, CANVASHEIGHT, keys, scored, grid, frogImg);

//display lives
function initLives() {
  for (let i = 0; i < life; i++) {
    let x = i * 40;
    lifeArray.push(new Life(x, CANVASHEIGHT - 70, heart, 30, 30));
  }
}
initLives();
function handleLives() {
  lifeArray.forEach((life) => {
    life.draw(ctx);
  });
}

//create obstacles
function initObstacles() {
  //lane1
  for (let i = 0; i < 2; i++) {
    let x = i * 350;
    vehiclesArray.push(
      new Obstacles(
        x,
        CANVASHEIGHT - grid * 3 - 20,
        grid * 2,
        grid,
        1,
        "car",
        gameSpeed,
        CANVASWIDTH,
        turtleImg,
        log,
        carsImg,
        frame
      )
    );
  }
  //lane 2 and the cars starts from right
  for (let i = 0; i < 2; i++) {
    let x = i * 300;
    vehiclesArray.push(
      new Obstacles(
        x,
        CANVASHEIGHT - grid * 4 - 50,
        grid * 2,
        grid,
        -1,
        "car",
        gameSpeed,
        CANVASWIDTH,
        turtleImg,
        log,
        carsImg,
        frame
      )
    );
  }
  //lane 3
  for (let i = 0; i < 2; i++) {
    let x = i * 400;
    vehiclesArray.push(
      new Obstacles(
        x,
        CANVASHEIGHT - grid * 6 - 30,
        grid * 3,
        grid,
        1,
        "car",
        gameSpeed,
        CANVASWIDTH,
        turtleImg,
        log,
        carsImg,
        frame
      )
    );
  }

  //river
  for (let i = 0; i < 2; i++) {
    let x = i * 400;
    logsArray.push(
      new Obstacles(
        x,
        CANVASHEIGHT - grid * 9,
        grid * 2,
        grid,
        -0.5,
        "log",
        gameSpeed,
        CANVASWIDTH,
        turtleImg,
        log,
        carsImg,
        frame
      )
    );
  }
  for (let i = 0; i < 2; i++) {
    let x = i * 400;
    logsArray.push(
      new Obstacles(
        x,
        CANVASHEIGHT - grid * 10,
        grid * 3,
        grid,
        -1,
        "log",
        gameSpeed,
        CANVASWIDTH,
        turtleImg,
        log,
        carsImg,
        frame
      )
    );
  }
  for (let i = 0; i < 3; i++) {
    let x = i * 200;
    logsArray.push(
      new Obstacles(
        x,
        CANVASHEIGHT - grid * 8,
        grid,
        grid,
        0.5,
        "turtle",
        gameSpeed,
        CANVASWIDTH,
        turtleImg,
        log,
        carsImg,
        frame
      )
    );
  }
}
initObstacles();

function handleObstacles() {
  for (let i = 0; i < vehiclesArray.length; i++) {
    vehiclesArray[i].update();
    vehiclesArray[i].draw(ctx);
  }
  logsArray.forEach((log) => {
    log.update();
    log.draw(ctx);
  });

  //collision with car
  vehiclesArray.forEach((vehicle) => {
    if (checkCollision(frog, vehicle)) {
      ctx.drawImage(
        collisions,
        0,
        100,
        100,
        100,
        frog.position.x,
        frog.position.y,
        50,
        50
      );
      life--;
      lifeArray.pop();
      resetGame();
      if (life <= 0) {
        gameOver = true;
      }
    }
  });

  //hop on logs and turtles
  if (frog.position.y < 250 && frog.position.y > 50) {
    safe = false;

    logsArray.forEach((log) => {
      if (checkCollision(frog, log)) {
        frog.position.x += log.speed;
        safe = true;
      }
    });
    if (!safe) {
      for (let i = 0; i < 30; i++) {
        ripplesArray.unshift(new Particle(frog.position.x, frog.position.y));
      }
      resetGame();
      life -= 1;
      lifeArray.pop();
      if (life <= 0) {
        gameOver = true;
      }
    }
  }
}

//water ripple
function handleRipples() {
  ripplesArray.forEach((ripple) => {
    ripple.ripple();
    ripple.drawRipple(ctx);
  });
  if (ripplesArray.length > 20) {
    for (let i = 0; i < 5; i++) {
      ripplesArray.pop();
    }
  }
  if (
    (keys["ArrowLeft"] ||
      keys["ArrowRight"] ||
      keys["ArrowUp"] ||
      keys["ArrowDown"]) &&
    frog.position.y < 200 &&
    frog.position.y > 50
  ) {
    for (let i = 0; i < 20; i++) {
      ripplesArray.unshift(new Particle(frog.position.x, frog.position.y));
    }
  }
}

//key event listener
window.addEventListener("keydown", function (e) {
  if (!gameStarted) {
    gameStarted = true;
  }
  keys[e.key] = true;
  if (
    keys["ArrowLeft"] ||
    keys["ArrowRight"] ||
    keys["ArrowUp"] ||
    keys["ArrowDown"]
  ) {
    frog.jump();
  }
});

window.addEventListener("keyup", function (e) {
  delete keys[e.key];
  frog.moving = false;
  frog.frameX = 0;
});

//function to track score
function scored() {
  gameSpeed += 0.05;
  //setting initial position of frog
  frog.position.x = CANVASWIDTH / 2 - frog.width / 2;
  frog.position.y = CANVASHEIGHT - frog.height - grid;
  score += 1;
}

//display score
function handleScoreBoard() {
  ctx.fillStyle = "black";
  ctx.strokeStyle = "black";
  ctx.font = "15px Verdana";
  ctx.strokeText("Score", 265, 15);
  ctx.font = "60px Verdana";
  ctx.fillText(score, 270, 65);
  ctx.font = "15px Verdana";
  ctx.strokeStyle = "white";
  ctx.strokeText("Game Speed: " + gameSpeed.toFixed(1), 20, CANVASHEIGHT - 80);
}

//after collision
function resetGame() {
  frog.position.x = CANVASWIDTH / 2 - frog.width / 2;
  frog.position.y = CANVASHEIGHT - frog.height - grid;
  gameSpeed = 1;
  frog.frameX = 0;
  frog.frameY = 0;
}

//check collision
function checkCollision(first, second) {
  if (
    first.position.x < second.position.x + second.width &&
    first.position.x + first.width > second.position.x &&
    first.position.y < second.position.y + second.height &&
    first.position.y + first.height > second.position.y
  ) {
    return true;
  } else {
    return false;
  }
}
//game start menu
function renderMenu() {
  ctx.font = "48px sans-serif";
  ctx.fillStyle = "blue";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Press any key to start!", canvas.width / 2, canvas.height / 2);
}
//gameover menu
function renderGameOver() {
  ctx.font = "48px sans-serif";
  ctx.fillStyle = "blue";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("GAME OVER!", canvas.width / 2, canvas.height / 2);
  ctx.fillStyle = "white";
  ctx.font = "20px sans-serif";
  ctx.fillText(
    "Your Score: " + score,
    canvas.width / 2,
    canvas.height / 2 + 30
  );
  ctx.drawImage(
    restartImg,
    CANVASWIDTH / 2 - 100,
    CANVASHEIGHT / 2 + 50,
    200,
    50
  );
}
//restart game logic
canvas.addEventListener("click", function (event) {
  let x = event.offsetX;
  let y = event.offsetY;
  if (x >= 200 && x <= 400 && y >= 330 && y <= 400) {
    location.reload();
  }
});

//gameloop
function animate() {
  ctx.clearRect(0, 0, CANVASWIDTH, CANVASHEIGHT);
  ctx.drawImage(background, 0, 0, CANVASWIDTH, CANVASHEIGHT);
  if (!gameStarted) {
    renderMenu();
  } else if (gameOver) {
    renderGameOver();
  } else {
    handleRipples();
    // handleParticles();
    handleObstacles();
    frog.draw(ctx);
    frog.update();
    handleScoreBoard();
    handleLives();
    frame++;
  }
  ctx.drawImage(grass, 0, 0, CANVASWIDTH, CANVASHEIGHT);
  requestAnimationFrame(animate);
}

animate();
