/*
1. split the string into an array
2. iterate through the array with forEach
3. push array.slice(0, index + 1).join('') to a new result array
4. return the result array (sort by length if necessary)
*/

function leadingSubstrings(string) {
  let array = string.split('');
  return array.map((_, index) => array.slice(0, index + 1).join(''));
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]