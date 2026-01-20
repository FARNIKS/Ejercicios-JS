const stopwatch = document.getElementById("stopwatch");
let playPausedButton = document.getElementById("play-pause");
let secondSphere = document.getElementById("seconds-sphere");

let stopwatchInterval;
let runningTime = 0;

const playPause = () => {
  const isPaused = !playPausedButton.classList.contains("running");
  if (isPaused) {
    playPausedButton.classList.add("running");
    start();
  } else {
    playPausedButton.classList.remove("running");
    pause();
  }
};

const start = () => {
  secondSphere.style.animation = "rotateSeconds 60s linear infinite";
  let startTime = Date.now() - runningTime;
  secondSphere.style.animationPlayState = "running";
  stopwatchInterval = setInterval(() => {
    runningTime = Date.now() - startTime;
    stopwatch.textContent = calculateTime(runningTime);
  }, 100);
};

const calculateTime = (runningTime) => {
  const total_seconds = Math.floor(runningTime / 1000);
  const total_minutes = Math.floor(total_seconds / 60);

  const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
  const display_minutes = total_minutes.toString().padStart(2, "0");
  return `${display_minutes}:${display_seconds}`;
};

const pause = () => {
  secondSphere.style.animationPlayState = "paused";
  clearInterval(stopwatchInterval);
};

const stop = () => {
  secondSphere.style.transform = "rotate(-90deg) translateX(145px)";
  secondSphere.style.animation = "none";
  playPausedButton.classList.remove("running");
  runningTime = 0;
  clearInterval(stopwatchInterval);
  stopwatch.textContent = "00:00";
};
