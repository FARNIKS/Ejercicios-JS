const stopwatch = document.getElementById("stopwatch");
let playPausedButton = document.getElementById("play-pause");
let secondSphere = document.getElementById("seconds-sphere");

let stopwatchInterval;
let runningTime = 0;
const totalTime = 25 * 60 * 1000; //25 minutos en milisegundos
const breakTime = 5 * 60 * 1000; //5 minutos en milisegundos
let isbreak = false;
let remainingTime = totalTime;

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
  secondSphere.style.animation = "rotateSeconds 60s linear infinite reverse";
  let currentTotal = isbreak ? breakTime : totalTime; // Tiempo total actual
  let startTime = Date.now() - (currentTotal - remainingTime);
  secondSphere.style.animationPlayState = "running";
  stopwatchInterval = setInterval(() => {
    runningTime = Date.now() - startTime;
    remainingTime = (isbreak ? breakTime : totalTime) - runningTime;
    if (remainingTime <= 0) {
      if (isbreak) {
        remainingTime = 0;
        isbreak = false;
        stop();
        remainingTime = totalTime;
        Swal.fire({
          title: "¡Tiempo terminado!",
          text: "Puuedes empezar otra sesión ahora.",
        });
        console.log(isbreak);
        console.log(remainingTime);
      } else {
        remainingTime = 0;
        isbreak = true;
        stop();
        remainingTime = breakTime;
        Swal.fire({
          title: "¡Tiempo terminado!",
          text: "Toma un descanso de 5 minutos para comenzar ortra sesion.",
        });
        console.log(isbreak);
        console.log(remainingTime);
      }
    }
    stopwatch.textContent = calculateTime(remainingTime);
  }, 100);
};

const calculateTime = (time) => {
  const total_seconds = Math.floor(time / 1000);
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
  remainingTime = totalTime;
  runningTime = 0;
  clearInterval(stopwatchInterval);
  stopwatch.textContent = "25:00";
};
