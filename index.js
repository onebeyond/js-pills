const INITIAL_TIMER = 60 * 2 + 30;
let interval,
  isPaused = false,
  timer = INITIAL_TIMER,
  minutes,
  seconds,
  isRunning = false,
  display = document.querySelector("#time"),
  audio = document.querySelector("#audioBell");

const images = ["./assets/Carlos.png", "./assets/Felipe.png"];

window.onload = function () {
  document.getElementById("header-image").src =
    images[Math.round(Math.random() * 1)];
  hljs.initHighlightingOnLoad();

  display.textContent = getMinSec(timer);

};

function getMinSec (timer) {
  minutes = parseInt(timer / 60, 10);
  seconds = parseInt(timer % 60, 10);

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  
  return minutes + ":" + seconds;
}

function startTimer (display) {
  isRunning = true;
  interval = setInterval(function () {
    display.textContent = getMinSec(timer);
    if (--timer < 0) {
      timer = 0;
      clearInterval(interval);
      display.classList.add('blinking');
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
  display.textContent = getMinSec(timer);
  display.classList.remove('blinking');
}

function openNav() {
  document.getElementById("main").style.width = "80%";
}

function closeNav() {
  document.getElementById("main").style.width = "100%";
}
/**
 * This function is call each time a link is clicked to render the related markdown
 *
 * @param  {string} url - Path of the Readme to render
 */
function setIfFrameURL(url) {
  $("#content").load(url, function (response) {
    if (status == "error") {
      var msg = "Sorry but there was an error: ";
      console.log(msg + xhr.status + " " + xhr.statusText);
    }
    document.getElementById("secret").innerHTML = response.includes(
      "Merging arrays"
    )
      ? `<div class="felipe-comic">
      <img id="felipe-image" src="./assets/Felipe.png"></img>
      <div class="speech-bubble-felipe">Poco se habla del merging arrays</div>
      </div>`
      : ``;
    var converter = new showdown.Converter({ tables: true }),
      html = converter.makeHtml(response);
    document.getElementById("content").innerHTML = html;
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightBlock(block);
    });
  });
}
