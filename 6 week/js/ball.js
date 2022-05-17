game.ball = {
  game: game,
  radius: 10,
  dx: 0,
  dy: 0,
  speed: 4,
  ballPosition: [],
  setBallPosition() {
    let x = (this.game.width - this.radius) / 2;
    let y = (this.game.height - this.radius) / 2 +120;
    this.ballPosition.push ({
      x: x,
      y: y
    });
  },
  render() {
    this.game.ctx.drawImage(this.game.sprites.ball, this.ballPosition[0].x, this.ballPosition[0].y);
  },
}