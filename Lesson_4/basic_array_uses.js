// 1. 

function firstElementOf(array) {
  return array[0];
}

// console.log(firstElementOf(['U', 'S', 'A']));  // returns "U"

// 2.

function lastElementOf(array) {
  return array[array.length - 1];
}

// console.log(lastElementOf(['U', 'S', 'A']));  // returns "A"

// 3.

function nthElementOf(arr, index) {
  return arr[index];
}

// let digits = [4, 8, 15, 16, 23, 42];
// console.log(nthElementOf(digits, 3));   // returns 16
// console.log(nthElementOf(digits, 8));   // what does this return? undefined
// console.log(nthElementOf(digits, -1));  // what does this return? undefined

// 4. 
// Because arrays are objects, the string
// representation of the negative number is the key
// and the value is set to the value

// 5.

function firstNOf(arr, count) {
  let result = [];
  let index = 0;

  while (index < count) {
    result.push(arr[index]);
    index += 1;
  }

  return result;
}

// let digits = [4, 8, 15, 16, 23, 42];
// console.log(firstNOf(digits, 3));    // returns [4, 8, 15]

// 6.

// function lastNOf(arr, count) {
//   return arr.slice(arr.length - count);
// }

// let digits = [4, 8, 15, 16, 23, 42];
// console.log(lastNOf(digits, 3));    // returns [16, 23, 42]

// 7.

function lastNOf(arr, count) {
  if (count > arr.length) {
    return arr.slice(0);
  }
  return arr.slice(arr.length - count);
}

// let digits = [4, 8, 15, 16, 23, 42];
// console.log(lastNOf(digits, 7));


// 8.

function endsOf(beginningArr, endingArr) {
  let ends = [];

  ends.push(beginningArr[0]);
  ends.push(endingArr[endingArr.length - 1]);

  return ends
}

console.log(endsOf([4, 8, 15], [16, 23, 42]));  // returns [4, 42]