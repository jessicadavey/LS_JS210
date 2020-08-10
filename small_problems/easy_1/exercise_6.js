const rlSync = require('readline-sync');

let integer = rlSync.question('Please enter an integer greater than 0: ');
integer = parseInt(integer, 10);

let operation = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');
operation = operation.toLowerCase();

if (operation === 's') {
  let sum = 0;

  for (let number = 1; number <= integer; number += 1) {
    sum += number;
  }

  console.log(`The sum of the integers between 1 and ${integer} is ${sum}.`);
} else if (operation === 'p') {
  let product = 1;

  for (let number = 1; number <= integer; number += 1) {
    product *= number;
  }

  console.log(`The product of the integers between 1 and ${integer} is ${product}.`);
} else {
  console.log('Oops, unknown operation.');
}