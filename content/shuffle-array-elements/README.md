---
slug: "/pill/shuffle-an-arrays-elements"
date: "2020-12-03"
author: ""
title: "Shuffle an array's elements"
description: "Shuffling an array consists on randomly re-arrange the content of that structure. A simple and easy way to shuffle the elements of an array is the following:"
---

## 🎲 SHUFFLE AN ARRAY'S ELEMENTS 🎲

Shuffling an array consists on randomly re-arrange the content of that structure. A simple and easy way to shuffle the elements of an array is the following:

```js
let arr = [1, 2, 3, 4, 5];
arr.sort(() => Math.random() - 0.5);
```

### ⚙️ How it works

**`Math.random()`** returns a floating-point, pseudo-random number\* greater than or equal to 0 but less than 1, with approximately uniform distribution over that range.

\*Keep in mind that Math.random() doesn't really generate random numbers, but it does a very good job simulating randomness.

**`Array.prototype.sort()`** sorts the elements of an array in place (no copy is made) and returns the sorted array. The default sort order is ascending, but it's possible to pass it a function that defines the sort order.

#### So...

**`arr.sort(() => Math.random() - 0.5)`** will reorder the elements of the array based on the function passed to the sort method. If the returned number is negative, the sort method will swap the two compared elements of the array; if the returned number is positive, the two compared elements will remain in the same order.

This way we obtain our array with their elements shuffled. And it's this easy.

### 📝 Examples

```js
const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
let numbers = [1, 2, 3, 4, 5];

console.log(shuffle(numbers)); // [ 5, 3, 2, 4, 1 ]
```

```js
const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
let emojis = ["🍎", "🥒", "🥥", "🌶", "🍉"];

console.log(shuffle(emojis)); // ["🥒", "🥥", "🍉", "🍎", "🌶"]
```

### ⚠️ Handle with care

As happens with (almost) everything, this task can be achieved in different ways, some of them are better and more efficient than others.

The simple trick presented in this JS Pill is not recommended if you need a really random shuffle, as it isn't as 'random' as others methods. Also, it's neither the most efficient one.

**Use this method only when you don't need absolute randomness and never use it for cryptographic needs.**

If something more effective and efficient is needed, one of the most used algorithms is the **Fisher-Yates shuffle**.

### 📚 References

- [MDN - Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

- [How does JavaScript's Math.random() generate random numbers?](https://hackernoon.com/how-does-javascripts-math-random-generate-random-numbers-ef0de6a20131)

- [About Math.random()](https://v8.dev/blog/math-random)

- [MDN - Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

- [Javascript.info - Shuffle an array](https://javascript.info/task/shuffle)

- [How to correctly shuffle an array in JavaScript](https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb)
