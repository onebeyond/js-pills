const images = ["./assets/img/Carlos.png", "./assets/img/Felipe.png"];

const setIfFrameByURL = () => {
  let url = new URL(window.location.href);
  const [level, pill] = url.search.split("=");
  document.title = `Guidesmiths - JS Pills | ${pill}`;
  if (level !== "" && pill !== "") {
    scrollDown();
    setIfFrameURL(`./pills/${level.replace("?", "")}/${pill}/README.md`);
  }
};

window.onload = function () {
  window.addEventListener("locationchange", () => {
    setIfFrameByURL();
  });

  document.getElementById("header-image").src =
    images[Math.round(Math.random() * 1)];
  hljs.initHighlightingOnLoad();

  display.textContent = getReadableTime(timer);
};
