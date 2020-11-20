const { readdirSync, writeFileSync } = require('fs');

const basicPills = readdirSync('./basic');
const advancedPills = readdirSync('./advanced');
const proPills = readdirSync('./pro');

const beautifyString = str => (str[0].toUpperCase() + str.slice(1)).replace(/-|\./g, ' ');

const linkBuilder = type => folderName => `<a onclick="setIfFrameURL('./${type}/${folderName}/README.md')">${beautifyString(folderName)}</a>\n`

const html = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Guidesmiths - JS Pills</title>
    <link rel="stylesheet" href="style.css" />
    <link
      rel="icon"
      type="image/png"
      href="https://images.ctfassets.net/5gv1edeicqfs/48EM0LU3Z6gWkQCcCaeoq2/704ea273b5d50d09ff450a5ceaa74631/guidesmiths-logo.png"
    />
    <link rel="stylesheet" href="./highlight/styles/monokai.css" />
    <script src="./highlight/highlight.pack.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/showdown@1.9.1/dist/showdown.min.js"></script>
  </head>
  <body>
    <main id="main">
      <span class="burger" style="font-size: 30px; cursor: pointer" onclick="openNav()">&#9776;</span>
      <div class="logo">
        <img src="./assets/GS_logo.svg" alt="guidesmiths" />
        <h1>JS Pills</h1>
        <div class="carlos-comic">
          <img src="" alt="guidesmiths" id="header-image" />
          <div class="speech-bubble">
            🇪🇸 Te has tomado tu pildora?
            <br />
            🇬🇧 Have you taken your pill ?
          </div>
        </div>
      </div>
      <section class="pills-sections">
        <div class="links">
          <div class="advanced grow">
            <h3>Advanced 💊</h3>
            ${advancedPills.map(linkBuilder('advanced')).join('')}
          </div>
          <div class="pro grow">
            <h3>Pro 💊</h3>
            ${proPills.map(linkBuilder('pro')).join('')}
          </div>
          <div class="basic grow">
            <h3>Basic 💊</h3>
            ${basicPills.map(linkBuilder('basic')).join('')}
          </div>
        </div>
        <div id="secret"></div>
        <div id="content">
          <h1 style="text-align: center">Welcome to the Guidesmiths JS pills page, select a pill to start</h1>
        </div>
      </section>
    </main>
    <div id="mySidenav" class="sidenav">
      <div class="fixed">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <div id="time"></div>
        <audio id="audioBell">
          <source src="./assets/bell.mp3" type="audio/mpeg" preload />
        </audio>
        <button onclick="play()">Start</button>
        <button onclick="pause()">Pause</button>
        <button onclick="reset()">Reset</button>
        <div class="javi-comic">
          <div class="speech-bubble">Let's start the pill!! 🎉</div>
        </div>
        <div class="pill-animation">
          <img src="./assets/Javi.png" alt="guidesmiths" id="javi" />
          <div id="inner-orbit">
            <div class="inner-orbit-pill">
              <img src="./assets/ibuprofeno.png" alt="guidesmiths" id="javi" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <script src="./index.js"></script>
  </body>
</html>
`

writeFileSync('./index.html', html);