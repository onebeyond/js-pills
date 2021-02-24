---
slug: "/pill/dedupe-arrays"
date: "2020-07-03"
author: ""
title: "Dedupe arrays"
description: "Different ways to remove duplicates from an array"
---
# Dedupe arrays ['🇪🇸', '🏁', '🇪🇺', '🇪🇸', '🇪🇸', '🇮🇨', '🇮🇨', '🏳️‍🌈', '🇮🇨', '🇮🇨', '🇮🇨', '🇪🇺']

We're presenting 3 ways to dedupe an array in Javascript.

Credits to Samantha Ming: [https://www.samanthaming.com/tidbits/43-3-ways-to-remove-array-duplicates/](https://www.samanthaming.com/tidbits/43-3-ways-to-remove-array-duplicates/)

## Original array

Let's have a look at this array:

```javascript
const originalArray = ['🇪🇸', '🏁', '🇪🇺', '🇪🇸', '🇪🇸', '🇮🇨', '🇮🇨', '🏳️‍🌈', '🇮🇨', '🇮🇨', '🇮🇨', '🇪🇺'];
```

As you can observe, this array contains a lot of flags. Several appear more than once. Some of them too many times. ;)

How can we remove all the duplicates from that array and get a new one with every flag but only once in it?

### Mutation

Let's have in mind that the methods we're showing here does not mutate the original array.


## 1. Reduce

We can use reduce to dedupe the array:

```javascript
const reduceMethod = array => array.reduce((acc, flag) => acc.includes(flag) ? acc : [...acc, flag], []);
```

With this method, we start with an empty array.
```javascript
// look at the ---> [] <--- at the end

```
Then, the reduce is going to apply a function to every element in the array. That function is
```javascript
acc.includes(flag) ? acc : [...acc, flag]
```
So, for every flag in the array, this function is goin to check if that flag is already in the accumulated array (we started from an empty array, remember). If the flag is already in that array, it just return the accumulated array. If the flag is not in the array, then we append the flag to the accumulated array and return it, which will become the new accumulated array.

Here you have a code that will show the steps:
```javascript
const steps = [];
const explainedReducer = originalArray.reduce((acc, flag) => {
  const step = {};
  step.item = flag;
  step.accumulatorBeforeReducerFunction = acc;
  step.pushToAccumulator = !acc.includes(flag) ? 'YES' : 'NO';
  step.accumulatorAfterReducerFunction = acc.includes(flag) ? acc : [...acc, flag];
  steps.push(step);
  // console.log(step);
  return acc.includes(flag) ? acc : [...acc, flag];
}, []);
console.log(explainedReducer)
// [ '🇪🇸', '🏁', '🇪🇺', '🇮🇨', '🏳️‍🌈' ]
console.table(steps)
```
```
┌─────────┬────────┬────────────────────────────────────────────┬───────────────────┬────────────────────────────────────────────┐
│ (index) │  item  │      accumulatorBeforeReducerFunction      │ pushToAccumulator │      accumulatorAfterReducerFunction       │
├─────────┼────────┼────────────────────────────────────────────┼───────────────────┼────────────────────────────────────────────┤
│    0    │ '🇪🇸'   │                     []                     │       'YES'       │                 [ '🇪🇸' ]                 │
│    1    │ '🏁'   │                 [ '🇪🇸' ]                    │       'YES'       │              [ '🇪🇸', '🏁' ]              │
│    2    │ '🇪🇺'   │              [ '🇪🇸', '🏁' ]                 │       'YES'       │          [ '🇪🇸', '🏁', '🇪🇺' ]          │
│    3    │ '🇪🇸'   │          [ '🇪🇸', '🏁', '🇪🇺' ]               │       'NO'        │          [ '🇪🇸', '🏁', '🇪🇺' ]          │
│    4    │ '🇪🇸'   │          [ '🇪🇸', '🏁', '🇪🇺' ]               │       'NO'        │          [ '🇪🇸', '🏁', '🇪🇺' ]          │
│    5    │ '🇮🇨'   │          [ '🇪🇸', '🏁', '🇪🇺' ]               │       'YES'       │       [ '🇪🇸', '🏁', '🇪🇺', '🇮🇨' ],  │
│    6    │ '🇮🇨'   │       [ '🇪🇸', '🏁', '🇪🇺', '🇮🇨' ],           │       'NO'        │       [ '🇪🇸', '🏁', '🇪🇺', '🇮🇨' ],  │
│    7    │ '🏳️‍🌈'   │       [ '🇪🇸', '🏁', '🇪🇺', '🇮🇨' ],         │       'YES'       │     [ '🇪🇸', '🏁', '🇪🇺', '🇮🇨', '🏳️‍🌈' ] │
│    8    │ '🇮🇨'   │     [ '🇪🇸', '🏁', '🇪🇺', '🇮🇨', '🏳️‍🌈' ]      │       'NO'        │     [ '🇪🇸', '🏁', '🇪🇺', '🇮🇨', '🏳️‍🌈' ] │
│    9    │ '🇮🇨'   │     [ '🇪🇸', '🏁', '🇪🇺', '🇮🇨', '🏳️‍🌈' ]      │       'NO'        │     [ '🇪🇸', '🏁', '🇪🇺', '🇮🇨', '🏳️‍🌈' ] │
│   10    │ '🇮🇨'   │     [ '🇪🇸', '🏁', '🇪🇺', '🇮🇨', '🏳️‍🌈' ]      │       'NO'        │     [ '🇪🇸', '🏁', '🇪🇺', '🇮🇨', '🏳️‍🌈' ] │
│   11    │ '🇪🇺'   │     [ '🇪🇸', '🏁', '🇪🇺', '🇮🇨', '🏳️‍🌈' ]      │       'NO'        │     [ '🇪🇸', '🏁', '🇪🇺', '🇮🇨', '🏳️‍🌈' ] │
└─────────┴────────┴────────────────────────────────────────────┴───────────────────┴────────────────────────────────────────────┘
```

