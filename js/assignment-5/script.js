const canvas = document.querySelector("#canvas");
canvas.width = 300;
canvas.height = 730;
const ctx = canvas.getContext("2d");
const lanes = 3;
const laneX = canvas.width / lanes;
let isGameOver = false;
let car;
let obstaclesAmount = 4;
let obstaclePositions = [];
let obstacles = [];
const carWidth = 30;
const carHeight = 50;
const obstacleWidth = 40;
const obstacleHeight = 50;
//car image
const img = new Image();
img.src = "assets/cars.png";

function drawLane() {
  ctx.fillStyle = "black";
  ctx.lineWidth = 2;
  for (let i = 1; i < lanes; i++) {
    ctx.beginPath();
    ctx.moveTo(laneX * i + 1, 0);
    ctx.lineTo(laneX * i + 1, canvas.height);
    ctx.stroke();
  }
}

//car object
function Component(x, y, color, width, height) {
  this.x = x;
  this.y = y;
  this.color = color;
  this.width = width;
  this.height = height;
  this.draw = function () {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
}

function createPlayer() {
  car = new Component(
    canvas.width / 2,
    canvas.height - carHeight - 30,
    "red",
    carWidth,
    carHeight
  );
  car.draw();
}
function generateRandomPositions() {
  let x = Math.random() * canvas.width - obstacleWidth;
  let y = Math.random() * canvas.height - obstacleHeight;
  return [x, y];
}

function doesOverLap(position) {
  for (const obstacle of obstaclePositions) {
    if (obstacle[0] === position[0] && obstacle[1] === position[1]) {
      return true;
    }
  }
  return false;
}

function createObstacle() {
  for (let i = 0; i < obstaclesAmount; i++) {
    let position = generateRandomPositions();
    while (doesOverLap(position)) {
      position = generateRandomPositions();
    }
    obstaclePositions.push(position);
  }
  for (let i = 0; i < obstaclePositions.length; i++) {
    let obstacle = new Component(
      obstaclePositions[i][0],
      obstaclePositions[i][1],
      "black",
      40,
      50
    );
    obstacles.push(obstacle);
    obstacle.draw();
  }
}

function startGame() {
  if (!isGameOver) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawLane();
    createObstacle();
    createPlayer();
  }
}
startGame();
