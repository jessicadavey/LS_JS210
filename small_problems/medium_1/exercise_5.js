/*

Problem:

input: string containing words
output: string with number words replaced by digits

Rules:
- replace each digit with its number representation (as a string)
- words can end in a punctuation
- case insensitive ? 
- only replace words 0 - 9

Data Structure

- array of digit names, where digit name matches index


Algorithm:

1. loop through array of digit names
2. each iteration
  - create a regex of the digit name (global, case insensitive)
  - replace all instances with index (as a string)
3. return string with replacements

*/

function wordToDigit(sentence) {
  const DIGITS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 
                  'seven', 'eight', 'nine'];
  
  DIGITS.forEach(digit => {
    let regex = new RegExp(`\\b${digit}\\b`, 'gi');
    sentence = sentence.replace(regex, String(DIGITS.indexOf(digit)));
  });
  
  return sentence;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
console.log(wordToDigit('five four three two one')); // '5 4 3 2 1'
console.log(wordToDigit('Carrefour')); // '7!'