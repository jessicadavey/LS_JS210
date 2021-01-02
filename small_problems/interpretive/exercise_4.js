/*
Problem:

input: plainText string (any characters) and key (non-negative integer)
output: encoded string (cipherText)

Rules:
  - use key to shift letters right
  - preserve case
  - leave non-letters unchanged
  - if new letter location is longer than length of alphabet, then wrap around to the beginning


Data Structures

const  ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

Algorithm:

1. break string into an array of characters
2. map the letters
  - if uppercase letter, set uppercase to true
  1. index in alphabet array
  2. (index + key) % 26
  3. letter at index
  4. if uppercase, make it uppercase
3. convert back into string

*/

function caesarEncrypt(plainText, key) {
  const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z'];

  let cipherText = plainText.split('').map(char => {
    let newChar = char;

    if (/[A-Za-z]/.test(char)) {
      let alphaIndex = ALPHABET.indexOf(char.toLowerCase());
      let newIndex = (alphaIndex + key) % 26;
      newChar = ALPHABET[newIndex];

      newChar = (/[A-Z]/.test(char)) ? newChar.toUpperCase() : newChar;
    }
    return newChar;
  });

  return cipherText.join('');
}

caesarEncrypt('hello', 7);

// h => 7 => 14
// e => 4 => 11
// l => 11 => 18
// l => 11 => 18
// o => 14 => 23
// y => 24 => 31 % 26 => 5


// simple shift
console.log(caesarEncrypt('A', 0) === "A");
console.log(caesarEncrypt('A', 3) === "D");

// wrap around
console.log(caesarEncrypt('y', 5) === "d");
console.log(caesarEncrypt('a', 47) === "v");

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25) === "ZABCDEFGHIJKLMNOPQRSTUVWXY");

console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5) === "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!");

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2) === "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?");