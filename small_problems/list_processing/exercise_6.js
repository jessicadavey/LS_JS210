function leadingSubstrings(string) {
  let array = string.split('');
  return array.map((_, index) => array.slice(0, index + 1).join(''));
}

/*
1. loop over the string with a for loop
2. for each character, push all substrings of string.slice(index) to a new array
3. return that array
*/

function substrings(string) {
  let substrings = [];

  for (let index = 0; index < string.length; index += 1) {
    substrings.push(...leadingSubstrings(string.slice(index)));
  }

  return substrings;
}

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]