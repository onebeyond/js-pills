const INITIAL_TIMER = 60 * 2 + 30;
let interval,
  isPaused = false,
  timer = INITIAL_TIMER,
  isRunning = false,
  display = document.querySelector("#time"),
  audio = document.querySelector("#audioBell");

function getReadableTime(secs) {
  const minutes = parseInt(secs / 60, 10)
    .toString()
    .padStart(2, "0");
  const seconds = parseInt(secs % 60, 10)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function startTimer(display) {
  isRunning = true;
  interval = setInterval(() => {
    display.textContent = getReadableTime(timer);
    if (--timer < 0) {
      timer = 0;
      clearInterval(interval);
      display.classList.add("blinking");
      audio.play();
    }
  }, 1000);
}

function play() {
  isPause = false;
  if (isRunning) return;
  startTimer(display);
}

function pause() {
  isPaused = !isPaused;
  isRunning = false;
  clearInterval(interval);
}

function reset() {
  isRunning = false;
  timer = INITIAL_TIMER;
  display.textContent = getReadableTime(timer);
  display.classList.remove("blinking");
}
