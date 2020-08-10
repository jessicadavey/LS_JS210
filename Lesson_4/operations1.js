// 1.

function push(array, element) {
  array[array.length] = element;
  return array.length;
}

// let count = [0, 1, 2];
// console.log(push(count, 3));         // 4
// console.log(count);                  // [ 0, 1, 2, 3 ]

// 2. 

function pop(array) {
  if (array.length === 0) {
    return undefined;
  }

  let last = array[array.length - 1];
  array.length = array.length - 1;

  return last;
}

// let count = [1, 2, 3];
// console.log(pop(count));             // 3
// console.log(count);                  // [ 1, 2 ]

// 3.
function unshift(array, value) {
  for (let index = array.length; index > 0; index -= 1) {
    array[index] = array[index - 1];
  }

  array[0] = value;

  return array.length;
}

// let count = [1, 2, 3];
// console.log(unshift(count, 0));      // 4
// console.log(count);                  // [ 0, 1, 2, 3 ]

function shift(array) {
  let first = array[0];

  if (array.length === 0) {
    return undefined;
  }

  for (let index = 0; index < array.length; index += 1) {
    array[index] = array[index + 1];
  }

  array.length = array.length - 1;

  return first;
}

let count = [1, 2, 3];
console.log(shift(count));           // 1
console.log(count);                  // [ 2, 3 ]