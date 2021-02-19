---
slug: "/pill/currying"
date: "2020-07-09"
author: ""
title: "Currying"
description: "This is a technique which involves converting a function which takes multiple arguments into a series of smaller cascaded functions which each take a single argument and return a function, except for the last cascaded function which returns the final result."
---

# Currying

This is a technique which involves converting a function which takes multiple arguments into a series of smaller cascaded functions which each take a single argument and return a function, except for the last cascaded function which returns the final result.

So essentially this is the transformation of a function that can be called as `f(a, b, c)` into a function that can be called as `f(a)(b)(c)`.

## Example with javascript

Uncurried adder function taking multiple arguments:

```js
const adder = (a, b) => a + b;
adder(99, 1) === 100;
```

Several examples of curried versions:

```js
const es6CurriedAdder = (a) => (b) => adder(a, b);
es6CurriedAdder(99)(1) === 100;
```

```js
function oldSchoolCurriedAdder(a) {
  return adder.bind(null, a);
}
oldSchoolCurriedAdder(99)(1) === 100;
```

```js
const hybridCurriedAdder = (a) => adder.bind(null, a);
hybridCurriedAdder(99)(1) === 100;
```

## Relationship to partial application

Partial application can be considered the binding of one or more arguments of a curried function

```js
const partiallyApplied = es6CurriedAdder(99);
partiallyApplied(1) === 100;
```

### References

[https://javascript.info/currying-partials](https://javascript.info/currying-partials)

[https://youtu.be/iZLP4qOwY8I](https://youtu.be/iZLP4qOwY8I)

[https://towardsdatascience.com/javascript-currying-vs-partial-application-4db5b2442be8](https://towardsdatascience.com/javascript-currying-vs-partial-application-4db5b2442be8)
