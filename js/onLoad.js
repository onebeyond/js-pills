const images = ["./assets/img/Carlos.png", "./assets/img/Felipe.png"];

const setIfFrameByURL = () => {
  var url = new URL(window.location.href);
  const [level, pill] = url.search.split("=");
  if (level !== "" && pill !== "") {
    scrollDown();
    setIfFrameURL(`./pills/${level.replace("?", "")}/${pill}/README.md`);
  }
};

window.onload = function () {
  setIfFrameByURL();
  const urlParams = new URLSearchParams(window.location.search);
  window.addEventListener("locationchange", function () {
    var url = new URL(window.location.href);
    const [level, pill] = url.search.split("=");
    setIfFrameURL(`./pills/${level.replace("?", "")}/${pill}/README.md`);
  });

  document.getElementById("header-image").src =
    images[Math.round(Math.random() * 1)];
  hljs.initHighlightingOnLoad();

  display.textContent = getReadableTime(timer);
};
