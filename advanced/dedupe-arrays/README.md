# Dedupe arrays ['🇪🇸', '🏁', '🇪🇺', '🇪🇸', '🇪🇸', '🇮🇨', '🇮🇨', '🏳️‍🌈', '🇮🇨', '🇮🇨', '🇮🇨', '🇪🇺']

We're presenting 3 ways to dedupe an array in Javascript.

Credits to Samantha Ming: https://www.samanthaming.com/tidbits/43-3-ways-to-remove-array-duplicates/

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

## 3. Set

The third method to be shown uses Set:

```javascript
const setMethod = array => [...new Set(array)];
```

This method create a new Set with the elements of the array. A Set only accepts unique values, so it dedupes the incoming values.
```javascript
const uniqueSet = new Set(originalArray);
// Set { '🇪🇸', '🏁', '🇪🇺', '🇮🇨', '🏳️‍🌈' }
```
Now that we have a Set of unique values, to transform it into an array, we can use the spread operator.
```javascript
const set2Array = [...uniqueSet]
// [ '🇪🇸', '🏁', '🇪🇺', '🇮🇨', '🏳️‍🌈' ]
```

And :tada:, our deduped array:
```javascript
const setMethod = array => [...new Set(array)];

setMethod(originalArray)
// [ '🇪🇸', '🏁', '🇪🇺', '🇮🇨', '🏳️‍🌈' ]
```

## Benchmark

After reading, GGGGGGGGGGG created a benchmark against the code by Samantha, I decided to create mine.

It's a very silly and simple benchmark, but it gives you the possibility of playing with the values and will give you the idea of what of the 3 ways is better to use.


## So, what do I use

From the simpleness and according to my own (very simple) benchmark, I would use the Set method anytime I can.


## Browser compatibility 🔌

|          | ⚠️        | ✅        | ✅        | ✅        | ✅        | ✅        |
| -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| 💻        | IE       | Edge     | Firefox  | Chrome   | Safari   | Opera    |
| reduce   | 9        | 12       | 3        | 4        | 5        | 11.5      |
| filter   | 9        | 12       | 2        | 4        | 3.1      | 10        |
| includes | -        | 14       | 43       | 47       | 9        | 34        |
| indexOf  | 9        | 12       | 2        | 4        | 3.1      | 10        |
| set      | 11       | 12       | 13       | 38       | 8        | 25        |
| ...      | -        | 12       | 16       | 46       | 8        | 37        |

