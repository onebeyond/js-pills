---
slug: "/pill/semicolon-usage"
date: "2021-02-25"
author: "Jorge Baumann"
title: "Semicolon usage"
description: "Semicolons are not required in JavaScript. This is because JavaScript has a feature called Automatic
Semicolon Insertion"
---

# Semicolon Usage

Semicolons `;` are not required in JavaScript. The following code is a valid JavaScript code:

```javascript
const hello = 'Hello'

function greet() {
  return hello
}
```

This is because JavaScript has a feature called **Automatic Semicolon Insertion** aka ASI.  
ASI puts semicolons in your JavaScript for you. It’s a part of the language and can not be disabled, it's always active.

ASI has a set of rules to insert semicolons. If there is already a semicolon, it won’t change anything.

Our previous code will be transformed into this one:

```javascript
const hello = 'Hello';  // <-- ASI

function greet() {
  return hello;         // <-- ASI
}
```

However, this source

```javascript
a = b + c
( d + e ).print()
```

is not transformed, because the expression that begins the second line can be interpreted as an argument
list for a function call:

```javascript
a = b + c( d + e ).print()
```

<br>

## Rules of ASI

The JavaScript parser will automatically add a semicolon when, during the parsing of the source code when:

1 - The next line starts with a `}`, closing the current block.  
2 - There is a `return`, `break`, `throw` or `continue` statement on its own line.  
3 - The end of the source code file is reached.

  
What does the following function return?
```javascript
function foo() {
  return
  {
    a: 1
  }
  ;
}
```
  
You forgot to put a semicolon, but doesn't matter. ASI kicked in and changed your code to:

```javascript
function foo() {
  return;         // <-- ASI
  {
    a: 1
  }
  ;
}
```

Because of ASI, the compiler places a semicolon after the return keyword and therefore it returns `undefined` without an error being thrown.

<br>

## Special characters

If you don't use semicolons, never start a line with `[`, `(`, `,`, `*`, `/`, `,`, `.`, `+`, `-`.


```javascript
// ✖︎︎ problem
(function() {
  console.log( 'hey, yo!' )
}())

// ✔ solution
;(function() {
  console.log( 'hey, yo!' )
}())
```

```javascript
// ✖︎︎ problem
[1, 2, 3].forEach( dude )

// ✔ solution
;[1, 2, 3].forEach( dude )

```

```javascript
// ✖︎︎ problem
`hey bro`.indexOf( 'o' )

// ✔ solution
;`hey bro`.indexOf( 'o' )
```