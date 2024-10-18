const section = document.querySelector(".btn_container");
const circle = document.querySelector(".circle");

document.querySelectorAll(".play-button").forEach((button, index) => {
  button.addEventListener("click", () => {
    const audio = document.querySelector(`#audio${index + 1}`);
    const playBtn = button.querySelector(".playbtn");

    if (audio.paused) {
      document.querySelectorAll("audio").forEach((aud) => aud.pause());
      document.querySelectorAll(".play-button").forEach((btn) => {
        const otherPlayBtn = btn.querySelector(".playbtn");
        btn.setAttribute("style", "background-color: #00b4cc");
        otherPlayBtn.innerHTML = "Play";
      });

      audio.play();

      button.setAttribute("style", "background-color:#005f6b");

      section.classList.add("showAnimationLeft");
      circle.setAttribute("style", "display:flex");
      playBtn.innerHTML = "Pause";
      console.log(playBtn.innerHTML);
    } else {
      audio.pause();
      section.classList.remove("showAnimationLeft");
      circle.setAttribute("style", "display:none");
      playBtn.innerHTML = "Play";
      button.setAttribute("style", "background-color:#00b4cc");
      console.log(playBtn.innerHTML);
    }

    document.querySelectorAll(".play-button").forEach((btn, btnIndex) => {
      if (btnIndex != index) {
        btn.setAttribute("style", "background-color: #00b4cc");
      }
    });
  });
});
