import { GameEntity } from './gameEntitiy';

/**
 *
 *
 * @export
 * @description The class for the bugs
 * @class Enemy
 * @extends {GameEntity}
 */
export class Enemy extends GameEntity {
  /**
   * @description Creates an instance of Enemy.
   * @param {number} speed
   * @memberof Enemy
   */
  constructor(speed) {
    super(
      Math.floor(Math.random() * 500),
      Math.random() * 184 + 50,
      'images/enemy-bug.png'
    );
    this.speed = speed * (Math.ceil(Math.random() * 100) + 5);
    this.collisionThreshold = 75;
  }
  /**
   * @description Updates position of the bug
   * @param {number} dt
   * @memberof Enemy
   */
  update(dt) {
    this.x += this.speed * dt;
    if (this.x > window.canvasWidth) {
      this.x = -Math.floor(Math.random() * (100 - 200) + 200);
      this.y = Math.floor(Math.random() * 184) + 50;
      this.speed += 2; // The speed of the bugs increases after each pass across the screen.
    }
  }
}