You can run that explained code from the source in this repository running:
```bash
node ./explained.js
```

This way, only when a flag is not in the to-be-the-solution-array, it is appended to it.

## 2. Filter

The second method we're going to present is filter.

```javascript
const filterMethod = array => array.filter((flag, index) => array.indexOf(flag) === index);
```

This method uses `filter` over the array that is passed. For each element in the array, it executes a function with two params, the element (`flag`) and the index of that element in the array.

Then, for each element, it gets the index of the first ocurrence of the flag in the array and compares it with the current index.

So, this way, when the current index is not the same than the one for the first occurrence of the flag, that occurrence is discarded and not added in the solution array. Only when the current index is the same than the index of the first occurrence of a flag, that flag will be part of the solution.

```javascript
const explainFilter = () => {
  const steps = [];
  const explainedFilter = originalArray.filter((flag, index) => {
    const step = {};
    step.item = flag;
    step.index = index;
    step.indexOf = originalArray.indexOf(flag);
    step.condition = originalArray.indexOf(flag) === index;
    step.operation = originalArray.indexOf(flag) === index ? 'MAINTAIN' : 'DISCARD';
    steps.push(step);
    //console.log(step)
    return originalArray.indexOf(flag) === index;
  });
  console.log(explainedFilter);
  console.table(steps);
};

explainFilter();
```
```
┌─────────┬────────┬───────┬─────────┬───────────┬────────────┐
│ (index) │  item  │ index │ indexOf │ condition │ operation  │
├─────────┼────────┼───────┼─────────┼───────────┼────────────┤
│    0    │ '🇪🇸' │   0   │    0    │   true    │ 'MAINTAIN' │
│    1    │  '🏁'  │   1   │    1    │   true    │ 'MAINTAIN' │
│    2    │ '🇪🇺' │   2   │    2    │   true    │ 'MAINTAIN' │
│    3    │ '🇪🇸' │   3   │    0    │   false   │ 'DISCARD'  │
│    4    │ '🇪🇸' │   4   │    0    │   false   │ 'DISCARD'  │
│    5    │ '🇮🇨' │   5   │    5    │   true    │ 'MAINTAIN' │
│    6    │ '🇮🇨' │   6   │    5    │   false   │ 'DISCARD'  │
│    7    │ '🏳️‍🌈'  │   7   │    7    │   true    │ 'MAINTAIN' │
│    8    │ '🇮🇨' │   8   │    5    │   false   │ 'DISCARD'  │
│    9    │ '🇮🇨' │   9   │    5    │   false   │ 'DISCARD'  │
│   10    │ '🇮🇨' │  10   │    5    │   false   │ 'DISCARD'  │
│   11    │ '🇪🇺' │  11   │    2    │   false   │ 'DISCARD'  │
└─────────┴────────┴───────┴─────────┴───────────┴────────────┘
```

You can run that explained code from the source in this repository running:
```bash
node ./explained.js
```

## 3. Set

The third method to be shown uses [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set).

This method creates a new Set with the elements of the array. A Set stores only unique values, so it will dedupe the incoming ones.
```javascript
const uniqueSet = new Set(originalArray);
// Set { '🇪🇸', '🏁', '🇪🇺', '🇮🇨', '🏳️‍🌈' }
```
Now that we have a Set of unique values, to transform it into an array, we can use the spread operator.
```javascript
const set2Array = [...uniqueSet]
// [ '🇪🇸', '🏁', '🇪🇺', '🇮🇨', '🏳️‍🌈' ]
```

And 🎉🎉🎉, our deduped array:
```javascript
const setMethod = array => [...new Set(array)];

setMethod(originalArray)
// [ '🇪🇸', '🏁', '🇪🇺', '🇮🇨', '🏳️‍🌈' ]
```

## Benchmark

