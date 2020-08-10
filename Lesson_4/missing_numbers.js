function missing(array) {
  let missingNumbers = [];

  let start = array[0];
  let end = array[array.length - 1];

  for (let number = start + 1; number < end; number += 1) {
    if (array.indexOf(number) === -1) {
      missingNumbers.push(number);
    }
  }

  return missingNumbers
}


console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []