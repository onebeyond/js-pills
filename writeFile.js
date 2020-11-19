"use strict";

var fs = require("fs");
var util = require("util");
const readline = require("readline");

const newPill = { name: "", folder: "" };

let rawdata = fs.readFileSync("./pills.json");
let pills = JSON.parse(rawdata);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question("What's your pill name? ", (answer) => {
      console.log(`Pill's name: ${answer}`);
      pills.name = answer;
      resolve();
    });
  });
};

const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question("How would you like to name your pill's folder ? ", (answer) => {
      console.log(`Pill's folder: ${answer}`);
      pills.folder = answer;
      resolve();
    });
  });
};

const main = async () => {
  await question1();
  await question2();
  //fs.writeFileSync('./temp.js', 'var obj = ' + util.inspect(obj) , 'utf-8')
  rl.close();
};

main();

