const containerWidth = 600;
const containerHeight = 600;
const containerColor = "red";
const numOfBoxes = 3;
const boxWidth = 30;
const boxHeight = 30;
const boxColor = "black";
const speed = 10;

function main() {
  const body = document.querySelector("body");
  const container = createContainer(body);
  const boxes = generateBoxes(container);
  startAnimation(boxes);
}
//create container for boxes
function createContainer(body) {
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  container.style.backgroundColor = containerColor;
  container.style.height = containerHeight + "px";
  container.style.width = containerWidth + "px";
  body.appendChild(container);
  return container;
}

//create a box
function createBox(container, box) {
  const boxDiv = document.createElement("div");
  boxDiv.setAttribute("class", "box");
  boxDiv.setAttribute("id", `box-${box.boxId}`);
  boxDiv.style.backgroundColor = boxColor;
  boxDiv.style.width = boxWidth + "px";
  boxDiv.style.height = boxHeight + "px";
  boxDiv.style.top = box.PositionY + "px";
  boxDiv.style.left = box.PositionX + "px";
  container.appendChild(boxDiv);
}

//function to generate random position
function getRandomPosition(container, box) {
  return Math.floor((Math.random() * (container - box)) / speed) * speed;
}

function generateBoxes(container) {
  const boxes = [];
  const direction = [1, -1];
  for (let i = 0; i < numOfBoxes; i++) {
    let initialPositionX = getRandomPosition(containerWidth, boxWidth);
    let initialPositionY = getRandomPosition(containerHeight, boxHeight);
    let directionX = direction[Math.floor(Math.random() * 2)];
    let directionY = direction[Math.floor(Math.random() * 2)];
    while (
      boxes.some(
        (box) =>
          Math.abs(box.initialPositionX - initialPositionX) <= boxWidth &&
          Math.abs(box.initialPositionY - initialPositionY) <= boxHeight
      )
    ) {
      initialPositionX = getRandomPosition(containerWidth, boxWidth);
      initialPositionY = getRandomPosition(containerHeight, boxHeight);
    }

    boxes.push({
      boxId: i + 1,
      directionX: directionX,
      directionY: directionY,
      PositionX: initialPositionX,
      PositionY: initialPositionY,
    });
  }
  boxes.forEach((box) => {
    createBox(container, box);
  });
  return boxes;
}

//function to update box positions when the animation is started
function updatePosition(box) {
  let boxElement = document.querySelector(`#box-${box.boxId}`);
  box.PositionX += speed * box.directionX;
  box.PositionY += speed * box.directionY;
  boxElement.style.top = box.PositionY + "px";
  boxElement.style.left = box.PositionX + "px";
}

//function to check collision
function checkCollision(box, boxes) {
  for (let i = 0; i < boxes.length; i++) {
    if (box.boxId !== boxes[i].boxId) {
      // const top1 = parseInt(
      //   getComputedStyle(document.getElementById(`box-${box.boxId}`)).top
      // );
      // const left1 = parseInt(
      //   getComputedStyle(document.getElementById(`box-${box.boxId}`)).left
      // );
      // const right1 = parseInt(
      //   getComputedStyle(document.getElementById(`box-${box.boxId}`)).right
      // );
      // const bottom1 = parseInt(
      //   getComputedStyle(document.getElementById(`box-${box.boxId}`)).bottom
      // );

      // console.log(top1, left1, right1, bottom1);
      if (
        Math.abs(box.PositionX - boxes[i].PositionX) <= boxWidth &&
        Math.abs(box.PositionY - boxes[i].PositionY) <= boxHeight
      ) {
        box.directionX = -box.directionX;
        box.directionY = -box.directionY;
        boxes[i].directionX = -boxes[i].directionX;
        boxes[i].directionY = -boxes[i].directionY;
      }
    } else {
      continue;
    }
  }
}
//function that starts animation
function startAnimation(boxes) {
  setInterval(function () {
    for (let i = 0; i < boxes.length; i++) {
      const box = boxes[i];
      //check if the box touches the container end horizontally
      if (box.PositionX + boxWidth >= containerWidth) {
        box.directionX = -1;
      } else if (box.PositionX <= 0) {
        box.directionX = 1;
      }
      //check if the box touches the container end vertically
      if (box.PositionY + boxHeight >= containerHeight) {
        box.directionY = -1;
      } else if (box.PositionY <= 0) {
        box.directionY = 1;
      }
      //check collision
      checkCollision(box, boxes);
      //update  box positions
      updatePosition(box);
    }
  }, 50);
}

main();
