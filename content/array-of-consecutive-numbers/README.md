---
slug: "/pill/creating-an-array-of-consecutive-numbers"
date: "2020-10-29"
author: ""
title: "Creating an array of consecutive numbers"
description: "This is a collection of examples on how we can create an <b>array of consecutive numbers from 1 to n</b> in JavaScript, from the classic for loop to the ES6 Array class methods."
---

# Creating an array of consecutive numbers

This is a collection of examples on how we can create an <b>array of consecutive numbers from 1 to n</b> in JavaScript, from the classic for loop to the ES6 Array class methods.

## 01# Example with common for loop

Similar to many other languages, not very cool but, in fact, <b>the fastest way</b>.

```js
const createArray = (n) => {
  const array = [];
  for (let i = 1; i <= n; i++) {
    array.push(i);
  }
  return array;
};
```

## 02# Example with Array constructor and map

In this example it's important to notice that Array constructor returns an empty array (an array with empty slots, <b>not an array with undefined values!</b>). This difference is important and it's why we need to call the fill method without any argument in order to get the array filled with real values (undefined in this case) so we can then iterate over it.

```js
const createArray02 = (n) =>
  Array(n)
    .fill()
    .map((_, i) => i + 1);
```

## 03# Example with spread operator and keys() method

We can also use the spread operator combined with Array.keys() method in order to get an array <b>containing indexes from 0 to n-1</b>.

```js
const createArray03 = (n) => [...Array(n).keys()].map((e) => e + 1);
```

## 04# Example with Array.from() static method

Array.from method allows us to create arrays from "array-like" objects passed as first argument and a map function as the second one.

These examples just show the difference in the map functions depending on the source array.

```js
const createArray04a = (n) => Array.from(Array(n), (_, i) => i + 1);
const createArray04b = (n) => Array.from(Array(n).keys(), (e) => e + 1);
```

## 05# Example with Array.from() with an array-like object

Here we extend the previous examples with a more interesting case where the array-like object is a <b>simple object containing a "length" property</b>.

```js
const createArray05 = (n) => Array.from({ length: n }, (_, i) => i + 1);
```

### References

[MDN Array class docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

[MDN Array.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys)

[MDN Array.from() docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
