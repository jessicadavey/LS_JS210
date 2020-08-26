/*
Problem:

Rotate the last n digits of a number

input: number and rotation digits (n)
output: rotated number

rules:
  rotation: take left-most digit and relocate to end
  rotation of 1 - number is unchanged

Data structure:

- convert number to string, to an array and back to number
['1', '2', '3']


Algorithm:

- convert number into a string
- split the string into an array
- splice at length - n
- rotate spliced array one place to the left
- concat to end of array
- join array into string
- convert string into number
*/

function rotate(array) {
  let first = array.shift();
  return array.concat(first);
}

function rotateRightmostDigits(number, n) {
  let array = String(number).split('');
  let toRotate = array.splice(array.length - n);
  let rotated = rotate(toRotate);

  array = array.concat(rotated);
  return parseInt(array.join(''), 10);
}



console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
console.log(rotateRightmostDigits(123, 2)); // 132
console.log(rotateRightmostDigits(1000, 4)); // 1