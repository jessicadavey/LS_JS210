// From previous assignment:

function push(array, element) {
  array[array.length] = element;
  return array.length;
}

// 1.

function slice(array, start, end) {
  let result = [];

  for (let index = start; index < end; index += 1) {
    push(result, array[index]);
  }

  return result;
}

// console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
// console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]

// 2. 
function splice(array, start, number) {
  if (array.length === 0) {
    return [];
  }

  let result = [];

  for (let index = start; result.length < number; index += 1) {
    push(result, array[index]);
  }

  let newLength = array.length - number;

  for (let index = start; index < newLength; index += 1) {
    array[index] = array[index + number];
  }

  array.length = newLength;

  return result;
}

// let count = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
// console.log(count);                                 // [ 1, 2, 8 ]

// let array = [];
// console.log(splice(array, 1, 2));


// 3.
function concat(arr1, arr2) {
  result = [];

  for (let index = 0; index < arr1.length; index += 1) {
    push(result, arr1[index]);
  }

  for (let index = 0; index < arr2.length; index += 1) {
    push(result, arr2[index]);
  }

  return result;
}

// console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]

// 4.

function join(array, separator) {
  let string = String(array[0]);

  for (let index = 1; index < array.length; index += 1) {
    string += separator + String(array[index]);
  }

  return string;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'