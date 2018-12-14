export class Player {
  constructor(x, y, sprite) {
    this.sprite = sprite;
    this.x = x;
    this.y = y;
    this.speed = 50.5;
    console.log(this);
  }
  handleInput(input) {
    if (input == 'left') {
      if (this.x - this.speed > 0) {
        this.x -= this.speed;
      }
    }
    if (input == 'up') {
      if (this.y - this.speed > 0) {
        this.y -= this.speed - 20;
      }
    }
    if (input == 'right') {
      if (this.x < window.ctx.canvas.width - 101) {
        this.x += this.speed;
      }
    }
    if (input == 'down') {
      if (this.y < 383) {
        this.y += this.speed - 20;
      }
    }
  }
  update(dt) {}
  render() {
    window.ctx.drawImage(window.resources.get(this.sprite), this.x, this.y);
  }
}
