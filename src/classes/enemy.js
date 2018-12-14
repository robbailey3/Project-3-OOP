export class Enemy {
  constructor(speed) {
    this.x = Math.floor(Math.random() * 500);
    this.y = Math.random() * 184 + 50;
    this.speed = speed * 50;
    this.sprite = 'images/enemy-bug.png';
  }
  update(dt) {
    this.x += this.speed * dt;
    if (this.x > window.ctx.canvas.width) {
      this.x = -Math.floor(Math.random() * (100 - 200) + 200);
      this.y = Math.random() * 184 + 50;
      this.speed++;
    }
  }
  render() {
    window.ctx.drawImage(window.resources.get(this.sprite), this.x, this.y);
  }
}
