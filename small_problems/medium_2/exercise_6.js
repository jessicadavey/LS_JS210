/*
input: integer n
output: number

rules:
- compute difference between square of the sum of the first n positive integers and 
  sum of the squares of first n positive integers
- if given 1, output 0

algorithm 1:

- squareOfSum = 0
- for 1 to n, add to squareOfSum
- squareOfSum**2

- sumOfSquares = 0
- for 1 to n, add index**2 to sumOfSquares
- return squareOfSum - sumOfSquares


algorithm 2:

- make an array of 1 to n
- squareOfSum = array reduced to a sum and then squared
- sumOfSquares = array reduce (square each time)
- return squareOfSum - sumOfSquares


*/

function sumSquareDifference(n) {
  let squareOfSum = 0;

  for (let index = 1; index <= n; index += 1) {
    squareOfSum += index;
  }

  squareOfSum **= 2;

  let sumOfSquares = 0;

  for (let index = 1; index <= n; index += 1) {
    sumOfSquares += index**2;
  }

  return squareOfSum - sumOfSquares;
}



function sumSquareDifference(n) {
  let array = [];

  for (let index = 1; index <= n; index += 1) {
    array.push(index); 
  }

  let squareOfSum = array.reduce((total, acc) => total + acc)**2;

  let sumOfSquares = array.reduce((total, acc) => total + acc**2);

  return squareOfSum - sumOfSquares;
}


console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
console.log(sumSquareDifference(4)); // (1 + 2 + 3 + 4)**2 - (1 + 4 + 9 + 16) = 100 - 30 = 70