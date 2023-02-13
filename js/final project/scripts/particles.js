//used for creating dust animation when the frog jumps over
export class Particle {
  constructor(x, y) {
    this.x = x + 20;
    this.y = y + 20;
    this.radius = Math.random() * 20 + 1;
    this.opacity = 1;
    this.directionX = Math.random() * 1 - 0.5;
    this.directionY = Math.random() * 1 - 0.5;
  }
  drawRipple(ctx) {
    ctx.strokeStyle = `rgba(255,255,255,${this.opacity})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.closePath();
  }
  ripple() {
    if (this.radius < 50) {
      this.radius += 0.5;
      this.x -= 0.03;
      this.y -= 0.03;
    }
    if (this.opacity > 0) {
      this.opacity -= 0.02;
    }
  }
}
