/**
 * @description The class for the methods of the Player
 * @export
 * @class Player
 */
export class Player {
  /**
   * @description Creates an instance of Player.
   * @param {number} x
   * @param {number} y
   * @param {string} sprite
   * @memberof Player
   */
  constructor(x, y, sprite) {
    this.sprite = sprite;
    this.x = x;
    this.y = y;
    this.speed = 50.5;
    this.numberOfMoves = 0;
    console.log(this);
  }
  /**
   * @description Deal with the input from the user.
   * @param {string} input
   * @memberof Player
   */
  handleInput(input) {
    this.numberOfMoves++;
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
  /**
   * TODO: This does nothing, but one day it might
   * @param {number} dt
   * @memberof Player
   */
  update(dt) {}
  /**
   * @description Render the image onto the canvas
   * @memberof Player
   */
  render() {
    window.ctx.drawImage(window.resources.get(this.sprite), this.x, this.y);
  }
}
