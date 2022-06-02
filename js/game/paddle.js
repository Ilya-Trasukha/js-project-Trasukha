let paddle = {
  height: 20,
  width: 100,
  get y() {
    return canvas.height - this.height;
  }
}
