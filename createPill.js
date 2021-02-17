/* eslint-disable no-undef */
"use strict";

const fs = require("fs");
const readline = require("readline");

const newPill = { name: "", folder: "" };
let rawData = fs.readFileSync("./pills.json");
let pills = JSON.parse(rawData);
const levels = Object.keys(pills);
let levelSelected = null;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question1 = () => {
  return new Promise((resolve) => {
    rl.question("What's your pill name? ", (answer) => {
      console.log(`Pill's name: ${answer}`);
      newPill.name = answer;
      resolve();
    });
  });
};

const question2 = () => {
  return new Promise((resolve) => {
    rl.question(
      "How would you like to call your pill's folder ? ",
      (answer) => {
        console.log(`Pill's folder: ${answer}`);
        newPill.folder = answer;
        resolve();
      }
    );
  });
};

const question3 = () => {
  return new Promise((resolve) => {
    rl.question(
      `Is ${levels[0]} [0] - ${levels[1]} [1] - ${levels[2]} [2] `,
      (answer) => {
        levelSelected = levels[answer];
        console.log(`Pill's level: ${answer}`);
        pills = {
          ...pills,
          [levels[answer]]: [...pills[levels[answer]], newPill],
        };
        resolve();
      }
    );
  });
};

const main = async () => {
  await question1();
  await question2();
  await question3();
  const dir = `./assets/pills/${newPill.folder}`;
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  if (fs.existsSync(dir)) {
    console.log(`The ${dir} already exist`);
    rl.close();
  }
  fs.mkdirSync(dir);
  fs.writeFileSync(
    `./pills/${newPill.folder}/README.md`,
    `---
    slug: "/pill/${newPill.name}"
    date: ${day}-${month < 10 && 0}${month}-${year}
    title: ${newPill.name}
    description: "WRITE YOUR PILL DESCRIPTION HERE"
    level: ${levelSelected}
    ---
    ### ${newPill.name}`,
    "utf8"
  );
  fs.writeFileSync("./pills.json", JSON.stringify(pills), "utf8");
  console.log("Your pill has been added with success!");
  rl.close();
};

main();
