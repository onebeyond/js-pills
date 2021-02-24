---
slug: "/pill/check-conditions-concurrently"
date: "2020-11-18"
author: ""
title: "Check conditions concurrently"
description: "_A system is said to be **concurrent** if it can support two or more actions in progress at the same time. A system is said to be **parallel** if it can support two or more actions executing simultaneously._"
---

# Check conditions concurrently

> _A system is said to be **concurrent** if it can support two or more actions in progress at the same time. A system is said to be **parallel** if it can support two or more actions executing simultaneously._

> <br/>[The Art of concurrency](http://shop.oreilly.com/product/9780596521547.do)

We come up with a (curried) function which is able to evaluate a variable number of possibly asynchronous functions over a value with in a concurrent way.

```js
const checkConditions = (...predicates) => (value) =>
  Promise.all(predicates.map((p) => p(value))).then((results) =>
    results.reduce((acc, value) => acc && value, true)
  );
```

or, actually, taking advantage of native array (list) functions, the same can be rewritten as:

```js
const idempotence = (x) => x;
const checkEveryCondition = (...predicates) => (value) =>
  Promise.all(predicates.map((p) => p(value))).then((results) =>
    results.every(idempotence)
  );
```

## Description

The `...predicates` means a variable number of arguments. Calling the function with just _predicate functions_ will produce a function which accepts just a value to apply the functions over.

The body of the function is quite easy to understand:

- `Promise.all` expects an array of promises, which is achieved by a mapping over the _predicate functions_
- The `map`ping will produce an array of promises, already _resolved_ if the function applied is synchronous, or waiting for being _resolved_ or _rejected_ if they are asynchronous.
- In this _mapping_ the asynchronous functions are being executed in a concurrent way, speeding up the process.
- In the `then` block the results of the promises are reduced, resolving to a _truthy_ value only if all the promises were resolved to _truthy_ values.
- _Remark_: when calling this function we'll need a `catch` block if _promises_ are used or enclose the call in a `try/catch` if using _async/await_.

## Examples

It is possible from the function above set custom conditions based on a list of functions, either synchronous or asynchronous.

```js
// synchronous predicates
const divBy2 = (v) => v % 2 === 0;
const divBy3 = (v) => v % 3 === 0;
const divBy5 = (v) => v % 5 === 0;
// when calling, given the function predicates are synchronous, they will run sequentally
const divBy2and3and5SyncCheck = checkConditions(divBy2, divBy3, divBy5);

// asynchronous predicates
const divBy2Async = (v) =>
  new Promise((resolve) => setTimeout(() => resolve(v % 2 === 0), 1000));
const divBy3Async = (v) =>
  new Promise((resolve) => setTimeout(() => resolve(v % 3 === 0), 500));
const divBy5Async = (v) =>
  new Promise((resolve) => setTimeout(() => resolve(v % 5 === 0), 1000));
// when calling, given the function predicates are async, the functions will run concurrentlly
const divBy2and3and5AsyncCheck = checkConditions(
  divBy2Async,
  divBy3Async,
  divBy5Async
);

const mixedCheck = checkConditions(divBy2, divBy5Async);
```

Calls are done in a similar way:

```js
const isDivBy2and3and5Sync = await divBy2and3and5AsyncCheck(10); // false
const isDivBy2and3and5ASync = await divBy2and3and5AsyncCheck(30); // true
const isDivBy2and5 = await mixedCheck(10); // true
```

But don't forget catching errors

```js
const isaNumberAsync = (v) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      if (typeof v === "number") resolve(true);
      else reject(new Error(`Not a number: ${v}`));
    }, 1800)
  );
const isNumAndDivBy2 = checkConditions(isaNumberAsync, divBy2Async);

// using await
try {
  const result = await isNumAndDivBy2(29);
  console.log(result);
} catch (err) {
  console.error("Process error");
}

// or using promises
isNumAndDivBy2(29)
  .then((result) => console.log(`Process result: ${result}`))
  .catch((err) => console.error("Process error"));
```
