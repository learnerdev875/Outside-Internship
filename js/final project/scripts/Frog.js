export class Frog {
  constructor(gameWidth, gameHeight, keys, scored, grid, img) {
    //sprite image
    this.spriteWidth = 250; // our sprite image is 2 column and 500px wide
    this.spriteHeight = 250; // our sprite image is 4 row and of 1000px height
    this.width = this.spriteWidth / 5;
    this.height = this.spriteHeight / 5;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.grid = grid;
    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - this.grid,
    };
    //so that the frog wont move continously when the key is pressed
    this.moving = false;
    //for sprite images
    this.frameX = 0;
    this.frameY = 0;
    this.frame = 0;
    this.keys = keys;
    this.scored = scored;
    this.img = img;
  }
  update() {
    if (this.keys["ArrowLeft"] && this.moving === false) {
      this.position.x -= this.grid;
      this.moving = true;
      this.frameY = 2;
      //ensuring it cannot go out of canvas in left
      if (this.position.x < 0) {
        this.position.x = 0;
      }
    }
    if (this.keys["ArrowRight"] && this.moving === false) {
      this.position.x += this.grid;
      this.moving = true;
      this.frameY = 1;
      //ensuring it cannot go out of canvas in right
      if (this.position.x > this.gameWidth - 50) {
        this.position.x = this.gameWidth - 50;
      }
    }
    if (this.keys["ArrowUp"] && !this.moving) {
      this.position.y -= this.grid;
      this.moving = true;
      this.frameX = 1;
      this.frameY = 0;
    }
    if (this.keys["ArrowDown"] && !this.moving) {
      this.position.y += this.grid;
      this.moving = true;
      this.frameY = 3;
      //ensuring it cannot move out of frame from bottom
      if (this.position.y > this.gameHeight - 50) {
        this.position.y = this.gameHeight - 50;
      }
    }
    if (this.position.y < 50) {
      this.scored();
    }
  }

  draw(ctx) {
    ctx.drawImage(
      this.img,
      this.frameX * this.spriteWidth,
      this.frameY * this.spriteHeight,
      this.spriteWidth,
      this.spriteHeight,
      this.position.x - 25,
      this.position.y - 25,
      this.width * 2,
      this.height * 2
    );
  }
  //animate the sprite sheet
  jump() {
    if (this.moving === false) this.frameX = 1;
  }
}
