function test() {
  return $.getJSON("./pills.json");
}

$.when(test()).then(function (pills) {
  const levels = Object.keys(pills);

  const onClick = (pill, level) => `
    window.history.pushState("", "", "?${level}=${pill.folder}");
    window.dispatchEvent(new Event('locationchange'))
  `;

  levels.forEach((level) => {
    let link = document.createElement("ul");
    pills[level].forEach((pill) => {
      let li = document.createElement("li");
      li.setAttribute("onClick", onClick(pill, level));
      li.innerHTML += pill.name;
      link.appendChild(li);
    });
    document.querySelector("." + level).appendChild(link);
  });
});
