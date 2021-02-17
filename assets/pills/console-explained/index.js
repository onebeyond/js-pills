const arrayOfStrings = ['one', 'two', 'three', 'four'];

const arrayOfObjects = [
  {
    name: 'one',
    odd: false,
    count: 1,
  },
  {
    name: 'two',
    odd: true,
    count: 2,
  },
  {
    name: 'one',
    odd: false,
    count: 3,
  },
];

const sampleObject = { awesome: true, boring: false };

const sampleString = 'awesome';

console.time('sampleTimer');
console.count('awesome explanations');

console.log('This is a literal string output');

console.log(`This is an ${sampleString} dynamic console line output`);

console.log('This is another ' + sampleString + ' dynamic console line output');

console.count('awesome explanations');
console.dir(arrayOfStrings);

console.dirxml(arrayOfObjects);

console.dir(arrayOfObjects);

console.count('awesome explanations');
// Render a table with all columns
console.table(arrayOfObjects);

// Render a table filtering columns
console.table(arrayOfObjects, ['name', 'odd']);

console.timeEnd('sampleTimer');

console.trace('Trace dump', sampleObject);
console.countReset('awesome explanations');
console.count('awesome explanations');

const x = 5;
const y = 3;
const reason = `${x} is expected to be less than ${y}`;
console.assert(x < y, reason);
