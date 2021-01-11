const fs = require("fs");
const util = require("util");
const pillsFromJSON = require("../pills.json");

let rawData = fs.readFileSync("./pills.json");
let pills = JSON.parse(rawData);
const levels = Object.keys(pills);

test("files and pills.json should be equal", () => {
  expect(pills).toEqual(pillsFromJSON);
});
