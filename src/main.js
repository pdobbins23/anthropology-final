"use strict";

let config = {
  parent: "game",
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    zoom: 1,
  },
  render: {
    pixelArt: true,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { x: 0, y: 0 },
    },
  },
  scene: [Game],
};

let game = new Phaser.Game(config);
