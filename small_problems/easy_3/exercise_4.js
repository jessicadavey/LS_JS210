function reverse(str) {
  let reversed = '';

  for (let index = str.length - 1; index >= 0; index -= 1) {
    reversed += str[index];
  }

  return reversed;
}


function isPalindrome(string) {
  return reverse(string) === string;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true