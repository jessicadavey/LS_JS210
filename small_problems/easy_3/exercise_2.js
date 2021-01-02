function formatArray(array) {
  return `[${array.join(', ')}]`;
}

const rlSync = require('readline-sync');

let numbers = [];

numbers.push(rlSync.question('Enter the 1st number: '));
numbers.push(rlSync.question('Enter the 2nd number: '));
numbers.push(rlSync.question('Enter the 3rd number: '));
numbers.push(rlSync.question('Enter the 4th number: '));
numbers.push(rlSync.question('Enter the 5th number: '));

let searchTerm = (rlSync.question('Enter the last number: '));

if (numbers.indexOf(searchTerm) === -1) {
  console.log(`The number ${searchTerm} does not appear in ${formatArray(numbers)}.`);
} else {
  console.log(`The number ${searchTerm} appears in ${formatArray(numbers)}.`);
}


// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17

// The number 17 appears in [25, 15, 20, 17, 23].

// -----

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18

// The number 18 does not appear in [25, 15, 20, 17, 23].