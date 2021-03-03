const { reduceMethod, filterMethod, setMethod } = require('./index');

const randomIntegers = max => Math.floor(Math.random() * (max + 1));
const generateRandomArray = (length, diffValues) =>
  [...new Array(length)].map(() => randomIntegers(diffValues));
const mean = array =>
  array.reduce((acc, value) => acc + value, 0) / array.length;
const normalizedResults = resultObject =>
  Object.keys(resultObject).reduce((acc, key) => {
    acc[key] = mean(resultObject[key]);
    return acc;
  }, {});

const results = {};
const dedupe = array => dedupeMethod => {
  const init = Date.now();
  console.log(`Starting method ${dedupeMethod.toString()}`);
  const dedupedArray = dedupeMethod(array);
  const end = Date.now();
  const duration = end - init;
  console.log(
    `Finished (deduped array length: ${
      dedupedArray.length
    }) method ${dedupeMethod.toString()}: ${duration} ms`
  );
  if (results[dedupeMethod]) results[dedupeMethod].push(duration);
  else results[dedupeMethod] = [duration];
};

const ITERATIONS = 10;
const ARRAY_LENGTH = 100000;
const RANDOM_RANGE = 5000;
let iterationCounter = 0;
const startTime = Date.now();
[...new Array(ITERATIONS)].forEach(() => {
  console.log(
    `\n----------------------------- start of iteration ${++iterationCounter} / ${ITERATIONS}`
  );
  const array = generateRandomArray(ARRAY_LENGTH, randomIntegers(RANDOM_RANGE));
  console.log(
    `random array length: ${array.length} - random numbers: ${RANDOM_RANGE}`
  );
  [reduceMethod, filterMethod, setMethod].forEach(dedupe(array));
  console.log(
    `----------------------------- end of iteration ${iterationCounter} / ${ITERATIONS}`
  );
});
const finishTime = Date.now();

const summary = `
const ITERATIONS = ${ITERATIONS};
const ARRAY_LENGTH = ${ARRAY_LENGTH};
const RANDOM_RANGE = ${RANDOM_RANGE};`;
console.log(summary);

console.table(normalizedResults(results));
console.log(`Benchmark total run time: ${finishTime - startTime} ms`);
