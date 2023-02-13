class Bird {
  constructor(image, width, height, gameHeight, gameWidth) {
    this.image = image;
    this.width = width;
    this.height = height;
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
    this.position = {
      x: 30,
      y: 150,
    };
    this.gravity = 0.02;
    this.gravitySpeed = 0;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
  update() {
    //the speed increases with every new frame
    this.gravitySpeed += this.gravity;
    this.position.y = this.position.y + this.gravitySpeed;
    this.checkHitBottom();
  }
  checkHitBottom() {
    //the 50 is ground height
    let bottom = this.gameHeight - this.height - 50;

    if (this.position.y > bottom) {
      this.position.y = bottom;
      gameState = "gameover";
    }
  }
}
