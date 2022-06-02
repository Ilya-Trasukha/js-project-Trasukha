class MenuRenderer {
  render() {
    return `
      <div class="content">        
        <h1>Breakout <br> game</h1>     
          <nav class="main">
            <input type="button" value="Play" class="main_button_play" id="play">
            <input type="button" value="Rules" class="main_button" id="rules">
            <input type="button" value="Controls" class="main_button" id="controls">
            <input type="button" value="About" class="main_button" id="about">
          </nav>
      </div>
    `;
  }
}
