/*
Problem:
input - array
output - new array

Rules:
  rotate an array by moving first element to end of the array
  return a new array (do not modify the original)
  if input is not an array, return undefined
  if input is an empty array, return an empty array
  arrays can contain anything
  if no arguments, return undefined
  if array has one element, returned array has one element

Algorithm
1. if argument is not an array, return undefined
2. slice the array and store new array into a variable
3. push the first element from input array to end of new array
4. return new array

*/


function rotateArray(array) {
  if (!Array.isArray(array)) {
    return undefined;
  }

  if (array.length <= 1) {
    return array.slice();
  }

  let newArray = array.slice(1);
  newArray.push(array[0]);

  return newArray;
}


console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []
console.log(rotateArray([null, true, false])); // [true, false, null]

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]