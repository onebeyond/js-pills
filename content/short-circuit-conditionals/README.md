---
slug: '/pill/short-circuit-conditionals'
date: '2021-03-12'
author: 'David Miguel Yusta'
title: 'Short circuit conditionals'
description: 'Short-circuit evaluation using logical AND (&&) and OR (||) operators to assing values'
---

### short-circuit-conditionals / evaluation

#### Remainding main "falsy" values

In JavaScript, the following expressions that are always false (converted to false):

- `null`
- `undefined`
- `NaN`
- `0`
- empty string

More details about "falsy" and "truthy" values on **[JSPill Converting to boolean using `!!` operator](../using-!!operator/README.md)**

#### How does it work?

Logical operators handle operands of different types converting them to Boolean

1. The evaluation starts from left to right
2. The value in the left side is converted to Boolean
3. Then it is decided what to return: either the original left side value or the right side value (the evaluation process may start again)

**Summary: the expression is evaluated from left to right until the results of the remaining condition is not going to affect the already evaluated resutl.**

### Short-circuit with logical AND (`&&`)

When a condition evaluates to `false`, the following conditions are not evaluated. In other words, the expression is evaluated until we get one `false` result (the result will be always `false` from this point).

```js
const john = {
  age: 19,
  hasMoney: false,
  dressCode: 'informal',
};

const jane = {
  age: 23,
  hasMoney: true,
  dressCode: 'formal',
};

const allowClubEntranceJohn =
  john.age > 18 && john.hasMoney && john.dressCode === 'formal';
// false due to hasMoney being false. dressCode is not evaluated

const allowClubEntranceJane =
  jane.age > 18 && jane.hasMoney && jane.dressCode === 'formal';
// true. All expressions are evaluated to true
```

### Short-circuit with logical OR (`||`)

When a condition evalutes to `true`, the remaining conditions are not evaluated. To put it another way, the expression is evaluated until we get a `true` result because the result will be always `true` onwards, no matter the result of further conditions.

```js
const john = {
  age: 17,
  hasMoney: true,
  dressCode: 'formal',
};

const jane = {
  age: 17,
  hasMoney: false,
  dressCode: 'informal',
};

const allowClubEntranceJohn =
  john.age > 18 || john.hasMoney || john.dressCode === 'formal';
// true due to hasMoney being true. dressCode is not evaluated

const allowClubEntranceJane =
  jane.age > 18 || jane.hasMoney || jane.dressCode === 'formal';
// false because all expressions are evaluated to false
```

### Other use cases

Before ES2020, we could avoid invalid references issues using the short circuit evaluation:

```js
const john = {
  bankDetails: {
    id: '604b2f9d5ed27d3cbe4e4028',
  },
  firstName: 'John',
  lastName: 'Doe',
};

const jane = {
  firstName: 'Jane',
  lastName: 'Doe',
};

const johnBankId = john.bankDetails && john.bankDetails.id;
// returns 604b2f9d5ed27d3cbe4e4028

const janeBankId = jane.bankDetails && jane.bankDetails.id;
// returns undefined since there is no bankDetails property on the jane object, avoiding invalid reference
```

With the new `Optional Chaining` operator `?.`, we don't need to use short circuit evaluation to prevent invalid refereces since if the reference does not exist, it will not access to its properties:

```js
const janeBankId = jane.bankDetails?.id;
// Same result as above example. returns undefined since there is no bankDetails property on
// the anotherPerson object, avoiding invalid reference
```

### Resource

- [Akhil sai: Short-circuit evaluation in Javascript](https://dev.to/akhil_001/short-circuit-evaluation-in-javascript-3o5a)
- [John C. Kennedy: JavaScript Short-Circuit Evaluation](https://medium.com/@codejockie/javascript-short-circuit-evaluation-b81cb493d992)
- [GeeksforGeeks: Javascript Short circuiting operators](https://www.geeksforgeeks.org/javascript-short-circuiting/)
- [Mozilla Org: Logical AND (&&)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)
- [Mozilla Org: Logical OR (||)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [Mehul Mohan: 10 New JavaScript Features in ES2020 That You Should Know](https://www.freecodecamp.org/news/javascript-new-features-es2020/)
- [Mozilla Org: Optional chaining (?.)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