After reading [Miguel Albrecht](https://blog.usejournal.com/performance-of-javascript-array-ops-2690aed47a50) created a benchmark against the code by Samantha, I decided to create mine.

It's a very silly and simple benchmark, but it gives you the possibility of playing with the values and will give you the idea of what of the 3 ways is better to use.

In the benchmark, there are 3 configurable variables:
- *ITERATIONS*: the number of times the methods are going to be run
- *ARRAY_LENGTH*: the size of the array that is going to be deduped
- *RANDOM_RANGE*: the range of numbers that are going to be randomly picked to fill the array. i.e. 5000 means we're going to pick a random number between 0-5000 for every position of the array to be filled. The higher, the more chances to have less duplicate values.

Some results of this benchmark (run in my MacBook Pro laptop)*:
- (index): the method run
- Values: the mean of all iterations run (in ms)

```
const ITERATIONS = 10;
const ARRAY_LENGTH = 100000;
const RANDOM_RANGE = 5000;
┌─────────────────────────────────────────────────────────────────────────────────────┬────────┐
│                                       (index)                                       │ Values │
├─────────────────────────────────────────────────────────────────────────────────────┼────────┤
│ array => array.reduce((acc, flag) => acc.includes(flag) ? acc : [...acc, flag], []) │ 267.2  │
│        array => array.filter((flag, index) => array.indexOf(flag) === index)        │ 475.9  │
│                            array => [...new Set(array)]                             │   3    │
└─────────────────────────────────────────────────────────────────────────────────────┴────────┘
Benchmark total run time: 7511 ms
```
```
const ITERATIONS = 10;
const ARRAY_LENGTH = 500000;
const RANDOM_RANGE = 9000;
┌─────────────────────────────────────────────────────────────────────────────────────┬────────┐
│                                       (index)                                       │ Values │
├─────────────────────────────────────────────────────────────────────────────────────┼────────┤
│ array => array.reduce((acc, flag) => acc.includes(flag) ? acc : [...acc, flag], []) │  1945  │
│        array => array.filter((flag, index) => array.indexOf(flag) === index)        │ 3479.7 │
│                            array => [...new Set(array)]                             │  14.4  │
└─────────────────────────────────────────────────────────────────────────────────────┴────────┘
Benchmark total run time: 54817 ms
```
```
const ITERATIONS = 10;
const ARRAY_LENGTH = 1000000;
const RANDOM_RANGE = 100000;
┌─────────────────────────────────────────────────────────────────────────────────────┬─────────┐
│                                       (index)                                       │ Values  │
├─────────────────────────────────────────────────────────────────────────────────────┼─────────┤
│ array => array.reduce((acc, flag) => acc.includes(flag) ? acc : [...acc, flag], []) │ 44740.6 │
│        array => array.filter((flag, index) => array.indexOf(flag) === index)        │ 63489.5 │
│                            array => [...new Set(array)]                             │  36.6   │
└─────────────────────────────────────────────────────────────────────────────────────┴─────────┘
Benchmark total run time: 1083454 ms
```

You can run the benchmark yourself using yout terminal:
```bash
node ./benchmark.js
```

\* Don't rely on these values as it is not a very reliable benchmark nor its results are too. But it shows a pattern...

## So, what do I use

From the simpleness and according to my own (very simple) benchmark, I would use the Set method anytime I can.


## Browser compatibility 🔌

|          | ⚠️        | ✅        | ✅        | ✅        | ✅        | ✅        | ✅        |
| -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| 💻        | IE       | Edge     | Firefox  | Chrome   | Safari   | Opera    | Node.js  |
| [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)   | 9        | 12       | 3        | 3        | 5        | 10.5     | 0.1.100  |
| [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)   | 9        | 12       | 1.5      | 1        | 3        | 9.5      | 0.1.100  |
| [includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) | -        | 14       | 43       | 47       | 9        | 34       | 6.0.0    |
| [indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)  | 9        | 12       | 1.5      | 1        | 3        | 9.5      | 0.1.100  |
| [set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)      | 11       | 12       | 13       | 38       | 8        | 25       | 0.12     |
| [...](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)      | -        | 12       | 16       | 46       | 8        | 37       | 5.0.0    |

## Resources

- [@telekosmos ' Github Gist uniq.js](https://gist.github.com/telekosmos/3b62a31a5c43f40849bb)
- [Samantha Ming Tidbits: How to Remove Array Duplicates in ES6](https://www.samanthaming.com/tidbits/43-3-ways-to-remove-array-duplicates/)
- [DailyJS - by Samantha Ming: How to Remove Array Duplicates in ES6](https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c)
- [Samantha Ming Instagram](https://www.instagram.com/p/BsjA-eiBAeT/)
- [Performance of Javascript Array Ops by Miguel Albrecht](https://blog.usejournal.com/performance-of-javascript-array-ops-2690aed47a50) 
- [MSDN Web Docs: reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [MSDN Web Docs: filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [MSDN Web Docs: includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- [MSDN Web Docs: indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
- [MSDN Web Docs: set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [MSDN Web Docs: spread operator syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)