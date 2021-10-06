---
slug: '/pill/prototype-pollution'
date: '2021-10-04'
author: 'Giorgio Grassini'
title: 'Prototype pollution'
description: 'This pill explain what a Prototype pollution is and how to prevent it'
---

# Prevent prototype pollution

### Whats a prototype?

Prototypes are the mechanism by which JavaScript objects inherit features from one another.

```js
function Character(x, y) {
  this.x = x;
  this.y = y;
}

Character.prototype.mover = function (dx, dy) {
  this.x += dx;
  this.y += dy;
};

let p1 = new Character(1, 1);

p1.mover(5, 1);
console.log(p1.x); // 6
console.log(p1.y); // 2
```

In this example the function `Character`, javascript will create automatically a `prototype` object, which contains a `constructor` property with the Character function `constructor: Character(x, y)`.
When you create a new instance of Character with the reserved word `new`, the new created objects will inherit all the properties of `Character`.

### Whats a prototype pollution?

In JavaScript you can altered all Object attributes such as _proto_, constructor and prototype.

```js
Object.prototype.polluted = true;

let obj = {};

obj.polluted; // true
```

An attacker manipulates these attributes to overwrite, or pollute, a JavaScript application object prototype of the base object by injecting other values. Properties on the `Object.prototype` are then inherited by all the JavaScript objects through the prototype chain.

One main ways in which the pollution of prototypes occurs due to unsafe Object recursive merge

```js
let firstObj = {};

console.log('firstObject Before Polluting : ' + firstObj.Check);
// firstObject Before Polluting : undefined

let secondObj = Object.assign(
  firstObj,
  JSON.parse('{ "__proto__": { "Check": "polluted"} }')
);

console.log('firstObject After Polluting: ' + firstObj.Check); // firstObject After Polluting: polluted
console.log('secondObject After Polluting: ' + secondObj.Check); // secondObject After Polluting: polluted
```

### What are the consequences?

Prototype pollution can lead to practically all popular web vulnerabilities: remote code execution (RCE), cross-site scripting (XSS), SQL injection, ...

On web browsers, prototype pollution commonly leads to XSS attacks. In 2019, a prototype pollution bug found in JavaScript library jQuery left many web applications vulnerable to such assaults.

### How to prevent it?

- **Object.create(null):**
  It’s possible to create object in JavaScript that don’t have any prototype. It requires the usage of the Object.create function. Object created through this API won’t have the **proto** and constructor attributes.

  ```js
  let obj = Object.create(null);
  obj.__proto__; // undefined
  obj.constructor; // undefined
  ```

- **Freezing the prototype:**

  ```js
  Object.freeze(Object.prototype);
  Object.freeze(Object);
  ({}.__proto__.test = 123);
  ({}.test); // undefined
  ```

- **Schema validation of JSON input:**
  Multiple library on npm (ej.: [ajv](https://www.npmjs.com/package/ajv) ) offer schema validation for JSON data. Schema validation ensure that the JSON data contains all the expected attributes with the appropriate type.

- **Using Map instead of Object:**
  A Map object iterates its elements in insertion order — a for...of loop returns an array of [key, value] for each iteration. similar to an object but without all the security caveats

Reference:

- https://youtu.be/2GLXIUv8hmM?t=2693
- https://github.com/HoLyVieR/prototype-pollution-nsec18/blob/master/paper/JavaScript_prototype_pollution_attack_in_NodeJS.pdf
- https://stackoverflow.com/questions/57780961/how-to-prevent-prototype-pollution-in-javascript
