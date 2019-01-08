/**
 *
 * * Enemy Class (the bugs)
 * @export
 * @class Enemy
 */
export class Enemy {
  /**
   * @description Creates an instance of Enemy.
   * @param {number} speed
   * @memberof Enemy
   */
  constructor(speed) {
    this.x = Math.floor(Math.random() * 500);
    this.y = Math.random() * 184 + 50;
    this.speed = speed * Math.floor(Math.random() * 100);
    this.sprite = 'images/enemy-bug.png';
  }
  /**
   * @description Updates position of the bug
   * @param {number} dt
   * @memberof Enemy
   */
  update(dt) {
    this.x += this.speed * dt;
    if (this.x > window.ctx.canvas.width) {
      this.x = -Math.floor(Math.random() * (100 - 200) + 200);
      this.y = Math.floor(Math.random() * 184) + 50;
      this.speed += 2; // The speed of the bugs increases after each pass across the screen.
    }
  }
  /**
   * @description Renders the bug on the canvas
   * @memberof Enemy
   */
  render() {
    window.ctx.drawImage(window.resources.get(this.sprite), this.x, this.y);
  }
}
