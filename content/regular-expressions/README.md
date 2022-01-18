---
slug: "/pill/regular-expressions"
date: "2022-01-18"
author: "Hamsa Aldrobi"
title: "RegEx: basic functions and groups property"
description: "A regular expression is a sequence of characters that specifies a search or a pattern. Some of the functions are exec() and test(), in this js-pill we will see the basic functions and the groups property adventages."
---
# ReGex [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

A regular expression is a sequence of characters that specifies a search pattern.

## Used to
1. Validate Text.
2. Search through Text.

## Create a regular expression

1. Using a regular expression literal, which consists of a pattern enclosed between slashes, as follows:
```js
let re = /ab+c/;
```
2. Or calling the constructor function of the RegExp object:
```js
let re = new RegExp('ab+c');
```

# Using regular expressions in JavaScript

Regular expressions are used with the RegExp methods test() and exec() and with the String methods match(), replace(), search(), and split().

+ `exec()` Executes a search for a match in a string. It returns an *array* of information or *null* on a mismatch.

+ `test()` Tests for a match in a string. It returns *true* or *false*.
---
+ `match()` Returns an *array* containing all of the matches, including capturing groups, or *null* if no match is found.

+ `matchAll()` Returns an *iterator* containing all of the matches, including capturing groups.

+ `search()` Tests for a match in a *string*. It returns the index of the match, or -1 if the search fails.

+ `replace()` Executes a search for a match in a *string*, and replaces the matched substring with a replacement substring.

+ `replaceAll()` Executes a search for all matches in a *string*, and replaces the matched substrings with a replacement substring.

+ `split()` Uses a regular expression or a fixed *string* to break a string into an array of substrings.

# Using groups property


When we have a String which we know has a format, we can collect the parts that make up the string to separate it into different variables for our future operations. 

```js
const RE_DATE = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;

const matchObj = RE_DATE.exec('1999-12-31');
const year = matchObj[1]; // 1999
const month = matchObj[2]; // 12
const day = matchObj[3]; // 31
```

Referring to capture groups via numbers has several disadvantages:
- Finding the number of a capture group is a hassle: you have to count parentheses.
- You need to see the regular expression if you want to understand what the groups are for.
- If you change the order of the capture groups, you also have to change the matching code.

However, capture groups are an all-around superior solution. Which is about identifying capture groups via names.

```js
const RE_DATE = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
const matchObj = RE_DATE.exec('1999-12-31');
const year = matchObj.groups.year; // 1999
const month = matchObj.groups.month; // 12
const day = matchObj.groups.day; // 31
```

We can combine other functions, for example the `replace()` and named capture groups

```js
const RE_DATE = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
console.log('1999-12-31'.replace(
    RE_DATE,
    (g0,y,m,d,offset,input, {year, month, day}) => // (A)
        month+'/'+day+'/'+year));
    // 12/31/1999
```

We can do the same thing with telephone numbers, dates, emails, sites, etc.