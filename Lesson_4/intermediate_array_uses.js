// 1. 

function oddElementsOf(arr) {
  let oddElements = [];

  for (let index = 1; index < arr.length; index += 2) {
    oddElements.push(arr[index]);
  }

  return oddElements;
}

let digits = [4, 8, 15, 16, 23, 42];

// console.log(oddElementsOf(digits));    // returns [8, 16, 42]

// 2.

function arrayAndReverse(array) {
  return array.concat(array.slice().reverse());
}

// let myArray = [1, 2, 3, 4]
// console.log(arrayAndReverse(myArray)); // [1, 2, 3, 4, 4, 3, 2, 1]
// console.log(myArray); // [1, 2, 3, 4]


// 3.

function sortDescending(arr) {
  return arr.slice().sort((a, b) => b - a);
}

// let array = [23, 4, 16, 42, 8, 15];
// let result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
// console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
// console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]

// 4.

function matrixSums(arr) {
  return arr.map(subArray => subArray.reduce((acc, element) => acc + element));
}

// console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]

// 5.

function uniqueElements(arr) {
  let uniqueArray = [];

  for (let index = 0; index < arr.length; index += 1) {
    if (!uniqueArray.includes(arr[index])) {
      uniqueArray.push(arr[index]);
    }
  }

  return uniqueArray;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]