import { Game } from './classes/game';
import { Resources } from './classes/resources';
import './css/style.css'; // Importing CSS into JS so WebPack can deal with it.
class Main {
  constructor() {
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
    this.game = new Game(this.config.levels[level], character);
  }
  init(level, character) {
    console.log(this);
    this.startNewGame(level, character);
  }
  handleInput(input) {
    this.game.player.handleInput(input);
  }
}
const main = new Main();
window.resources = new Resources();

const startBtn = document.querySelector('#start-game-btn');
startBtn.addEventListener('click', () => {
  main.toggleModal('#new-game-modal');
  resources.load([
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
    'images/Rock.png',
    'images/Star.png',
    'images/Selector.png'
  ]);
  resources.onReady(() => {
    main.init(
      document.querySelector('input[name="start-diff"]:checked').value,
      document.querySelector('input[name="start-char"]:checked').value
    );
  });
});
document.addEventListener('keyup', e => {
  let allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  main.handleInput(allowedKeys[e.keyCode]);
});
