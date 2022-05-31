game.paddle = {
  game: game,
  ball: game.ball,
  height: 20,
  width: 100,
  speed: 7,
  dx: 0,
  paddlePosition: [],
  push() {
    if(this.ball) {
      this.ball.start();
      this.ball = null;
    }
  },
  setPaddlePosition() {
    let x = (this.game.width - this.width) / 2 + 10;
    let y = (this.game.height - this.height) / 2 + 140;
    this.paddlePosition.push ({
      x: x,
      y: y
    });
  },
  render() {
    this.game.ctx.drawImage(this.game.sprites.paddle, this.paddlePosition[0].x, this.paddlePosition[0].y);
  },
}