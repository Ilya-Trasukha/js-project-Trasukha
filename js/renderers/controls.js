class ControlsRenderer {
  render() {
    return `
      <section class="controls">
      <h2>How To Play:</h2>
        <div class="controls_cont">
          <p>Play with Arrow keys or Mouse</p>
          <p>Music mute: M</p>
          <p>Volume: ↑ ↓</p>
          <p>Start: Space</p>
          <input type="button" value="Play" class="button_play" id="play"> 
        </div>      
      </section>
    `;
  }
}
