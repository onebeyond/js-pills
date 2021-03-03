const dirtyArray = [
  0,
  1,
  'one',
  2,
  '',
  3,
  true,
  undefined,
  '5',
  false,
  8,
  NaN,
  'thirteen',
  Symbol('symbol'),
];
const falseyArray = [false, null, 0, '', undefined, NaN, -0];
const areFalseyOrNotArray = ['0', 'false', [], {}, () => {}];

const firstMethod = arr => arr.filter(elem => Boolean(elem));
const sameFirstMethod = arr => arr.filter(Boolean);
const secondMethod = arr => arr.filter(elem => !!elem);
const thirdMethod = arr => arr.filter(elem => elem);

const testTruthyOrFalsey = val => (val ? 'truthy' : 'falsey');

console.log(`Value 0 is ${tesTruthyOrFalsey(0)}`);
console.log(`Value false is ${tesTruthyOrFalsey(false)}`);
console.log(`Value undefined is ${tesTruthyOrFalsey(undefined)}`);
console.log(`Value null is ${tesTruthyOrFalsey(null)}`);
console.log(`Value NaN is ${tesTruthyOrFalsey(NaN)}`);

// First Method
console.log(firstMethod(dirtyArray));
console.log(firstMethod(falseyArray));
console.log(firstMethod(areFalseyOrNotArray));

// Second method
console.log(secondMethod(dirtyArray));
console.log(secondMethod(falseyArray));
console.log(secondMethod(areFalseyOrNotArray));

// Third method
console.log(thirdMethod(dirtyArray));
console.log(thirdMethod(falseyArray));
console.log(thirdMethod(areFalseyOrNotArray));
