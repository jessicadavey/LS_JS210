function leadingSubstrings(string) {
  let array = string.split('');
  return array.map((_, index) => array.slice(0, index + 1).join(''));
}

function substrings(string) {
  let substrings = [];

  for (let index = 0; index < string.length; index += 1) {
    substrings.push(...leadingSubstrings(string.slice(index)));
  }

  return substrings;
}
/*
1. get all substrings of a string
2. filter out the non-palindromes


isPalindrome
1. must be longer than 1 character
2. test if the string.split.reverse.join is equal to the string
*/

function isPalindrome(str) {
  return str.length > 1 && str.split('').reverse().join('') === str;
}

function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]