const audio = document.getElementById("myAudio");
const pauseBtn = document.getElementById("pauseBtn");
const playBtn = document.getElementById("playBtn");

audio.volume = 0.15;

pauseBtn.addEventListener("click", function () {
  audio.pause();
});

playBtn.addEventListener("click", function () {
  audio.play();
});
