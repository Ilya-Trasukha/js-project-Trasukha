class GameRenderer {
  render() {
    return `
      <div class="top">
        <div class="home-button">
          <div class="button-home" id="button-home"><a href="#"></a></div>
        </div>
      </div>
      <div class="scores">
        <h2>HIGH SCORES</h2>
        <ol id="highScores"></ol>
      </div>
        <button id="run-button" onclick="play()">START</button>
        <canvas id="breakout" width="800" height="600" style="cursor: none"></canvas>
    `;
  }
}
