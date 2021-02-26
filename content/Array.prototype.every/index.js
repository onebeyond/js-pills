// EXAMPLE 1
const petsList = [
  {
    name: 'Cody',
    type: 'dog',
  },
  {
    name: 'Garfield',
    type: 'cat',
  },
  {
    name: 'Bugs',
    type: 'rabbit',
  },
];
console.log('Example 1:');
console.log(
  'Are all the pets dogs?',
  petsList.every(pet => pet.type === 'dog')
);

// EXAMPLE 2
const attendeesAge = [18, 21, 40, 24, 25];
console.log('Example 2:');
console.log(
  'Are all the attendees over 18 years old?',
  attendeesAge.every(attendeeAge => attendeeAge >= 18)
);

// EXAMPLE 3
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
console.log('Example 3:');
console.log(
  'Have all the students finished the exam?',
  studentsExam.every(student => student.finishedExam)
);
