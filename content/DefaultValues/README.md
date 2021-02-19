---
slug: "/pill/set-default-values"
date: "2020-12-03"
author: ""
title: "Set Default Values"
description: "Here are four ways to set a default value for a variable in JavaScript, each one of them with its pros and cons."
---

# Set Default Values [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)

Here are four ways to set a default value for a variable in JavaScript, each one of them with its pros and cons.

This is useful when we want a default value to be overwritten only if a new value is set.

### ✅ Logical operator `||`

The first option is to set the default value with the logical operator `||`.

```js
const defaultLogical = (fruit) => {
  fruit = fruit || "apple";
  console.log("fruit is " + fruit);
};
defaultLogical(); // fruit is apple
defaultLogical("strawberry"); // fruit is strawberry
```

### ✅ Ternary operator

Another option we have is to set the default value by using the ternary operator.

```js
const defaultTernary = (fruit) => {
  fruit = fruit ? fruit : "apple";
  console.log("fruit is " + fruit);
};
defaultTernary(); // fruit is apple
defaultTernary("strawberry"); // fruit is strawberry
```

### ⚠️ Warning: falsy values

On the previous examples, if a falsy value like `''` or `0` is set on the variable, it will be overwritten by the default `apple`

```js
defaultLogical(0); // fruit is apple
defaultLogical(""); // fruit is apple
defaultLogical(undefined); // fruit is apple

defaultTernary(0); // fruit is apple
defaultTernary(""); // fruit is apple
defaultTernary(undefined); // fruit is apple
```

If we want to control this behavior, and keep the falsy as possible values, we can use the default parameter

### ✅ Default parameter

With this method, if we set a default value for a parameter inside a function, we can avoid it from being overwritten in the case of passing falsy value, and maintain this falsy value as the final one.

So, depending on the behavior we expect when a falsy value comes in, we might want to use one of the options above or this one.

```js
const defaultWithParameter = (fruit = "apple") => {
  console.log("fruit is " + fruit);
};

defaultWithParameter(0); // fruit is 0
defaultWithParameter(""); // fruit is ''
defaultWithParameter(); // fruit is apple
defaultWithParameter(undefined); // fruit is apple
defaultWithParameter("strawberry"); // fruit is strawberry
```

### ⚠️ Warning: `undefined`

As you can see in all previous cases, if the value is set to `undefined`, it will be overwritten by the default one provided. To control this, we could apply an if/else statement.

### ✅ If/else

This option gives us more control over the code, but is also more verbose. It is the best option if we need to perform additional actions for each scenario.

```js
const defaultIfElse = (fruit) => {
  if (fruit) {
    console.log("fruit is " + fruit);
  } else if (fruit === undefined) {
    console.log("fruit is undefined");
  } else if (fruit === "") {
    console.log("fruit is an empty string");
  } else if (fruit === 0) {
    console.log("fruit is 0");
  }
};
defaultIfElse("strawberry"); // fruit is strawberry
defaultIfElse(undefined); // fruit is undefined
defaultIfElse(""); // fruit is an empty string
defaultIfElse(0); // fruit is 0
```
