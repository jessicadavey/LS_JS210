/*

Problem: log integers between 1 and 100 that are multiples of 3 or 5
if multiples of both, append an !

Rules: output each number once
       output numbers as strings

Algorithm:
1. loop through numbers 1 - 100
2. if multiple of 15, append ! and output
   else if multiple of 3 || 5, output as a string

   */

function multiplesOfThreeAndFive(startNumber, endNumber) {
  for (let number = startNumber; number <= endNumber; number += 1) {
    if (number % 15 === 0) {
      console.log(number.toString() + '!');
    } else if (number % 3 === 0 || number % 5 === 0) {
      console.log(number.toString());
    }
  }
}

multiplesOfThreeAndFive(1, 100);