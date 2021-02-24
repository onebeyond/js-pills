---
slug: "/pill/console-methods-explained"
date: "2020-11-18"
author: ""
title: "Console methods explained"
description: "Console methods explained"
---
# Console methods explained

## 🆒 Console outputs and levels
* `console.log` Normal output to stdout
  
  
* `console.info` Normal output to stdout with log level `info`

  
* `console.error` Output is displayed at stderr

  
* `console.warn` Warn output is displayed at stdout with log level `warn`

  
* `console.debug` Output to stdout with log level `debug`

Examples:

```js
console.log('This is a normal log line');
console.info('This is a infomation line');
console.error('This is a error line');
console.warn('This is a warning line');
console.debug('This is a debug line');
```

## 🆒 Console utilities
* `console.clear` Clear the console

* `console.count(label)` Log the number of times this line has been called with same label
* `console.countReset(label)` Reset the counter for given label

Example:
```js
console.count('test');
// Output should show: test: 1
console.count('test');
// Output should show: test: 2
console.count('test');
// Output should show: test: 3
console.countReset('test');
console.count('test');
// Output should show: test: 1
```

* `console.time(label)` Starts a timer to a given label
* `console.timeLog(label)` Show the value of the specified timer label (in miliseconds)
* `console.timeEnd(label)` Stops and show the timer of given label (in miliseconds)

Example:

```js
console.timer('testTimer');
// wait 1 second
console.timerLog('testTimer');
// Output should show: testTimer: 1.000 ms
// and wait 1.5 seconds :P
console.timerEnd('testTimer');
// Output should show: testTimer: 2.500 ms
```
## 🆒 Using console to display data
* `console.dir(object)` Display the given object as JSON tree

* `console.table(object, [columns])` Displays tabular data as a table (Array, Sets...) you can filter what `columns` you want to show

Examples:

```js
const arrayOfObjects = [
  {
    name: 'one',
    odd: false,
    count: 1,
  },
  {
    name: 'two',
    odd: true,
    count: 2,
  },
  {
    name: 'one',
    odd: false,
    count: 3,
  },
];

// Display as JSON tree
console.dir(arrayOfObjects);

// Output:
// [
//   { name: 'one', odd: false, count: 1 },
//   { name: 'two', odd: true, count: 2 },
//   { name: 'one', odd: false, count: 3 }
// ]

// Render a table with all columns
console.table(arrayOfObjects);

// Output
// ┌─────────┬───────┬───────┬───────┐
// │ (index) │ name  │  odd  │ count │
// ├─────────┼───────┼───────┼───────┤
// │    0    │ 'one' │ false │   1   │
// │    1    │ 'two' │ true  │   2   │
// │    2    │ 'one' │ false │   3   │
// └─────────┴───────┴───────┴───────┘

// Render a table filtering columns
console.table(arrayOfObjects, ['name', 'odd']);

// Output
// ┌─────────┬───────┬───────┐
// │ (index) │ name  │  odd  │
// ├─────────┼───────┼───────┤
// │    0    │ 'one' │ false │
// │    1    │ 'two' │ true  │
// │    2    │ 'one' │ false │
// └─────────┴───────┴───────┘

```

## 🆒 Error handling and debug utilities
* `console.trace( message, object)`

```js
const testObject = { awesome: true, boring: false };
console.trace('Trace dump text', testObject );

// Output
Trace: Trace dump text { awesome: true, boring: false }
    at Object.<anonymous> (/code/guidesmiths/js-pills/basic/console-explained/index.js:48:9)
    at Module._compile (internal/modules/cjs/loader.js:1138:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1158:10)
    at Module.load (internal/modules/cjs/loader.js:986:32)
    at Function.Module._load (internal/modules/cjs/loader.js:879:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)
    at internal/main/run_main_module.js:17:47

```

* `console.assert(assertion, message)` writes an error message to the console if the assertion is false. If the assertion is true, nothing happens.

```js
const x = 5;
const y = 3;
const reason = `${x} is expected to be less than ${y}`;
console.assert(x < y, reason);

// Output
Assertion failed: 5 is expected to be less than 3

```