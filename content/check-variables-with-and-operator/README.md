---
slug: '/pill/check-variables-with-and-operator'
date: '2021-10-22'
author: 'David Miguel Yusta'
title: 'Check variables with && (and the new ?. operator)'
description: 'How to check values with the && (AND) operator and the ?. (optional chaning) operator'
---

### Check variables with && (and the new ?. operator)

### Remainding main _falsy_ values

In JavaScript, the following expressions that are always false (converted to false):

- `null`
- `undefined`
- `NaN`
- `0`
- `""` (empty string)

More details about _falsy_ and _truthy_ values on **[JSPill Converting to boolean using `!!` operator](../using-!!operator/README.md)**

### What is the && operator?

The `&&` (AND) operator is one of the four logical operators in Javascript. Despite of being called _logical_, they can be applied to values of any type, and their result can also be of any type.

It is commonly used in conditional expressions like:

```js
const wantToLearn = true;
const jsPill = 'check variables with &&';

if (wantToLearn && jsPill) {
  // returns true if both operands are truthy, false otherwise
  console.log('We want to learn how to use the && operator');
}
```

However, it has a more powerful usage in Javascript: **the short circuit evaluation**

### Short circuit evaluation

#### How does it work when checking variables?

```js
const result = val1 && val2 && val3;
```

When a condition evaluates to `false`, the following conditions are not evaluated. In other words, the expression is evaluated until we get one `false` result (the result will be always `false` from this point).

This is how it works in detail:

1. The evaluation starts from left to right
2. All operands are converted to boolean, and if the result is `false`, stops and returns the original value of the operand
3. If all the oprenads are evaluated (i.e. all were truthy), returns the last operand

**Summary: the expression is evaluated from left to right until the results of the remaining condition is not going to affect the already evaluated result.**

```js
const value1 = 1 && 2 && null && 3; // value1 = null

const value2 = 1 && 2 && 3; // value2 = 3
```

#### Other use cases

Before ES2020, we could avoid invalid references issues using the short circuit evaluation:

```js
const product = {
  externalSystems: {
    system1: {
      id: '604b2f9d5ed27d3cbe4e4028',
      timestamps: {
        created: '2021-10-22T06:31:39.989Z',
      },
    },
  },
};

const productSystem2Id =
  product1.externalSystems &&
  product1.externalSystems.system2 &&
  product1.externalSystems.system2.id;
// productSystem2Id = undefined
```

With the new `Optional Chaining` operator `?.`, we don't need to use short circuit evaluation to prevent invalid refereces since if the reference does not exist, it will not access to its properties:

```js
const productSystem2Id = product1.externalSystems?.system2?.id;
// Same result as above example. returns undefined since there is no system2
```

It can also be used with arrays and functions:

```js
obj.val?.prop;
obj.val?.[expr];
obj.arr?.[index];
obj.func?.(args);
```

### Tip of the day: Conditionally adding keys to objects

We may use a combiation of `&&` and `...` (spread operator)

```js
const user = {
  name: 'Jonh',
  age: 28,
};
const addEmail = true;
const addId = false;

const obj = {
  ...user,
  ...(addEmail && { email: 'john@email.com' }),
  ...(addId && { id: '604b2f9d5ed27d3cbe4e4028' }),
};
// obj = {name: 'John', age: 28, email: 'john@email.com' }
```

### Resource

- [Javascript.info: Logical operators](https://javascript.info/logical-operators)
- [Mozilla Org: Logical AND (&&)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)
- [Akhil sai: Short-circuit evaluation in Javascript](https://dev.to/akhil_001/short-circuit-evaluation-in-javascript-3o5a)
- [John C. Kennedy: JavaScript Short-Circuit Evaluation](https://medium.com/@codejockie/javascript-short-circuit-evaluation-b81cb493d992)
- [GeeksforGeeks: Javascript Short circuiting operators](https://www.geeksforgeeks.org/javascript-short-circuiting/)
- [Mozilla Org: Optional chaining (?.)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Mehul Mohan: 10 New JavaScript Features in ES2020 That You Should Know](https://www.freecodecamp.org/news/javascript-new-features-es2020/)
- [Amberley Romo: Conditionally Add to an Object or Array in JavaScript](https://amberley.dev/blog/2020-09-07-conditionally-add-to-array-or-obj/)
- [Michael Harrison: Conditionally adding keys to JavaScript objects using spread operators and short-circuit evaluation](https://medium.com/@mikeh91/conditionally-adding-keys-to-javascript-objects-using-spread-operators-and-short-circuit-evaluation-acf157488ede)
