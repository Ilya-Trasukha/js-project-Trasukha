let game = {
  canvas: null,
  ctx: null,
  blocks: null,
  ball: null,
  paddle: null,
  width: 0,
  height: 0,
  score: 0,
  lives: 3,
  dimensions: {
    max: {
      width: 640,
      height: 400
    },
    min: {
      width: 640,
      height: 400
    }
  },
  sprites: {
    background: null,
    ball: null,
    paddle: null,
    blockBlue: null,
    blockYellow: null,
    blockGrey: null,
    blockPurple: null,
    blockRed: null
  },
  sounds: {
    ballLost: null,
    breakout: null,
    brick: null,
    gameOver: null,
    levelComp: null,
    music: null,
    paddle: null
  },
  start() {
    this.init();
    this.preload(() => {
      this.run();
    });
  },
  init() {
    this.canvas = document.getElementById('breakout');
    this.ctx = this.canvas.getContext('2d');
    this.initDimensions();
    this.setEvents();
    this.setTextFont();
  },
  setTextFont() {
    this.ctx.font = '20px AgitProp';
    this.ctx.fillStyle = '#f8f8f8';
  },
  setEvents() {

  },
  initDimensions() {
    let data = {
      maxWidth: this.dimensions.max.width,
      maxHeight: this.dimensions.max.height,
      minWidth: this.dimensions.min.width,
      minHeight: this.dimensions.min.height,
      realWidth: window.innerWidth,
      realHeight: window.innerHeight
    };
    if (data.realWidth / data.realHeight > data.maxWidth / data.maxHeight) {
      this.fitWidth(data);
    } else {
      this.fitHeight(data);
    }
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  },
  fitWidth(data) {
    this.height = Math.round(this.width * data.realHeight / data.realWidth);
    this.height = Math.min(this.height, data.maxHeight);
    this.height = Math.max(this.height, data.minHeight);
    this.width = Math.round(data.realWidth * this.height / data.realHeight);
    this.canvas.style.width = '100%';
  },
  fitHeight(data) {
    this.width = Math.round(data.realWidth * data.maxHeight / data.realHeight);
    this.width = Math.min(this.width, data.maxWidth);
    this.width = Math.max(this.width, data.minWidth);
    this.height = Math.round(this.width * data.realHeight / data.realWidth);
    this.canvas.style.height = '100%';
  },
  preload(callback) {
    let loaded = 0;
    let required = Object.keys(this.sprites).length;
    // required += Object.keys(this.sounds).length;
    let onAssetLoad = () => {
      ++loaded;
      console.log(loaded);
      if (loaded >= required) {
        callback();
      }
    };
    this.preloadSprites(onAssetLoad);
    this.preloadAudio(onAssetLoad);
  },
  preloadSprites(onAssetLoad) {
    for (let key in this.sprites) {
      this.sprites[key] = new Image();
      this.sprites[key].src = 'img/' + key + '.png';
      this.sprites[key].addEventListener('load', onAssetLoad);
    }
  },
  preloadAudio(onAssetLoad) {
    for (let key in this.sounds) {
      this.sounds[key] = new Audio('sounds/' + key + '.mp3');
      this.sounds[key].addEventListener('play', onAssetLoad, {once:true});
    }
  },
  run() {
    console.log('запуск игры');
    this.create();
    this.gameInterval = setInterval(() => {
      this.update();
    }, 150);
  },
  create() {
    this.blocks.create();
    this.ball.setBallPosition();
    this.paddle.setPaddlePosition();
  },
  random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  addScore() {

  },
  endGame() {

  },
  update() {
    this.render();
  },
  render() {
    window.requestAnimationFrame(() => {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.ctx.drawImage(this.sprites.background, (this.width - this.sprites.background.width) / 2, (this.height - this.sprites.background.height) / 2);
      this.blocks.render();
      this.ball.render();
      this.paddle.render();
      this.ctx.fillText(`SCORE: ${this.score}`, (this.width - this.sprites.background.width) / 2 + 20, (this.height - this.sprites.background.height) /2 + 16);
      this.ctx.fillText(`LIVES: ${this.lives}`,(this.width - this.sprites.background.width) / 2 + this.sprites.background.width - 98, (this.height - this.sprites.background.height) /2 + 16)
    }); 
  }
}

window.addEventListener('load', () => {
  game.start();
});

