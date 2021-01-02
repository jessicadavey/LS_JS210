/*

1. loop from 1 to 100 (inclusive)
2. if number % 3 === 0 && number % 5 === 0
     output 'FizzBuzz'
   else if number % 3 === 0
     output 'Fizz'
   else if number % 5 === 0
     output 'Buzz'
   else
     output number

*/

function fizzbuzz() {
  for (let number = 1; number <= 100; number += 1) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log('FizzBuzz');
    } else if (number % 3 === 0) {
      console.log('Fizz');
    } else if (number % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(number);
    }
  }
}

fizzbuzz();