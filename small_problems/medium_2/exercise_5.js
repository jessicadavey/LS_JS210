/*

input: integer
output: integer - next featured number greater than integer

Rules:
  "featured number":
    - odd
    - multiple of 7
    - no duplicated digits
  issue an error if there is no next featured number
    - highest is 9876543201
    
Algorithm
  1. if number >= 9876543201, return 'no next featured number'
  2. start at given number
  3. find the next number that is an odd multiple of 7
    - if it has no duplicated digits, return it
    - otherwise add 14 and try again
    
    
  Next Odd Multiple of 7
    - add 1
    - check if num % 7 === 0 && num % 2 === 1
      - if so, return that number
      - if not, go back to start
      
  No Duplicated Digits
    - convert number to a string
    - split string into an array
    - loop through the array
      - if indexOf number !== lastIndexOf number
          return false
    - return true

*/

function allUniqueDigits(number) {
  let array = String(number).split('');
  for (let index = 0; index < array.length; index += 1) {
    if (array.indexOf(array[index]) !== array.lastIndexOf(array[index])) {
      return false;
    }
  }
  return true;
}

function nextOddMultipleOf7 (number) {
  while (true) {
    number += 1;
    if (number % 7 === 0 && number % 2 !== 0) {
      return number;
    }
  }
}


function featured(number) {
  if (number >= 9876543201) {
    console.log('no next featured number');
    return;
  }
  let next = nextOddMultipleOf7(number);

  while (!allUniqueDigits(next)) {
    next += 14;
  }

  return next;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(0)); // 7
console.log(featured(-35)); // -21
console.log(featured(9876543200)); // 9876543201
console.log(featured(9876543201)); // no next featured number