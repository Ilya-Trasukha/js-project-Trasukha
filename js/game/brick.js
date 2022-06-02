let brick = {
  rows: 5,
  cols: 10,
  get width() {
    return canvas.width / this.cols;
  },
  height: 30
}
