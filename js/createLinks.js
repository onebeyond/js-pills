function test() {
  return $.getJSON("./pills.json");
}

$.when(test()).then(function (pills) {
  const levels = Object.keys(pills);

  levels.forEach((level) => {
    pills[level].forEach((pill) => {
      let link = document.createElement("a");
      link.innerHTML += `<a onclick="setIfFrameURL('./pills/${level}/${pill.folder}/README.md')">${pill.name}</a>`;
      document.querySelector("." + level).appendChild(link);
    });
  });
});
