function test() {
  return $.getJSON("./pills.json");
}

$.when(test()).then(function (pills) {
  const levels = Object.keys(pills);

  levels.forEach((level) => {
    let link = document.createElement("ul");
    pills[level].forEach((pill) => {
      let li = document.createElement("li");
      li.setAttribute(
        "onClick",
        `setIfFrameURL('./pills/${level}/${pill.folder}/README.md')`
      );
      li.innerHTML += pill.name;
      link.appendChild(li);
    });
    document.querySelector("." + level).appendChild(link);
  });
});
