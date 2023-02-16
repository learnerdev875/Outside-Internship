window.addEventListener("load", function () {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 500;
  canvas.height = 500;
  let left = 0;
  const amountOfPixelsToAnimate = 300;

  class Mandrake {
    constructor(canvasWidth, canvasHeight) {
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.image = document.querySelector("#mandrake");
      this.spriteWidth = 256;
      this.spriteHeight = 256;
      this.scale = 0.5;
      this.width = this.spriteWidth * this.scale;
      this.height = this.spriteHeight * this.scale;
      this.x = this.canvasWidth / 2 - this.width / 2;
      this.y = this.canvasHeight / 2 - this.height / 2;
      //center image in the middle of canvas even when we scale image up and down
      this.minFrame = 0;
      this.maxFrame = 355;
      this.frame = 0;
      //horizontal navigation in sprite sheet
      this.frameX = 0;
      //vertical navigation
      this.frameY = 1;
    }
    draw() {
      //image,source x, source y, source width, source height, destination x, destination y, destination width, destination height
      //instead of manually cropping the image we can make it dynamic by multiplying the spritewidth and height by a number
      ctx.drawImage(
        this.image,
        this.frameX * this.spriteWidth,
        this.frameY * this.spriteHeight,
        this.spriteWidth,
        this.spriteHeight,
        this.x,
        this.y,
        this.width,
        this.height
      );
    }
    update() {
      // if (this.frameX < 17) this.frameX++;
      // else this.frameX = 0;
      if (this.frame < this.maxFrame) this.frame++;
      else this.frame = 0;

      this.frameX = this.frame % 18;
      this.frameY = Math.floor(this.frame / 18);
    }
  }

  //calling class instance
  const mandrake = new Mandrake(canvas.width, canvas.height);

  function animate() {
    left += 5;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    mandrake.draw();
    mandrake.update();
    if (left > amountOfPixelsToAnimate) {
      left = 0;
    }
    requestAnimationFrame(animate);
  }

  animate();
});
