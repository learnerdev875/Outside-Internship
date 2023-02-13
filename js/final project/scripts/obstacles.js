//class for vehicles,logs and turtles
export class Obstacles {
  constructor(
    x,
    y,
    width,
    height,
    speed,
    type,
    gameSpeed,
    gameWidth,
    tutrleImg,
    logImg,
    carsImg,
    frame
  ) {
    this.position = {
      x: x,
      y: y,
    };
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.type = type;
    this.gameSpeed = gameSpeed;
    this.gameWidth = gameWidth;
    this.tutrleImg = tutrleImg;
    this.logImg = logImg;
    this.carsImg = carsImg;
    this.frame = frame;
    this.frameX = 0;
    this.frameY = 3;
    this.random = Math.floor(Math.random() * 30 + 30);
    this.grid = 80;
    this.numOfCars = 3;
    this.carType = Math.floor(Math.random() * this.numOfCars);
  }
  draw(ctx) {
    if (this.type === "turtle") {
      // if (this.frame % this.random === 0) {
      //   if (this.frameX >= 1) {
      //     this.frameX = 0;
      //   } else {
      //     this.frameX++;
      //   }
      // }
      ctx.drawImage(
        this.tutrleImg,
        this.frameX * 70,
        this.frameY * 70,
        70,
        70,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
    }
    if (this.type === "log") {
      ctx.drawImage(
        this.logImg,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
    }
    if (this.type === "car") {
      ctx.drawImage(
        this.carsImg,
        this.frameX * 160,
        this.carType * this.grid,
        this.grid * 2,
        this.grid,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
    }
  }

  update() {
    this.position.x += this.speed * this.gameSpeed;
    if (this.speed > 0) {
      if (this.position.x > this.gameWidth + this.width) {
        this.position.x = -this.width;
        this.carType = Math.floor(Math.random() * this.numOfCars);
      }
    } else {
      this.frameX = 1;
      if (this.position.x < 0 - this.width) {
        this.position.x = this.gameWidth + this.width;
        this.carType = Math.floor(Math.random() * this.numOfCars);
      }
    }
  }
}
