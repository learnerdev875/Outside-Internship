class InputHandler {
  constructor() {
    document.addEventListener("keydown", (e) => {
      switch (e.key) {
        case " ":
          if (gameState === "menu") {
            gameState = "running";
          } else if (gameState === "running") {
            console.log("Space clicked");
            accelerate(-0.1);
          } else if (gameState === "gameover") {
            window.reload();
          }
          break;
      }
    });

    document.addEventListener("keyup", (e) => {
      switch (e.key) {
        case " ":
          accelerate(0.05);
          break;
      }
    });
  }
}
