const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const numOfAnts = 10;
const ants = [];
const speed = 10;
canvas.height = 500;
canvas.width = 500;
canvas.setAttribute("id", "canvas");
let start = 0; //for controlling time of animation

//for creating our ants
class component {
  constructor(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
      this.image = new Image();
      this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.directionX = 1;
    this.directionY = 1;
  }
  draw() {
    if (this.type == "image") {
      ctx.fillStyle = "pink";
      ctx.fillRect(this.x, this.y, this.width, this.height);
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    } else {
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }
  updatePosition() {
    this.x += speed * this.directionX;
    this.y += speed * this.directionY;
  }
}

function generateRandomPosition(basis) {
  return Math.floor((Math.random() * (basis - 30)) / 10) * 10;
}

function createAnts() {
  for (let i = 0; i < numOfAnts; i++) {
    let newAnt = new component(
      30,
      30,
      "assets/ant.jpg",
      generateRandomPosition(canvas.width),
      generateRandomPosition(canvas.height),
      "image"
    );

    while (
      ants.some(
        (ant) =>
          Math.abs(ant.x - newAnt.x) <= 30 && Math.abs(ant.y - newAnt.y) <= 30
      )
    ) {
      newAnt.x = generateRandomPosition(canvas.width);
      newAnt.y = generateRandomPosition(canvas.height);
    }
    ants.push(newAnt);
  }
}

function drawAnts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (ants.length !== 0) {
    ants.forEach((ant) => {
      ant.draw();
    });
  }
  requestAnimationFrame(drawAnts); //this is needed to add ants to the canvas
}

function animateAnts(timeStamp) {
  const elpased = timeStamp - start;
  if (elpased > 200) {
    start = timeStamp;
    animate();
  }
  requestAnimationFrame(animateAnts);
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < ants.length; i++) {
    if (ants[i].x + 30 >= canvas.width) {
      ants[i].directionX = -1;
    }
    if (ants[i].x <= 0) {
      ants[i].directionX = 1;
    }
    if (ants[i].y + 30 >= canvas.height) {
      ants[i].directionY = -1;
    }
    if (ants[i].y <= 0) {
      ants[i].directionY = 1;
    }
    for (let j = i + 1; j < ants.length; j++) {
      detectCollision(ants[i], ants[j]);
    }
    ants[i].updatePosition();
    ants[i].draw();
  }
}

function detectCollision(ant1, ant2) {
  let xOverlap = ant1.x < ant2.x + 30 && ant1.x + 30 > ant2.x;
  let yOverlap = ant1.y < ant2.y + 30 && ant1.y + 30 > ant2.y;

  if (xOverlap && yOverlap) {
    ant1.directionX = -ant1.directionX;
    ant2.directionX = -ant2.directionX;
    ant1.directionY = -ant1.directionY;
    ant2.directionY = -ant2.directionY;
  }
}
function startGame() {
  createAnts();
  drawAnts();
  animateAnts();
  removeAnts();
}

//remove ants when they are smashed
function removeAnts() {
  canvas.addEventListener("click", (event) => {
    for (let i = 0; i < ants.length; i++) {
      let ant = ants[i];
      if (
        event.clientX >= ant.x &&
        event.clientX <= ant.x + ant.width &&
        event.clientY >= ant.y &&
        event.clientY <= ant.y + ant.height
      ) {
        ctx.clearRect(ant.x, ant.y, canvas.width, canvas.height);
        ants.splice(i, 1);
      }
    }
    console.log(ants);
  });
}

startGame();
