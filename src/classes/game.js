import { Player } from './player';
import { Enemy } from './enemy';
import { Engine } from './engine';
import { Timer } from './timer';
/**
 * @description The main class for the Game methods
 * @export
 * @class Game
 */
export class Game {
  /**
   * @description Creates an instance of Game.
   * @param {*} level
   * @param {*} character
   * @memberof Game
   */
  constructor(level, character) {
    this.enemies = [];
    this.level = level;
    this.player = new Player(202.5, 383, character);
    this.timer = new Timer();
    for (let i = 0; i < this.level.enemies; i++) {
      this.enemies[i] = new Enemy(this.level.speed);
    }
    this.engine = new Engine(this.player, this.enemies, this);
    this.startGame();
    this.collectedGems = 0;
    this.wins = 0;
    this.fails = 0;
    this.displayElements = {
      gemNumber: document.getElementById('number-of-gems'),
      winNumber: document.getElementById('number-of-wins'),
      failNumber: document.getElementById('number-of-fails')
    };
    this.updateStats();
    this.showWinTile = false;
    this.disableMoves = false;
  }
  /**
   * @description Method to be called when the game starts
   * @memberof Game
   */
  startGame() {
    this.createGems();
    this.engine.init();
    this.timer.startTimer();
  }
  /**
   * @description creates an array of objects (gems)
   * @memberof Game
   */
  createGems() {
    const gemImages = [
      'images/Gem Blue.png',
      'images/Gem Green.png',
      'images/Gem Orange.png'
    ];
    const gems = [...new Array(2)].map(gem => {
      gem = {};
      gem.y = Math.floor(Math.random() * 2 + 1) * 120;
      gem.x = Math.floor(Math.random() * 5) * 101;
      gem.image = gemImages[Math.floor(Math.random() * gemImages.length)];
      return gem;
    });
    this.engine.setGems(gems);
    console.log(gems);
  }
  /**
   * @description deal with what happens when the player wins
   * @memberof Game
   */
  handleWin() {
    this.enemies.forEach(enemy => {
      enemy.speed += 2;
    });
    this.wins++;
    this.updateStats();
    this.createGems();
    this.timer.endTimer();
    this.timeTaken = this.timer.getTimeDifference();
    this.showWinPopup();
    this.showWinTile = true;
    this.player.numberOfMoves = 0;
    this.fails = 0;
  }
  /**
   * @description Deal with the player touching a bug
   * @memberof Game
   */
  handleFail() {
    this.showWinTile = false;
    this.fails++;
    this.updateStats();
  }
  /**
   * @description Update the DOM to display some stats
   * @memberof Game
   */
  updateStats() {
    this.displayElements.gemNumber.innerHTML = this.collectedGems;
    this.displayElements.winNumber.innerHTML = this.wins;
    this.displayElements.failNumber.innerHTML = this.fails;
  }
  /**
   * @description Display the popup for when the user wins (reaches the river)
   * @memberof Game
   */
  showWinPopup() {
    const numMovesEl = document.getElementById('number-of-moves');
    const failTotEl = document.getElementById('fail-total');
    const timeEl = document.getElementById('time-taken');
    const winEl = document.getElementById('win-popup');
    numMovesEl.innerHTML = this.player.numberOfMoves;
    failTotEl.innerHTML = this.fails;
    timeEl.innerHTML = this.timeTaken;
    winEl.style.display = 'block';
    this.disableMoves = true;
    setTimeout(() => {
      this.disableMoves = false;
      winEl.style.display = 'none';
      this.timer.startTimer();
    }, 3000);
  }
}
