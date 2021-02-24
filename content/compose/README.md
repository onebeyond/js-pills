---
slug: "/pill/compose"
date: "2020-11-19"
author: ""
title: "compose"
description: "Compose is a system design principle that allows us to dynamically comibine serveral funcions and returns the resut."
---

# Compose

## What is compose

Compose is a system design principle that allows us to dynamically comibine serveral funcions and returns the resut.

#### Example without compose

```js
// data -> fn -> data -> fn -> data

const add1 = (n) => n + 1;
const multiplyBy5 = (n) => n * 5;
const minus10 = (n) => n - 10;

const calculate = (n) => {
  const a = add1(n);
  const b = multiplyBy5(a);
  const c = minus10(b);
  return c;
};

const result = calculate(2);
```

But we now can do it by composing these three functions, like this:

#### Example with compose

```js
const composeResult = compose(minus10, multiplyBy5, add1)(2);
const pipeResult = pipe(add1, multiplyBy5, minus10)(2);
```

## Implementation

```js
const composeReducer = (fn1, fn2) => (...args) => fn1(fn2(...args));
const pipeReducer = (fn1, fn2) => (...args) => fn2(fn1(...args));

const compose = (...fns) => fns.reduce(composeReducer);
const pipe = (...fns) => fns.reduce(pipeReducer);

//compose
// (...args) => minus10(multiplyBy5(...args)) --->acc
// (...args) => acc(add1(…args)) --->acc

//pipe
// (...args) => multiplyBy5(add1(...args)) --->acc
// (...args) => minus10(acc(...args)) --->acc
```

### References

[A quick introduction to pipe() and compose() in JavaScript](https://medium.com/free-code-camp/pipe-and-compose-in-javascript-5b04004ac937)
