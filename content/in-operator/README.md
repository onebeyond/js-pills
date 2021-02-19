---
slug: "/pill/in-operator"
date: "2020-12-05"
author: ""
title: "In operator"
description: "The `in` operator returns true if the specified property is in the specified object or its prototype chain."
---
# In operator [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in)

## Definition 📚 

The `in` operator returns true if the specified property is in the specified object or its prototype chain.

## Syntax 📝

```js
prop in object

const object = { prop1: 'value1', prop2: 'value2', prop3: 'value3' };
'prop1' in object; // expected output: true
```

Parameters:

- `object`: Object to check if it (or its prototype chain) contains the property with specified name (prop).
- `prop`: A string or symbol representing a property name or array index (non-symbols will be coerced to strings).

## Examples of usage 📐

###  Basic usage Objects 🗝

First, a basic example that check if a property is in an object:

```js
// Custom objects
const car = { make: 'Honda', model: 'Accord', year: 1998 };

'make' in car // true

'irrelevant' in car // false

// Predefined objects
'PI' in Math //  true
```

We can see that in operator returns a boolean true when the property exists in an object.

### Basic usage Arrays 🛋

We can also do the same using `in` operator with arrays:

```js
let people = new Array('bob', 'trollete', 'patrick', 'anne', 'tim');
0 in people //  true
3 in people //  true
6 in people //  false
'trollete' in people //  false (you must specify the index number, not the value at that index)
'length' in people //  true (length is an Array property)
```

Which is useful for checking the position of elements in an array

### Object right side operator 🛀

You must specify an object on the right side of the in operator.
For example, you can specify a string created with the String constructor, but you cannot specify a string literal.

```js
let color1 = new String('green')
'length' in color1 //  true (color1 is a String object)

let color2 = 'coral'
'length' in color2 // generates an error (color2 is not a String object)
```

### Using in with deleted or undefined properties 🔪

If you delete a property with the `delete` operator, the `in` operator returns `false` for that property.

```js
let mycar = {make: 'Honda', model: 'Accord', year: 1998}
delete mycar.make
'make' in mycar // false

let people = new Array('bob', 'trollete', 'patrick', 'anne', 'tim');
delete people[1]
1 in people  // false
```

If you set a property to `undefined` but do not delete it, the `in` operator returns `true` for that property.

```js
let mycar = {make: 'Honda', model: 'Accord', year: 1998}
mycar.make = undefined
'make' in mycar   // returns true

let people = new Array('bob', 'trollete', 'patrick', 'anne', 'tim');
people[4] = undefined
4 in people  // returns true
```

The `in` operator will return `false` for empty array slots. Even if accessing it directly returns `undefined` .

```js
let empties = new Array(3)
empties[2] // returns undefined
2 in empties  // returns false

let empties = new Array(3).fill(undefined)
2 in empties  // returns true
```
To avoid this, make sure a new array is always filled with non-empty values

## Browser compatibility 🔌

|        | ✅     | ✅   | ✅      | ✅       | ✅   | ✅    |
| ------ | ------ | ---- | ------- | -------- | ----- | ------ |
| 💻     | Chrome | Edge | Firefox | Explorer | Opera | Safari |
| in     | 1      | 12   | 1       | 1        | 4     | 1      |
