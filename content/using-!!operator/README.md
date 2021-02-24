---
slug: "/pill/converting-to-boolean-using-!!-operator"
date: "2020-07-30"
author: ""
title: "Converting to boolean using `!!` operator"
description: "JavaScript has a Boolean data type. It can **only** take the values true or false, like YES/NO or ON/OFF"
---

# Converting to boolean using `!!` operator

### What is a boolean Value?

JavaScript has a Boolean data type. It can **only** take the values true or false, like YES/NO or ON/OFF

### But, what is true and what is false?

JavaScript is very flexible about the types of values it requires. If JavaScript wants a boolean, it will convert whatever value you give it to a boolean.

Some values (“truthy” values) convert to true and others (“falsy” values) convert to false.

# ❎ False

```js
false; // false
0 - // false
  0; // false
0n; // false
(""); // false
null; // false
undefined; // false
NaN; // false
```

# ✅ True

```js
true // true
42 // true
-13.3 // true
Infinity // true
-Infinity // true
{} // true ❗
[] // true ❗
"false" // true ❗
"0" // true ❗
" " // true ❗
...
```

### Then, What !! is for?

A single “!” symbol in Javascript, also called a “bang”, is the logical “not” operator. If you place this operator in front of a value, it will converse it to boolean and reverse the value, returning the opposite. So, running a bang twice determines the opposite of value, and then returns the opposite of that.

(So `!!` is not an operator, is just the `!` operator used twice)

```js
!!0; // return false
!!42; // return true
!!parseInt("foo"); // return false, NaN is falsy
!!window.foo; // return false, undefined is falsy
!!""; // return false
```

### An example please

Sometimes you need to check whether the value of a variable exists and whether it is valid, so that in these cases we consider them true.

```js
function BankAccount(cash) {
  this.cash = cash;
  this.hasMoney = !!cash;
}
let account = new BankAccount(100.5);
console.log(account.cash); // 100.50
console.log(account.hasMoney); // true

let emptyAccount = new BankAccount(0);
console.log(emptyAccount.cash); // 0
console.log(emptyAccount.hasMoney); // false
```

<br/>

### Combination with && operator

When you use `&&` operator, if the first object is falsy, it returns that object

```js
false && "dog";
// ↪ false

0 && "dog";
// ↪ 0

!!0 && "dog";
// ↪ false
```

### A real life example please

`!!` Might be useful when libraries expect explicit Boolean values, for instance React ⚛️

```js
{
  jobs.length && jobs.map((job) => <CardJob job={job} />);
}
{
  jobs.length === 0 && <h1>No jobs to show</h1>;
}
```

⚠️ if jobs.length = 0, it will return 0, so te correct way is:

```js
{
  !!jobs.length && jobs.map((job) => <CardJob job={job} />);
}
{
  jobs.length === 0 && <h1>No jobs to show</h1>;
}
```

You also probably used `foo > 0` or `foo != ""` for the same cases

## And what about boolean()?

The result is the same, but according to this test looks like !! is faster than boolean()
[Test !! vs boolean()](https://jsperf.com/bool-not-not)

## ⛔ Never use object new boolean()

Do not create Boolean objects. It slows down execution speed.
The new keyword complicates the code. This produce unexpected results

## Resources

- [Samantha Ming Tidbits: 2 Ways to Convert Values to Boolean in JavaScript](https://www.samanthaming.com/tidbits/19-2-ways-to-convert-to-boolean/)
- [Andela: Javascript convert to boolean using !!(double bang)operator](https://andela.com/insights/javascript-convert-to-boolean-using-double-bangoperator/)
- [stackoverflow: What is the !! (not not) operator in JavaScript?](https://stackoverflow.com/questions/784929/what-is-the-not-not-operator-in-javascript/1406621)
- [techy360: 11 useful JavaScript tips and tricks](https://techy360.com/11-useful-javascript-tips-and-tricks/)
