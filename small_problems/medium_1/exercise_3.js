/*
Problem: given a number, return the maximum rotation of that number
input: number
output: number

Rules:
  max rotation:
    - rotate all digits one to the left
    - rotate all digits except first digit one to the left
    - rotate all digits except first two digits one to the left
    - stop after rotating last two digits
  - leading zeros get dropped
  - single digit number returns single digit number
  
Algorithm:


1. split into an array of string digits
2. if length === 0, return original number
3. rotate rightmost digits
  start with n === array.length
  down to n === 2
4. convert array back into a number and return it


*/


function rotate(array) {
  let first = array.shift();
  return array.concat(first);
}

function rotateRightmostElements(array, n) {
  let toRotate = array.splice(array.length - n);
  let rotated = rotate(toRotate);

  return array.concat(rotated);
}

function maxRotation(number)  {
  let array = String(number).split('');
  
  for (let index = array.length; index >= 2; index -= 1) {
    array = rotateRightmostElements(array, index);
  }
  
  return Number(array.join(''));
  
}


console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845