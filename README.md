# Classic Arcade Game Clone Project

## Contents Contents

- [Classic Arcade Game Clone Project](#classic-arcade-game-clone-project)
  - [Contents Contents](#contents-contents)
  - [Installation](#installation)
  - [How to Run](#how-to-run)
  - [How to Build](#how-to-build)
  - [How to Play](#how-to-play)
  - [Why Webpack?](#why-webpack)

## Installation

Firstly, clone this project (`git clone`). Change directory into the folder (`cd`), then you will need to install the dependencies by running `npm install`.

## How to Run

To run the game, simply open the index.html file in a browser. It can currently be run without the use of a local server because the index.html file looks at the dist/index.js file to run.

## How to Build

This game is 'bundled' using webpack (more on why I have used webpack later). Therefore, the code must be built (or compiled) before it can be run by a browser. To do this, simply open the console, navigate to the folder and enter:

```bash
npm run build
```

Webpack will then watch the source files and rebuild each time they are saved. The bundled output is in the 'dist' folder (dist/index.js).

## How to Play

Select you level and player using the on-screen dialog. The harder the level, the more bugs there are and the faster they move. Use the arrow keys to move the character around the screen and try to reach the river. If you touch a bug, you will move back to your starting position. Try to collect the gems along the way.

## Why Webpack?

I have chosen to use Webpack to bundle my code into one JavaScript file. This, I feel, helps the keep the project organised and reduces the amount of `<script>` tags which are needed in the HTML file (i.e. I only need one). It also enables the use of ES7 JavaScript Modules, support for which is limited on browsers. For example, I can use the below code example to import and export classes from file to file.

```javascript
import { x } from './y.js';

export class Foo {
  constructor(x) {
    this.x = new x();
  }
}
```

Webpack also enables the import of CSS resources into the .js files (see `src/main.js`).

For more information about Webpack, please see [here](https://webpack.js.org/).
