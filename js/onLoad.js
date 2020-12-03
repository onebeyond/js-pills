const images = ["./assets/Carlos.png", "./assets/Felipe.png"];
 
window.onload = function () {
  document.getElementById("header-image").src =
    images[Math.round(Math.random() * 1)];
  hljs.initHighlightingOnLoad();

  display.textContent = getReadableTime(timer);
};
