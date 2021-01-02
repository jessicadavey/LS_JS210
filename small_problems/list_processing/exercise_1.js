/*
1. convert the number into a string
2. split the string into an array of characters
3. map each character back to an integer
4. reduce the array to a sum of the numbers
*/

function sum(number) {
  return String(number).split('')
    .map(digit => parseInt(digit, 10))
    .reduce((acc, current) => acc + current);
}


console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45