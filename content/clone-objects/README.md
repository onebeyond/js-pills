---
slug: "/pill/clone-javascript-objects"
date: "2020-10-16"
author: ""
title: "Clone Javascript Objects"
description: "Objects in Javascript are references values, so you can't just copy using assing operator `=`"
---

# Clone Javascript Objects

Objects in Javascript are references values, so you can't just copy using assing operator `=`

```js
const car1 = { doors: 4, color: "blue" };
const car2 = car1;
car2.doors = 2;
console.log(car2); //{ doors: 2, color: 'blue' };
console.log(car1); //{ doors: 2, color: 'blue' }; 👀
```

I changed `car2` but `car1` also affected. It's because, when you use `=`, really you are copied the pointer to the memory space it occupies. Reference types don't hold values, they are a pointer to the value in memory. To achive _real_ clone, here are 2 ways:

## Shallow clone

It makes a superficial clone of an object

#### Using Object.assing

The oldest way to do it. How we want clone an object, we start with empty object `{}` for source

```js
const car1 = { doors: 4, color: "blue" };
const car2 = Object.assing({}, car1);
car2.doors = 2;
console.log(car2); //{ doors: 2, color: 'blue' };
console.log(car1); //{ doors: 4, color: 'blue' }; ✅
```

#### Using Spread Operator

Since ECMAScript 6, we have available spread operator `...`

```js
const car1 = { doors: 4, color: "blue" };
const car2 = { ...car1 };
car2.doors = 2;
console.log(car2); //{ doors: 2, color: 'blue' };
console.log(car1); //{ doors: 4, color: 'blue' }; ✅
```

But remember, this way do a shallow clone. It means that, if you have nested objects, they won't be cloned and we'll have a reference again

```js
const car1 = { doors: 4, color: "blue" };
car1.specs = { speed: 100, longitude: 300 };
const car2 = { ...car1 };
car2.specs.speed = 150;
console.log(car2); //{ doors: 4, color: 'blue', specs: { speed: 150, longitude: 100} };
console.log(car1); //{ doors: 4, color: 'blue', specs: { speed: 150, longitude: 100} };  👀
```

## Deep clone:

If we've interested on cloning nested objects too, we need a deep clone

#### Using JSON

This is a quick dirty way to get a deep clone. It has native support, so you don't need external deps. In practice, it is used more than it seems

```js
const car1 = { doors: 4, color: "blue", specs: { speed: 100, longitude: 300 } };
const car2 = JSON.parse(JSON.stringify(car1));
car2.specs.speed = 150;
console.log(car2); //{ doors: 4, color: 'blue', specs: { speed: 150, longitude: 100} };
console.log(car1); //{ doors: 4, color: 'blue', specs: { speed: 100, longitude: 100} };  ✅
```

But not everything is so good. JSON method doesn't work with functions and order of properties in the cloned object may be different

```js
const car1 = { doors: 4, color: "blue", specs: { speed: 100, longitude: 300 } };
car1.paint = function (newColor) {
  this.color = newColor;
};
const car2 = JSON.parse(JSON.stringify(car1));
console.log(car2); //{ doors: 4, color: 'blue', specs: { speed: 100, longitude: 100}, paint: f };
console.log(car1); //{ doors: 4, color: 'blue', specs: { speed: 100, longitude: 100} };  👀
```

### Using external library

There are a lot of libraries (or you can create yourself 😎) that have a method for deep cloning. The most famous for me is `lodash`

```js
import { cloneDeep } from "lodash";

const car1 = {
  doors: 4,
  color: "blue",
  specs: {
    speed: 100,
    longitude: 300,
  },
  paint: function (newColor) {
    this.color = newColor;
  },
};
const car2 = cloneDeep(car1);
console.log(car2); //{ doors: 4, color: 'blue', specs: { speed: 100, longitude: 100}, paint: f };
console.log(car1); //{ doors: 4, color: 'blue', specs: { speed: 100, longitude: 100}, paint: f };  ✅
```

## References

- [Samantha Ming Tidbits: 3 Ways to Clone Objects in JavaScript](https://www.samanthaming.com/tidbits/70-3-ways-to-clone-objects/)
- [MDN spread operator doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [Lodash cloneDeep doc](https://lodash.com/docs/4.17.15#cloneDeep)
