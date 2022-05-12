let game = {
  canvas: null,
  ctx: null,
  board: null,
  width: 0,
  height: 0,
  score: 0,
  speed: 7,
  level: 1,
  lives: 3,
  time: { start: performance.now(), elapsed: 0, refreshRate: 16}, 
  dimensions: {
    max: {
      width: 640,
      height: 360
    },
    min: {
      width: 300,
      height: 300
    }
  },
  sprites: {
    background: null,
    ball: null,
    paddle: null,
    block: null
  },
  start() {
    this.init();
    this.preload(() =>{
      this.run();
    });
  },
  init() {
    this.canvas = document.getElementById('breakout');
    this.ctx = this.canvas.getContext('2d');
    this.initDimensions();
    this.setTextFont();
  },
  setTextFont() {
    this.ctx.font = '20px AgitProp';
    this.ctx.fillStyle = '#f8f8f8';
  },
  preload(callback) {
    let loaded = 0;
    let required = Object.keys(this.sprites).length;
    let onAssetLoad = () => {
      ++loaded;
      console.log(loaded);
      if (loaded >= required) {
        callback();
      }
    };
    this.preloadSprites(onAssetLoad);
  },
  preloadSprites(onAssetLoad) {
    for (let key in this.sprites) {
      this.sprites[key] = new Image();
      this.sprites[key].src = 'img/' + key + '.png';
      this.sprites[key].addEventListener('load', onAssetLoad);
    }
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
  run() {
    console.log('запуск игры');
    this.create();
    this.gameInterval = setInterval(() => {
      this.update();
    }, 150); 
  },
  create() {
    // this.ball.resetBall();
  },
  update() {
    this.render();
  },
  render() {
    window.requestAnimationFrame(() => {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.ctx.drawImage(this.sprites.background, 0, 0);
      // this.ball.render();
      this.ctx.fillText('Score: ' + this.score, 30, 30)
    });
  },
  stop() {
    clearInterval(this.gameInterval);
  },
};

window.addEventListener('load', () => {
  game.start();
});
