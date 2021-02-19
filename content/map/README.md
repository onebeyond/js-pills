---
slug: "/pill/map"
date: "2020-12-03"
author: ""
title: "Map"
description: "The `map()` method creates a new array with the results of applying a function on every element of an original array without mutating it."
---

## Definition

The `map()` method creates a new array with the results of applying a function on every element of an original array without mutating it.

## Syntax

```js
const newArray = oldArray.map((val, index, arr) => {
  // Do your logic here
  return resultOfLogic;
});
```

Where:

- `newArray`: the new array that is returned.
- `oldArray`: the original array to which we apply our logic.
- `val`: the array element being processed.
- `index`: the index of the array element being processed.
- `arr`: the original array.

### Example 1

First, a basic example that doubles every number of an original array:

```js
const numbers = [1, 2, 3, 4, 5];
const doubles = numbers.map((num) => {
  return num * 2;
});

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(doubles); // [2, 4, 6, 8, 10]
```

We can see that it doesn't mutate the original array.

### Example 2

We can also do the same as above but passing a function directly to the `map()`:

```js
const calculateDouble = (num) => num * 2;
const numbers = [1, 2, 3, 4, 5];
const doublesFromMethod = numbers.map(calculateDouble);

console.log(doublesFromMethod); // [2, 4, 6, 8, 10]
```

Which is useful if the function is going to be used somewhere else or it's too complex and we prefer to separate it for readability.

### Example 3

Here we have an example to generate an array of object with an array of strings using the optional `index` param:

```js
const words = ["This", "is", "clearly", "some", "random", "sentence"];
const wordsAsObjects = words.map((value, index) => {
  return {
    id: index,
    word: value,
    length: value.length,
  };
});

console.log(wordsAsObjects); // [{ id: 0, word: 'This', length: 4 }, ... ]
```

Which gives room to play with our results.

### Example 4

Finally, let's see a comparison between `for` loops and `map()`:

```js
const numbers = [1, 2, 3, 4, 5];

// With 'for' loop
let doubleWithFor = [];
for (let i = 0; i < numbers.length; i++) {
  doubleWithFor[i] = numbers[i] * 2;
}
console.log(doubleWithFor); // [2, 4, 6, 8, 10]

// With 'map' function
const doubleWithMap = numbers.map((num) => num * 2);
console.log(doubleWithMap); // [2, 4, 6, 8, 10]
```

`map()` might be shorter, but it will only be a better solution if we plan on using the resulting array.

## Browser compatibility

| Browser | Chrome | Edge | IE  | Firefox | Opera | Safari |
| :------ | :----: | :--: | :-: | :-----: | :---: | :----: |
| Reduce  |   1    |  12  |  9  |   1.5   |  9.5  |   3    |

## References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map): for more information about the syntax and examples.
