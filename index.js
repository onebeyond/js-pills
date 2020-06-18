let interval,
  isPaused = false,
  timer = 60 * 2 + 29,
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
  document.getElementById("main").style.width = "80%";
}

function closeNav() {
  document.getElementById("main").style.width = "100%";
}

function setIfFrameURL(loc) {
  document.getElementById("frame").src = loc;
}

function setIfFrameURL(url) {
  $("#content").load(url, function (response) {
    if (status == "error") {
      var msg = "Sorry but there was an error: ";
      console.log(msg + xhr.status + " " + xhr.statusText);
    }
    document.getElementById("secret").innerHTML = response.includes(
      "Merging arrays"
    )
      ? `<div class="carlos-comic">
      <img id="felipe-image" src="./assets/Felipe.png"></img>
      <div class="speech-bubble-felipe">Poco se habla de mi pill</div>
      </div>`
      : ``;
    var converter = new showdown.Converter(),
      html = converter.makeHtml(response);
    document.getElementById("content").innerHTML = html;
  });
}
