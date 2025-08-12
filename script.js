const section = document.querySelector(".btn_container");
const circle = document.querySelector(".circle");
const modal = document.getElementById("modal");

const toggle = document.getElementById("toggle");
const body = document.querySelector("body");

toggle.onclick = function () {
  toggle.classList.toggle("active");
  body.classList.toggle("active");
};

window.addEventListener("click", (event) => {
  if (event.target === modal || !event.target.closest(".play-button")) {
    modal.style.display = "none";
    pauseAllAudio();
  }
});

function pauseAllAudio() {
  // Pausar todos los elementos de audio
  document.querySelectorAll("audio").forEach((audio) => {
    if (!audio.paused) {
      audio.pause();
      audio.currentTime = 0; // Reinicia el audio al inicio (opcional)
    }
  });

  // Restablecer todos los botones
  document.querySelectorAll(".play-button").forEach((btn) => {
    const playBtn = btn.querySelector(".playbtn");
    btn.style.backgroundColor = "#00b4cc";
    playBtn.innerHTML = "Play";
  });

  // Ocultar el círculo de animación
  circle.style.display = "none";
}

function toggleAudio(button, audio) {
  const playBtn = button.querySelector(".playbtn");

  if (audio.paused) {
    pauseAllAudio();
    audio.play();
    button.style.backgroundColor = "#005f6b";

    circle.style.animation = "none";
    circle.offsetHeight;
    circle.style.animation = null;
    circle.style.display = "flex";
    playBtn.innerHTML = "Pause";
  } else {
    audio.pause();
    button.style.backgroundColor = "#00b4cc";
    circle.style.display = "none";
    playBtn.innerHTML = "Play";
  }
}

document.querySelectorAll(".play-button").forEach((button, index) => {
  button.addEventListener("click", () => {
    const audio = document.querySelector(`#audio${index + 1}`);
    toggleAudio(button, audio);
  });
});
