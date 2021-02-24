---
slug: "/pill/assert-testing"
date: "2021-02-12"
author: ""
title: "Assert Testing"
description: "The assert module provides a set of assertion functions for verifying invariants."
---
# Assert testing
The assert module provides a set of assertion functions for verifying invariants.

### In case there is a false return from the condition

Throws value if value is not undefined or null. This is useful when testing the error argument in callbacks. The stack trace contains all frames from the error passed to ifError() including the potential new frames for ifError() itself.

```js
assert.ifError(new Error());
// AssertionError [ERR_ASSERTION]: ifError got unwanted exception: Error
```

### Compare multiple values

```js
const assert = require('assert').strict;

assert.strictEqual(1, 2);
// AssertionError [ERR_ASSERTION]: Expected inputs to be strictly equal:
//
// 1 !== 2

assert.strictEqual(1, 1);
// OK
```

```js
// This fails because 1 !== '1'.
assert.deepStrictEqual({ a: 1 }, { a: '1' });
// AssertionError: Expected inputs to be strictly deep-equal:
// + actual - expected
//
//   {
// +   a: 1
// -   a: '1'
//   }

assert.deepStrictEqual({ a: 1 }, { a: 1 });
// OK
```

# To do not match

Expects the string input not to match the regular expression.

```js
assert.doesNotMatch(123, /pass/);
// AssertionError [ERR_ASSERTION]: The "string" argument must be of type string.

assert.doesNotMatch('I will pass', /different/);
// OK
```
