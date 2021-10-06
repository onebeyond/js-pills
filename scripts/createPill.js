/* eslint-disable no-undef */
'use strict';

const fs = require('fs');
const readline = require('readline');

const newPill = { name: '', folder: '' };

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const kebabCase = string =>
  string
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-');

const question1 = () => {
  return new Promise(resolve => {
    rl.question("What's your pill name? ", answer => {
      console.log(`Pill's name: ${answer}`);
      newPill.name = kebabCase(answer);
      resolve();
    });
  });
};

const formatDate = () => {
  let d = new Date(),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
};

const main = async () => {
  await question1();
  const dir = `./content/${newPill.name}`;

  if (fs.existsSync(dir)) {
    console.log(`The ${dir} already exist`);
    rl.close();
  }

  fs.mkdirSync(dir);
  fs.writeFileSync(
    `${dir}/README.md`,
    `---
slug: "/pill/${newPill.name}"
date: "${formatDate()}"
author: "YOUR NAME HERE"
title: "ADD YOUR PILL'S TITLE HERE"
description: "ADD A PILL DESCRIPTION HERE"
---
### ${newPill.name}
    `,
    'utf8'
  );
  console.log(`Your pill has been created with success at ${dir}`);
  rl.close();
};

main();
