game.ball = {
  game: game,
  height: 20,
  radius: 10,
  resetBall () {
    this.x = this.game.width / 2;
    this.y = this.game.height - this.height - 2 * this.radius;
    this.dx = this.game.speed * (Math.random() * 2 - 1);
    this.dy = -this.game.speed;
  },
  render() {
    this.game.ctx.drawImage(this.game.sprites.ball, this.x, this.y, 2 * this.radius);
  }
};