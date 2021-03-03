// Credit to Samantha Ming https://www.samanthaming.com/tidbits/43-3-ways-to-remove-array-duplicates/

const originalArray = [
  '🇪🇸',
  '🏁',
  '🇪🇺',
  '🇪🇸',
  '🇪🇸',
  '🇮🇨',
  '🇮🇨',
  '🏳️‍🌈',
  '🇮🇨',
  '🇮🇨',
  '🇮🇨',
  '🇪🇺',
];

const reduceMethod = array =>
  array.reduce((acc, flag) => (acc.includes(flag) ? acc : [...acc, flag]), []);

const filterMethod = array =>
  array.filter((flag, index) => array.indexOf(flag) === index);

const setMethod = array => [...new Set(array)];

console.log(reduceMethod(originalArray));
console.log(filterMethod(originalArray));
console.log(setMethod(originalArray));

// for the benchmark
module.exports = { reduceMethod, filterMethod, setMethod };
