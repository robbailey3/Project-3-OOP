/**
 * @description Class which contains all the methods to render/update the view
 * @export
 * @class Engine
 */
export class Engine {
  /**
   * @description Creates an instance of Engine.
   * @param {Player} player
   * @param {Enemy[]} enemies
   * @param {Game} game
   * @memberof Engine
   */
  constructor(player, enemies, game) {
    this.reset();
    this.createCanvas();
    this.player = player;
    this.enemies = enemies;
    this.game = game;
  }
  /**
   * @description Creates the canvas element
   * @memberof Engine
   */
  createCanvas() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    window.ctx = this.ctx;
    this.canvas.width = 505;
    window.canvasWidth = 505;
    this.canvas.height = 606;
    document.body.appendChild(this.canvas);
  }
  /**
   * @description runs repeatedly to do animation - call to update & render functions
   * @memberof Engine
   */
  main() {
    let now = Date.now(),
      dt = (now - this.lastTime) / 1000.0;
    this.update(dt);
    this.render();
    this.lastTime = now;
    window.requestAnimationFrame(() => {
      this.main();
    });
  }
  /**
   * @description intitialize things
   * @memberof Engine
   */
  init() {
    this.lastTime = Date.now();
    this.main();
  }
  /**
   * @description Update the position of things and call win/collision/gem handlers as appropriate
   * @param {number} dt
   * @memberof Engine
   */
  update(dt) {
    this.updateEntities(dt);
    if (this.player.y < 48) {
      this.game.handleWin();
      this.moveBackToStart();
    }
    this.detectCollisions();
    this.detectGems();
  }
  /**
   * @description Updates enemies and player positions
   * @param {*} dt
   * @memberof Engine
   */
  updateEntities(dt) {
    this.enemies.forEach(enemy => {
      enemy.update(dt);
    });
    this.player.update();
  }
  /**
   * @description renders the background images onto the canvas and calls the functions to render player, enemies & gems
   * @memberof Engine
   */
  render() {
    const rowImages = [
        'images/water-block.png', // Top row is water
        'images/stone-block.png', // Row 1 of 3 of stone
        'images/stone-block.png', // Row 2 of 3 of stone
        'images/stone-block.png', // Row 3 of 3 of stone
        'images/grass-block.png', // Row 1 of 2 of grass
        'images/grass-block.png' // Row 2 of 2 of grass
      ],
      numRows = 6,
      numCols = 5;
    let row, col;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (row = 0; row < numRows; row++) {
      for (col = 0; col < numCols; col++) {
        /*
         * The drawImage function of the canvas' context element
         * requires 3 parameters: the image to draw, the x coordinate
         * to start drawing and the y coordinate to start drawing.
         * We're using our Resources helpers to refer to our images
         * so that we get the benefits of caching these images, since
         * we're using them over and over.
         */
        this.ctx.drawImage(
          window.resources.get(rowImages[row]),
          col * 101,
          row * 83
        );
      }
    }
    if (this.game.showWinTile) {
      this.renderWinTile();
    }
    this.renderGems();
    this.renderEntities();
  }
  /**
   * @description Render the enemies & player
   * @memberof Engine
   */
  renderEntities() {
    this.enemies.forEach(enemy => {
      enemy.render();
    });
    this.player.render();
  }
  /**
   * @description Renders the gems onto the canvas.
   * @memberof Engine
   */
  renderGems() {
    this.gems.forEach(gem => {
      this.ctx.drawImage(window.resources.get(gem.sprite), gem.x, gem.y);
    });
  }
  /**
   * @description Renders the tile with a star on it as a happy bonus for reaching the river.
   * @memberof Engine
   */
  renderWinTile() {
    this.ctx.drawImage(window.resources.get('images/Selector.png'), 202.5, 383);
  }
  /**
   * @description See if the player has touched a bug (ewwww!)
   * @memberof Engine
   */
  detectCollisions() {
    this.enemies.forEach(enemy => {
      if (enemy.detectCollision(this.player.x, this.player.y)) {
        this.handleCollision();
      }
    });
  }
  /**
   * @description See if the player has collected a gem (wooohoooo!)
   * @memberof Engine
   */
  detectGems() {
    for (let i = 0; i < this.gems.length; i++) {
      if (this.gems[i].detectCollision(this.player.x, this.player.y)) {
        this.gems.splice(i, 1);
        this.game.collectedGems++;
        this.game.updateStats();
      }
    }
  }
  /**
   * @description Deal with a collision (call to handleFail & move the player back to the start)
   * @memberof Engine
   */
  handleCollision() {
    this.game.handleFail();
    this.moveBackToStart();
  }
  /**
   * @description Moves the player back to the initial position
   * @memberof Engine
   */
  moveBackToStart() {
    this.player.x = 202.5;
    this.player.y = 383;
  }
  /**
   * @description Removes any existing canvas elements from the DOM to avoid duplicates
   * @memberof Engine
   */
  reset() {
    let existingCanvas = Array.from(document.getElementsByTagName('canvas'));
    existingCanvas.forEach(el => el.parentNode.removeChild(el));
  }
  /**
   * @description passes gems from the Game object to this one so they can be rendered.
   * @param {object} gems
   * @memberof Engine
   */
  setGems(gems) {
    this.gems = gems;
  }
}
