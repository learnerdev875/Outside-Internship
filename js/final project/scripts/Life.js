export class Life {
  constructor(x, y, img, width, height) {
    this.x = x;
    this.y = y;
    this.img = img;
    this.width = width;
    this.height = height;
  }
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}
