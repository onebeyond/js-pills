---
slug: "/pill/remove-falsy-values-from-an-array"
date: "2020-08-17"
author: ""
title: "Remove falsy values from an array"
description: "Remove falsy values from an array"
---
# Remove falsy values from an array

### First, what is a falsy (or falsy) value?

When we talk about falsy and truthy values, we just speak about the property of each value to be evaluated, in a boolean context, as a true or as a false. So, a value is truthy when is evaluated as true, and a value is falsy when is evaluated as false.

### So, in this point, which values are falsy in Javascript?

There are six different values are always falsy. They are: `false, null, 0, '', undefined, NaN`.

```js
const testTruthyOrFalsy = val => val ? 'truthy' : 'falsy';

testTruthyOrFalsy(0);  // falsy
testTruthyOrFalsy(false);  // falsy
testTruthyOrFalsy(undefined);  // falsy
testTruthyOrFalsy(null);  // falsy
testTruthyOrFalsy(NaN);  // falsy
```

Every other value will be truthy in Javascript.


### Ok, I got this, show me the good stuffs

Well, how can we use this information in real world, in our day by day? It is common to find arrays that have elements we don't need, usually falsy elements, and we need to remove them, and now we can see different ways we can do this.

```js
const dirtyArray = [0, 1, 'one', 2, '', 3, true, undefined, '5', false, 8, NaN, 'thirteen', Symbol('symbol')];
const falseyArray = [false, null, 0, '', undefined, NaN, -0 ];

```

#### - First Method => Boolean() function

In this case, we just transform every element of the array to `true` or `false`.

```js
const firstMethod = arr => arr.filter(elem => Boolean(elem));
// another easy way to write it
const sameFirstMethod = arr => arr.filter(Boolean);

firstMethod(dirtyArray); //  => [ 1, 'one', 2, 3, true, '5', 8, 'thirteen', Symbol(symbol) ]
firstMethod(falseyArray); // => []
```

#### - Second Method => !! operator

This Method is same as the previous one, but with a different sintaxis.

```js
const secondMethod = arr => arr.filter(elem => !!elem);

secondMethod(dirtyArray); //  => [ 1, 'one', 2, 3, true, '5', 8, 'thirteen', Symbol(symbol) ]
secondMethod(falseyArray); // => []
```

#### - Third Method => elem itself

For this Method, the filter method makes the same thing: evaluate if every element from the array is tru or not.

```js
const thirdMethod = arr => arr.filter(elem => elem);

thirdMethod(dirtyArray); //  => [ 1, 'one', 2, 3, true, '5', 8, 'thirteen', Symbol(symbol) ]
thirdMethod(falseyArray); // => []
```


### But all that glitters is not gold

Despite of the ease of these methods, we have to be careful with another values because they could be false friends. I introduce you them.

```js
const areFalsyOrNotArray = [ '0', 'false', [], {}, () => {} ];

firstMethod(areFalsyOrNotArray); //  => [ '0', 'false', [], {}, [Function] ];
secondMethod(areFalsyOrNotArray); //  => [ '0', 'false', [], {}, [Function] ];
thirdMethod(areFalsyOrNotArray); //  => [ '0', 'false', [], {}, [Function] ];
```

Actually, they have a little weird behaviour, because when empty objects or arrays are compared to a boolean, we have this:

```js
if ( [] == false ) {
    // this code runs
}
if ( [] ) {
    // this code also runs
}
if ([] == true) {
    // this code doesn't run
}
if ( ![] ) {
    // this code also doesn't run
}


if ( {} == false ) {
    // this code doesn´t run
}
if ( {} ) {
    // just this code runs
}
if ({} == true) {
    // this code doesn't run
}
if ( !{} ) {
    // this code also doesn't run
}

```
So, if you need to get rid of these empty stuffs, you will need to add some little logic to your method.

## Resources

- [Truthy and Falsy: When All is Not Equal in JavaScript](https://www.sitepoint.com/javascript-truthy-falsy/)
- [Falsy values](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
- [Remove all falsy values from an array](https://www.techiedelight.com/remove-all-falsy-values-from-an-array-in-javascript/)
- [Advanced Javascript: Logical Operators and truthy / falsy](https://www.nfriedly.com/techblog/2009/07/advanced-javascript-operators-and-truthy-falsy/)
