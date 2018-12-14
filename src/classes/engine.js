export class Engine {
  constructor(player, enemies, game) {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    window.ctx = this.ctx;
    this.canvas.width = 505;
    this.canvas.height = 606;
    document.body.appendChild(this.canvas);
    this.player = player;
    this.enemies = enemies;
    this.fails = 0;
  }
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
  init() {
    this.reset();
    this.lastTime = Date.now();
    this.main();
  }
  update(dt) {
    this.updateEntities(dt);
    if (this.player.y < 48) {
      this.handleWin();
    }
    this.detectCollisions();
  }
  updateEntities(dt) {
    this.enemies.forEach(enemy => {
      enemy.update(dt);
    });
    this.player.update();
  }
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
    this.renderEntities();
    this.renderGems();
  }
  detectCollisions() {
    this.enemies.forEach(enemy => {
      if (
        Math.abs(enemy.x - this.player.x) < 30 &&
        Math.abs(enemy.y - this.player.y) < 30
      ) {
        this.handleCollision();
      }
    });
  }
  handleCollision() {
    this.fails++;
    this.player.x = 202.5;
    this.player.y = 383;
  }
  handleWin() {
    this.updateDisplay('#result', `<p>Winner!!!!</p>`);
  }
  renderEntities() {
    this.enemies.forEach(enemy => {
      enemy.render();
    });
    this.player.render();
  }
  reset() {}
  updateDisplay(selector, HTML) {
    document.querySelector(selector).innerHTML = HTML;
  }
  renderGems() {}
}
