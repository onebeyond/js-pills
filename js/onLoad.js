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
  setIfFrameByURL();
  window.addEventListener("locationchange", () => {
    let url = new URL(window.location.href);
    const [level, pill] = url.search.split("=");
    setIfFrameURL(`./pills/${level.replace("?", "")}/${pill}/README.md`);
  });

  document.getElementById("header-image").src =
    images[Math.round(Math.random() * 1)];
  hljs.initHighlightingOnLoad();

  display.textContent = getReadableTime(timer);
};
