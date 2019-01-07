import { Player } from './player';
import { Enemy } from './enemy';
import { Engine } from './engine';
export class Game {
  constructor(level, character) {
    this.enemies = [];
    this.level = level;
    this.player = new Player(202.5, 383, character);
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
  }
  startGame() {
    this.renderGems();
    this.engine.init();
  }
  renderGems() {
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
  handleWin() {
    this.enemies.forEach(enemy => {
      enemy.speed += 2;
    });
    this.wins++;
    this.updateStats();
    this.renderGems();
    this.showWinPopup();
    this.showWinTile = true;
    this.player.numberOfMoves = 0;
    this.fails = 0;
  }
  handleFail() {
    this.showWinTile = false;
    this.fails++;
    this.updateStats();
  }
  updateStats() {
    this.displayElements.gemNumber.innerHTML = this.collectedGems;
    this.displayElements.winNumber.innerHTML = this.wins;
    this.displayElements.failNumber.innerHTML = this.fails;
  }
  showWinPopup() {
    const numMovesEl = document.getElementById('number-of-moves');
    const failTotEl = document.getElementById('fail-total');
    const winEl = document.getElementById('win-popup');
    numMovesEl.innerHTML = this.player.numberOfMoves;
    failTotEl.innerHTML = this.fails;
    winEl.style.display = 'block';
    setTimeout(() => {
      winEl.style.display = 'none';
    }, 3000);
  }
}
