---
slug: "/pill/array-prototype-every()"
date: "2020-06-26"
author: ""
title: "Array.prototype.every()"
description: "This method tests if all the elements in array meets the condition in the provided function."
---

# Array.prototype.every()

This method tests if all the elements in array meets the condition in the provided function.

## Example 1:

I want to check if all the pets in the list are dogs:

```js
const petsList = [
  {
    name: "Cody",
    type: "dog",
  },
  {
    name: "Garfield",
    type: "cat",
  },
  {
    name: "Bugs",
    type: "rabbit",
  },
];
console.log(petsList.every((pet) => pet.type === "dog")); // false
```

## Example 2:

I want to check if all the people in a night club are over 18 years old, otherwise the owners will get in troubles.

```js
const attendeesAge = [18, 21, 40, 24, 25];
console.log(attendeesAge.every((attendeeAge) => attendeeAge >= 18)); // true
```

## Example 3:

I want to check if all the students have finished the exam, wether they passed or not

```js
const studentsExam = [
  {
    id: 1,
    finishedExam: true,
  },
  {
    id: 2,
    finishedExam: true,
  },
  {
    id: 3,
    finishedExam: true,
  },
];
console.log(studentsExam.every((student) => student.finishedExam)); // true
```
