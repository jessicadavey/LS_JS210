// function times(number1, number2) {
//   let result = number1 * number2;
//   console.log(result);
//   return result;
// }

// times(5, times(4, times(3, times(2, times(1, 1)))));

// function factorial(number) {
//   let result = 1;
//   for(let index = 1; index <= number; index += 1) {
//     result *= index;
//   }
//   return result;
// }

function factorial(number) {
  if (number === 0) {
    return 1;
  }
  return number * factorial(number - 1);

}

console.log(factorial(0));     // => 1
console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320

