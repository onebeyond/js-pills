---
slug: "/pill/replace-all"
date: "2021-01-16"
author: ""
title: "Replace all"
description: "We're presenting several ways to replace all the occurrences of a substring within a string in Javascript."
---

# Replace all

We're presenting several ways to replace all the occurrences of a substring within a string in Javascript.

## `.replace()` only replaces the first occurrence!!

<details><summary>spoiler</summary>
It's usual that the first time you tried to replace a substring inside a string you use `.replace()`:

```js
const str = 'To be or not to be, that is the question';
str.replace('be', 'CODE');
> 'To CODE or not to be, that is the question'
```

</details>

## Use a loop

<details><summary>spoiler</summary>
As you can see, when we use the replace method, only the first occurrence is replaced... and nope, there are no hidden parameters on this function to change this behavior.

A first approach to solve this issue is to use a loop. We could call the replace method as many times as needed until all the occurrences are replaced:

```js
let str = 'To be or not to be, that is the question';
while (str.indexOf('be') > 0) {
  str = str.replace('be', 'CODE');
}
>'To CODE or not to CODE, that is the question'
```

The loop solves the issue, but... it's a loop and we need to mutate the string to check we need to stop or not. Not very fancy.

</details>

## One-liner non-mutating solution

<details><summary>spoiler</summary>
If you wanted a one-liner solution, I've seen things like that in the Internet. It seems smart but its performance is poor:

```js
const str = "To be or not to be, that is the question";
str.split("be").join("CODE") > "To CODE or not to CODE, that is the question";
```

</details>

## RegExp to the help

<details><summary>spoiler</summary>
So, the Regular Expressions can help us here.
A one-liner smart solution for this issue is to use them. So we can, instead of trying to replace the string 'be', use a RegEx with be to do it: `/be/`

```js
const str = "To be or not to be, that is the question";
str.replace(/be/, "CODE") > "To CODE or not to be, that is the question";
```

Wait a minute! This didn't work...

</details>
<details><summary>spoiler</summary>
Well, we have to know how RegExs work. We are missing the `g` modifier for globally in the RegEx, without it, the replace will work the same way it did with the string.

But if we use the RegEx properly, this behavior will change for good:

```js
const str = "To be or not to be, that is the question";
str.replace(/be/g, "CODE") > "To CODE or not to CODE, that is the question";
```

Here, the key was using the `g` modifier: `/be/g`

</details>

## The future

<details><summary>spoiler</summary>
From August 2020 we have a new fresh alternative for replacing all the occurrences: Yes, a native method call `.replaceAll()` !!

This method works just as expected:

```js
const str = "To be or not to be, that is the question";
str.replaceAll("be", "CODE") > "To CODE or not to CODE, that is the question";

str.replaceAll("/be/g", "CODE") >
  "To CODE or not to CODE, that is the question";
```

🚫🚫🚫🚫 But this method is not implemented for all browsers _or even Node.js_ yet 😱😱😱.

Please, check the compatibility chart.

</details>

## Browser compatibility 🔌

|                                                                                                                  | ⚠️  | ✅   | ✅      | ✅     | ✅     | ✅    | ✅      | ⚠️              |
| ---------------------------------------------------------------------------------------------------------------- | --- | ---- | ------- | ------ | ------ | ----- | ------- | --------------- |
| 💻                                                                                                               | IE  | Edge | Firefox | Chrome | Safari | Opera | Node.js | Android Browser |
| [replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)       | 9   | 12   | 2       | 4      | 3.1    | 10    | 0.1.100 | 2.1             |
| [replaceAll](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) | -   | 85   | 77      | 85     | 13.1   | 71    | - 😱😱  | -               |

## Resources
