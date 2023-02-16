const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const canvasWidth = 300;
const canvasHeight = 600;
canvas.width = canvasWidth;
canvas.height = canvasHeight;
let isGameOver = false;
let lastTime = 0;
//position of restart button
const restartX = canvasWidth / 2 - 70;
const restartY = canvasHeight / 2 + 130;
//to set the width of car and obstacles;
const laneWidth = canvasWidth / 3;
const componentHeight = 100;
const obstacleX = Math.floor(Math.random() * 3) * laneWidth;
let score = 0;

//images
const road = document.querySelector("#road_img");

//Car class
class Car {
  constructor(width, height) {
    this.image = document.querySelector("#car_img");
    this.width = width;
    this.height = height;
    this.position = {
      x: (canvasWidth - this.width) / 2,
      y: canvasHeight - this.height - 10,
    };
    //how fast the car will move
    this.maxSpeed = 2;
    this.speed = 0;
  }
  draw() {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
  moveLeft() {
    this.speed = -this.maxSpeed;
  }
  moveRight() {
    this.speed = this.maxSpeed;
  }
  update(deltaTime) {
    // if (!deltaTime) return; //initially our time will be 0

    this.position.x += this.speed;
    if (this.position.x < 0) this.position.x = 0; //checking when the car moves to the left edge, it cant go outside the canvas
    if (this.position.x + this.width > canvasWidth)
      //ensuring the car does not go outside the canvas when moving right
      this.position.x = canvasWidth - this.width;
  }
  stopCar() {
    this.speed = 0;
  }
}

//inputHadler Class
class InputHandler {
  constructor(car) {
    document.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowLeft":
          car.moveLeft();
          break;

        case "ArrowRight":
          car.moveRight();
          break;
      }
    });

    document.addEventListener("keyup", (e) => {
      switch (e.key) {
        case "ArrowLeft":
          if (car.speed < 0) car.stopCar();
          break;

        case "ArrowRight":
          if (car.speed > 0) car.stopCar();
          break;
      }
    });
  }
}

//obstacle Class
class Obstacle {
  constructor(width, height, x) {
    this.image = document.querySelector("#obstacle_img");
    this.width = width;
    this.height = height;
    this.x = x;
    this.position = {
      x: this.x,
      y: 0,
    };
    this.speed = {
      x: 2,
      y: 2,
    };
    this.game = game; // this helps us to access car object
  }
  draw() {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
  update(deltaTime) {
    if (this.position.y > canvasHeight) {
      this.position.x = Math.floor(Math.random() * 3) * laneWidth;
      this.position.y = 0;
      score++;
    }

    //check collision with our car
    let bottomOfObstacle = this.position.y + this.height;
    let topOfCar = this.game.car.position.y;
    let leftOfCar = this.game.car.position.x;
    if (
      bottomOfObstacle === topOfCar &&
      leftOfCar < this.position.x + this.game.car.width &&
      leftOfCar + this.game.car.width > this.position.x
    ) {
      isGameOver = true;
      this.position.x = Math.floor(Math.random() * 3) * laneWidth;
      this.position.y = 0;
    }
    this.position.y += this.speed.y;
  }
}

//Game Class
class Game {
  constructor() {}
  start() {
    this.car = new Car(laneWidth, componentHeight);
    new InputHandler(this.car);
    // let obstacles = [];
    // for (let i = 0; i < 2; i++) {
    //   obstacles.push(new Obstacle(laneWidth, componentHeight, obstacleX * i));
    // }
    this.obstacle = new Obstacle(laneWidth, componentHeight, obstacleX);
    this.gameObjects = [this.car, this.obstacle];
    // this.gameObjects = [this.car, ...obstacles];
  }

  update(elapsedTime) {
    // this.car.update(elapsedTime);
    // this.obstacle.update(elapsedTime);
    this.gameObjects.forEach((obj) => obj.update(elapsedTime));
  }
  draw() {
    // this.car.draw();
    // this.obstacle.draw();
    this.gameObjects.forEach((obj) => obj.draw());
  }
}

//instance of game class . this is done to sepeate our concerns
let game = new Game();
game.start();

//creating obstacles randomly

function gameLoop(timestamp) {
  let elapsedTime = timestamp - lastTime;
  lastTime = timestamp;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (!isGameOver) {
    ctx.drawImage(road, 0, 0, canvasWidth, canvasHeight);
    drawScore();
    game.update(elapsedTime);
    game.draw();
    console.log(score);
  } else {
    endGame();
  }
  requestAnimationFrame(gameLoop);
}
//for score display
function drawScore() {
  ctx.fillStyle = "black";
  ctx.font = "30px serif";
  ctx.fillText(`Score : ${score} `, 20, 40);
}

function endGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  console.log("new Game Started");
  ctx.drawImage(road, 0, 0, canvasWidth, canvasHeight);
  ctx.fillStyle = "red";
  ctx.font = "30px serif";
  ctx.fillText("GAME OVER", canvas.width / 5, canvas.height / 2);
  ctx.fillStyle = "black";
  ctx.fillText(`You scored ${score}`, canvasWidth / 4, canvasHeight / 2 + 100);
  ctx.fillRect(restartX, restartY, 150, 50);
  ctx.fillStyle = "white";
  ctx.fillText("Restart", restartX + 35, restartY + 31);
}
requestAnimationFrame(gameLoop);
