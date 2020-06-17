let interval,
  isPaused = false,
  timer = 60 * 2 + 30,
  minutes,
  seconds,
  isRunning = false,
  display = document.querySelector("#time");

function startTimer(display) {
  isRunning = true;
  interval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = 0;
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
  timer = 60 * 2 + 30;
  display.textContent = "02:30";
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


function setIfFrameURL(loc) {
  document.getElementById("frame").src = loc;
}