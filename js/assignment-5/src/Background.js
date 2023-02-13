export default class Background {
  constructor(src, canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.image = new Image();
    this.image.src = src;
  }
  draw(ctx) {
    this.image.onload = function () {
      ctx.drawImage(this.image, 0, 0, canvasWidth, canvasHeight);
    };
  }
}
