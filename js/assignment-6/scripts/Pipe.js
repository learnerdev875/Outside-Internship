class Pipe {
  constructor(width, height, img, x, y) {
    this.width = width;
    this.height = height;
    this.image = img;
    this.position = {
      x: x,
      y: y,
    };
    this.isPipeCrossed = false;
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
  update(deltaTime, bird) {
    this.position.x -= deltaTime;
    if (bird.position.x > this.position.x && !this.isPipeCrossed) {
      score++;
      this.isPipeCrossed = true;
    }
    if (
      bird.position.x < this.position.x + this.width &&
      bird.position.x + bird.width > this.position.x &&
      bird.position.y < this.position.y + this.height &&
      bird.position.y + bird.height > this.position.y &&
      bird.position.y
    ) {
      gameState = "gameover";
    }
  }
}
