/**
 * This function is call each time a link is clicked to render the related markdown
 *
 * @param  {string} url - Path of the Readme to render
 */
function setIfFrameURL(url) {
  $("#content").load(url, (response) => {
    if (status == "error") {
      let msg = "Sorry but there was an error: ";
      console.log(msg + xhr.status + " " + xhr.statusText);
    }
    document.getElementById("secret").innerHTML = response.includes(
      "Merging arrays"
    )
      ? `<div class="felipe-comic">
      <img id="felipe-image" src="./assets/img/Felipe.png"></img>
      <div class="speech-bubble-felipe">Poco se habla del merging arrays</div>
      </div>`
      : ``;
    let converter = new showdown.Converter({ tables: true }),
      html = converter.makeHtml(response);
    document.getElementById("content").innerHTML = html;
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightBlock(block);
    });
  });
}
