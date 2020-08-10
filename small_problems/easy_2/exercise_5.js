const rlSync = require('readline-sync');

let num1 = rlSync.question('==> Enter the first number:\n');
let num2 = rlSync.question('==> Enter the second number:\n');

num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);

console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} * ${num2} = ${num1 * num2}`);
console.log(`${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
console.log(`${num1} % ${num2} = ${num1 % num2}`);
console.log(`${num1} ** ${num2} = ${num1 ** num2}`);