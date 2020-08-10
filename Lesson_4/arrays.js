// 1.
function lastInArray(array) {
  return array[array.length - 1];
}

// 2.
function rollCall(names) {
  for (let index = 0; index < names.length; index += 1) {
    console.log(names[index]);
  }
}

rollCall(['John', 'Paul', 'George', 'Ringo']);

// 3. 
function reverseArray(array) {
  let reversed = [];

  for (let index = array.length - 1; index >= 0; index -= 1) {
    reversed.push(array[index]);
  }

  return reversed;
}

console.log(reverseArray([1, 2, 3, 4]));

// 4. 
function arrayToString(arr) {
  let string = '';

  for (let index = 0; index < arr.length; index += 1) {
    string = string + String(arr[index]);
  }

  return string;
}

console.log(arrayToString([1, 'a', 4, null]));