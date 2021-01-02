let array1 = [1, 2, undefined, 4];  // 4

let array2 = [1];
array2.length = 5; // 5

let array3 = [];
array3[-1] = [1]; // 0

let array4 = [1, 2, 3, 4, 5];
array4.length = 3; // 3

let array5 = [];
array5[100] = 3; // 101

// let myArray = [1, 3, 6, 11, 4, 2,
//   4, 9, 17, 16, 0];

  // myArray.forEach(function(element) {
  //   if (element % 2 === 0)
  //     console.log(element);
  // })

  // for (let index = 0; index < myArray.length; index ++) {
  //     if (myArray[index] % 2 === 1) {
  //       continue;
  //     }
  //     console.log(myArray[index]);
  // }

  // let myArray = [
  //   [1, 3, 6, 11],
  //   [4, 2, 4],
  //   [9, 17, 16, 0],
  // ];

  // let innerArray = [1, 3, 6, 11]

  // innerArray.forEach(function(value) {
  //   if (value % 2 === 0) {
  //     console.log(value);
  //   }
  // });

  // myArray.forEach(function(array) {
  //   array.forEach(function(value) {
  //     if (value % 2 === 0) {
  //       console.log(value);
  //     }
  //   });
  // });

  // let myArray = [
  //   1, 3, 6, 11,
  //   4, 2, 4, 9,
  //   17, 16, 0,
  // ];

  // let newArray = myArray.map(function(element) {
  //   if (element % 2 === 0) {
  //     return 'even';
  //   } else {
  //     return 'odd';
  //   }
  // });

  // console.log(newArray);

// function removeNonInteger(arr) {
//   return arr.filter(function(element) {
//     return Number.isInteger(element);
//   });
// }

// let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
// let newArray = removeNonInteger(array);
// console.log(newArray); // => [1, 3, -4]

// function oddLengths(array) {
//   array = array.map(element => element.length);
//   return array.filter(element => element % 2 === 1);
// }

// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr)); // => [1, 5, 3]

// function sumOfSquares(numArray) {
//   return numArray.reduce((acc, element) => acc + (element * element), 0)
// }

// let numbers = [3, 5, 7];
// console.log(sumOfSquares(numbers)); // => 83

// function oddLengths(strings) {
//   const reducer = (accumulator, letters) => {
//     length = letters.length;
//     if (length % 2 === 1) {
//       accumulator.push(length)
//     };

//     return accumulator;
//   }
//   return strings.reduce(reducer, [])

// }

// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr)); // => [1, 5, 3]

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function hasThree (numbers) {
  return numbers.includes(3);
}

console.log(hasThree(numbers1));
console.log(hasThree(numbers2));
console.log(hasThree(numbers3));

let arr = [["test", "hello", "world"], ["example", 6, "mem", null], [4, 8, 12]];

let result = arr[1][2]
console.log(result);