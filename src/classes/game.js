import { Player } from './player';
import { Enemy } from './enemy';
import { Engine } from './engine';
export class Game {
  constructor(level, character) {
    this.enemies = [];
    this.level = level;
    this.player = new Player(202.5, 383, character);
    this.engine = new Engine(this.player, this.enemies, this);
    for (let i = 0; i < this.level.enemies; i++) {
      this.enemies[i] = new Enemy(this.level.speed);
    }
    this.startGame();
  }
  startGame() {
    this.engine.init();
  }
  renderGems() {}
  handleWin() {
    this.engine.updateDisplay('#result', `<p>Winner!</p>`);
  }
}
