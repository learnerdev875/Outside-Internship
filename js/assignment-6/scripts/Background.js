class Background {
  constructor(canvasWidth, canvasHeight, img) {
    this.image = img;
    this.width = canvasWidth;
    this.height = canvasHeight;
    this.position = {
      x: 0,
      y: 0,
    };
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
}
