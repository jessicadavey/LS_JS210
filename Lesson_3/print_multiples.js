/*

Rules:
  - log all multiples of given argument that are between 0 and 100 and are also odd
  - log them in descending order

Algorithm:
1. get a positive integer between 0 and 100, number
2. count down from 100 to 0
  - if current_number % number == 0
    - if current_number % 2 != 0
      log it to the console
*/

// const logMultiples = function(number) {
//   for (let num = 100; num > 0; num -= 1) {
//     if (num % number === 0 && num % 2 === 1) {
//       console.log(num);
//     }
//   }
// }

const logMultiples = function(number) {
  highestMultiple = Math.floor(100 / number) * number
  for (let candidate = highestMultiple; candidate > 0; candidate -= number) {
    if (candidate % 2 === 1) {
      console.log(candidate);
    }
  }
}

logMultiples(17);
logMultiples(21);