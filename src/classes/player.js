import { GameEntity } from './gameEntitiy';

/**
 * @description The class for the methods of the Player
 * @export
 * @class Player
 */
export class Player extends GameEntity {
  /**
   * @description Creates an instance of Player.
   * @extends GameEntity
   * @param {string} sprite
   * @memberof Player
   */
  constructor(sprite) {
    super(202.5, 383, sprite);
    this.sprite = sprite;
    this.speed = 50.5;
    this.numberOfMoves = 0;
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
      if (this.x < window.canvasWidth - 101) {
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
}
