function multiply (a, b) {
  return a * b;
}

let rlSync = require('readline-sync');
num1 = rlSync.question('Enter the first number: ');
num2 = rlSync.question('Enter the second number: ');
console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);