/*
Rules:
- first argument is count, second is start of sequence
- returned array has a length equal to count
- each element in the returned array is a multiple of the start number

Algorithm:

1.  loop from 1 to count (inclusive)
2.  push start * index to a new array
3.  return that array

*/

function sequence(count, start) {
  let result = [];

  for (let index = 1; index <= count; index += 1) {
    result.push(start * index);
  }

  return result;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []