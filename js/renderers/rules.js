class RulesRenderer {
  render() {
    return `
      <section class="rules">
        <h2>Rules:</h2>
          <div class="rules_cont">
            <p>In Breakout, a layer of bricks lines the top third of the screen and the goal is <br> to destroy them all by repeatedly bouncing a ball off a paddle into them.</p>
            <p>If the player's paddle misses the ball's rebound, they will lose a turn.<br>
            The player has three turns to try to clear  screen of bricks</p>  
          </div>      
      </section>
    `;
  }
}
