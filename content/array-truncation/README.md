---
slug: '/pill/array-truncation'
date: '2021-10-29'
author: 'Giorgio Grassini'
title: 'Array truncation'
description: 'This techniques can lock the array’s size, this is very useful to delete some elements of the array based on the number of elements you want to set.'
---

### Array truncation

If we need to truncate (modify an array by removing the elements), we have three main ways:

1. `.splice()`

Just remember splice modifies, slice accesses. Negative numbers as first arg indicate index from the end of the array.

```js
var firstArray = [2, 4, 6, 8];
var secondArray = firstArray.splice(-2, 2); // firstArray=[2,4], secondArray=[6,8]
```

2. `.slice()`

If you're asking how to retrieve a subset of an array without modifying the original, then use `.slice()`.

```js
var firstArray = [2, 4, 6, 8];
var secondArray = firstArray.slice(-2); // firstArray=[2,4,6,8], secondArray=[6,8]
```

3. `Array.length`

You can truncate the array, making it smaller by changing the array.length. See this example:

```js
var numbers = [1, 2, 3, 4, 5];
numbers.length = 3; // now numbers is [1, 2, 3]
```

Note: if you assign a length which is longer than current length, undefined array elements are introduced, as shown below.
