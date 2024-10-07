document.querySelectorAll(".play-button").forEach((button, index) => {
  button.addEventListener("click", () => {
    const audio = document.querySelector(`#audio${index + 1}`);

    if (audio.paused) {
      document.querySelectorAll("audio").forEach((aud) => aud.pause());

      audio.play();
      button.textContent = "Pause";
    } else {
      audio.pause();
      button.textContent = "Play";
    }

    document.querySelectorAll(".play-button").forEach((btn, btnIndex) => {
      if (btnIndex !== index) {
        btn.textContent = "Play";
      }
    });
  });
});
