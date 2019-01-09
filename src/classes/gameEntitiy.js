/**
 *
 * @export
 * @class GameEntity - The parent class for Player, Enemy & Gems
 */
export class GameEntity {
  /**
   * @description Creates an instance of GameEntity.
   * @param {number} x
   * @param {number} y
   * @param {string} sprite
   */
  constructor(x, y, sprite) {
    this.x = x;
    this.y = y;
    this.sprite = sprite;
    this.collisionThreshold = 50;
  }
  /**
   *
   * @description renders the sprite onto the canvas
   */
  render() {
    window.ctx.drawImage(window.resources.get(this.sprite), this.x, this.y);
  }
  /**
   * @description detects a collision between the player & entity
   * @param {number} playerX
   * @param {number} playerY
   * @returns boolean
   */
  detectCollision(playerX, playerY) {
    // * Note: This currently treats the game objects as rectangles. In future, it may be beneficial to treat them as circles.
    return (
      Math.abs(this.x - playerX) < this.collisionThreshold &&
      Math.abs(this.y - playerY) < this.collisionThreshold
    );
  }
}
