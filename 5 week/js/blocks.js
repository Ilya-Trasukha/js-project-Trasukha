game.blocks = {
  game: game,
  blocks: [],
  blocksLine: [],
  rows: 5,
  cols: 8,
  create() {
    this.createBlocks();
    this.createBlocksLine();
  },
  createBlocks() {
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        this.blocks.push(this.createBlock(row, col));
      }
    }
  },
  createBlock(row, col) {
    let blockWidth = this.game.sprites.blockBlue.width + 2;
    let blockHeight = this.game.sprites.blockBlue.height + 2;
    let offsetX = (this.game.width - blockWidth * this.cols) / 2;
    let offsetY = (this.game.height - blockHeight * this.rows * 4) / 2;
    return {
      active: true,
      width: 60,
      height: 20,
      x: offsetX + blockWidth * col,
      y: offsetY + blockHeight * row,
    }
  },
  createBlocksLine() {
    for (let line = 0; line < this.blocks.length / this.cols; line++) {
      this.blocksLine[line] = this.blocks.slice(line * this.cols, (line * this.cols) + this.cols);
    }
  },
  render() {
    for (let block of this.blocksLine[0]) {
      if(block.active) {
        this.game.ctx.drawImage(this.game.sprites.blockBlue, block.x, block.y);
      }
    }
    for (let block of this.blocksLine[1]) {
      if(block.active) {
        this.game.ctx.drawImage(this.game.sprites.blockYellow, block.x, block.y);
      }
    }
    for (let block of this.blocksLine[2]) {
      if(block.active) {
        this.game.ctx.drawImage(this.game.sprites.blockGrey, block.x, block.y);
      }
    }
    for (let block of this.blocksLine[3]) {
      if(block.active) {
        this.game.ctx.drawImage(this.game.sprites.blockPurple, block.x, block.y);
      }
    }
    for (let block of this.blocksLine[4]) {
      if(block.active) {
        this.game.ctx.drawImage(this.game.sprites.blockRed, block.x, block.y);
      }
    }
  }
}


