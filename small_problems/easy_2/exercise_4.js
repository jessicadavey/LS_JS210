/*
1. initialize an empty array
2. create the fibonacci sequence number by number
3. push each number to the array
4. check the length of the string version of the number
5. if it is equal to length, return the length of the array

*/

function findFibonacciIndexByLength(targetLength) {
  let sequence = [1, 1];

  let result; 
  while (true) {
    let first = sequence[sequence.length - 2];
    let second = sequence[sequence.length - 1];

    sequence.push(first + second);

    let string = String(sequence[sequence.length - 1]);

    if (string.length >= targetLength) {
      result = sequence.length;
      break;
    }
  }

  return result;
}



console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74