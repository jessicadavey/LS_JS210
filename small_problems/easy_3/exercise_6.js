function isRealPalindrome(string) {
  let strippedString = string.toLowerCase().replace(/[^a-z0-9]/g, '');

  return strippedString.split('').reverse().join('') === strippedString;
}

function isPalindromicNumber(number) {
  return isRealPalindrome(String(number));
}


console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true