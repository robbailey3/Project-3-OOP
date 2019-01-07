import { Game } from './classes/game';
import { Resources } from './classes/resources';
import './css/style.css'; // Importing CSS into JS so WebPack can deal with it.
class Main {
  constructor() {
    this.resourcesLoaded = false;
    this.config = {
      levels: {
        easy: {
          speed: 1,
          enemies: 3
        },
        medium: {
          speed: 2,
          enemies: 5
        },
        hard: {
          speed: 3,
          enemies: 7
        }
      }
    };
  }
  toggleModal(modalSelector) {
    document.querySelector('#modal-backdrop').classList.toggle('active');
    document.querySelector(modalSelector).classList.toggle('active');
    return this; // Returning {this} enables function chaining.
  }
  startNewGame(level, character) {
    this.loadResources()
      .then(() => {
        this.game = new Game(this.config.levels[level], character);
        console.log(this.game);
        this.gameRunning = true;
        this.showStats();
      })
      .catch(e => {
        console.log(e);
      });
  }
  newGame() {
    this.toggleModal('#new-game-modal');
  }
  handleInput(input) {
    this.game.player.handleInput(input);
  }
  showStats() {
    document.getElementById('game-stats').style.display = 'block';
  }
  loadResources() {
    return new Promise((resolve, reject) => {
      try {
        console.log(this.resourcesLoaded);
        if (this.resourcesLoaded === true) {
          resolve(true);
        }
        window.resources.load([
          'images/stone-block.png',
          'images/water-block.png',
          'images/grass-block.png',
          'images/enemy-bug.png',
          'images/char-boy.png',
          'images/char-horn-girl.png',
          'images/char-cat-girl.png',
          'images/char-pink-girl.png',
          'images/char-princess-girl.png',
          'images/Gem Blue.png',
          'images/Gem Green.png',
          'images/Gem Orange.png',
          'images/Selector.png'
        ]);
        window.resources.onReady(() => {
          this.resourcesLoaded = true;
          resolve(true);
        });
      } catch ($e) {
        reject($e);
      }
    });
  }
}
const main = new Main();
window.resources = new Resources();

const startBtn = document.querySelector('#start-game-btn');
startBtn.addEventListener('click', () => {
  console.log('CLICKED');
  main.toggleModal('#new-game-modal');
  main.startNewGame(
    document.querySelector('input[name="start-diff"]:checked').value,
    document.querySelector('input[name="start-char"]:checked').value
  );
});
const newGameBtn = document.getElementById('new-game');
newGameBtn.addEventListener('click', () => {
  main.gameRunning = false;
  main.newGame();
});
document.addEventListener('keyup', e => {
  let allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };
  if (main.gameRunning) {
    main.handleInput(allowedKeys[e.keyCode]);
  }
});
