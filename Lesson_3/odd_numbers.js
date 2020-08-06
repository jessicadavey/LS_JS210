// Problem: log all odd numbers from 1 to passed in number (inclusive) to the console.

// Algorithm:

// 1. get a positive integer
// 2. set number = 1
// 2. log number to the console
// 3. start a loop
//     - add 2 to number
//     - log number to the console
//     - stop looping when number > positive integer

// function logOddNumbers(endNumber) {
//   let number = 1;
//   while (number <= endNumber) {
//     console.log(number);
//     number += 2;
//   }
// }


function logOddNumbers(endNumber) {
  for (let currentNumber = 1; currentNumber <= endNumber; currentNumber += 1) {
    if (currentNumber % 2 === 0) continue;
    console.log(currentNumber);
  }
}
logOddNumbers(19);