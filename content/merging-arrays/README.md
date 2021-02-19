---
slug: "/pill/merging-arrays"
date: "2020-06-26"
author: ""
title: "Merging arrays"
description: "If you need to merge two arrays you can use the Array.concat()"
---

# Merging arrays

## Method 1: Concat

If you need to merge two arrays you can use the Array.concat() function:

```js
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log(array1.concat(array2)); // [1,2,3,4,5,6];
```

This method is not the best to merge big lists as it will take a lot of memory by creating a new array.

## Method 2: Push

`Array.push.apply(arr1, arr2)` is more efficient since it will merge the second array in the first one, saving a third larger array:

```js
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log(array1.push.apply(array1, array2)); // [1,2,3,4,5,6];
```

The downside is - `push` mutates the first array.

## Method 3: Push with spread

Similar to method 2, but leveraging the `spread` operator.

```js
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log(array1.push(...array2)); // [1,2,3,4,5,6];
```

## Method 4: ES6 spread operator

```js
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1, ...array2];
```

More flexible since you could do things like `const array3 = [...array1, 10, ...array2, 12];` Similar to method 1 in terms of performance.
