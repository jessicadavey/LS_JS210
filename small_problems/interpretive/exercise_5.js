/*
Problem:  Implement the Vigenere Cipher

Input: plainText and a keyword
Output: cipherText

Rules:
  - each letter of keyword represents a shift value
    a => 0, b => 1, ... z=> 25
  - shift each letter of plainText
    - loop through keyword while looping through plainText
    - current letter of keyword determines the shift value
  - keyword is case insensitive:
    a => 0, A => 0
  - don't increment keyword letter for non-letters in plainText
  - preserve case in cipherText
  - don't change non-letters


Data Structure:
  const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z'];

Algorithm:

1. keep track of letterNumber in a variable
2. map keyword to keyNumbers
3. loop through plainText
  - if it's a letter
  - increment letterNumber
  - encrypt:
    - find the index of keyword to use: 
      - letterNumber % keyword.length
      - encrypt by the key at that index
        - same as caesar cipher
  - otherwise leave character as it is
4. add character to new String


*/
const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
'v', 'w', 'x', 'y', 'z'];

function vigenereEncrypt(plainText, keyword) {
  let cipherKeys = keywordToKeys(keyword);

  let letterNumber = 0;
  let cipherText = '';

  for (let index = 0; index < plainText.length; index += 1) {
    let current = plainText[index];

    if (/[A-Z]/i.test(current)) {
      let key = cipherKeys[letterNumber % cipherKeys.length];
      let newLetter = encryptLetter(current, key);
      cipherText += newLetter;

      letterNumber += 1;
    } else {
      cipherText += current;
    }
  }
  return cipherText;
}

function encryptLetter(letter, key) {
  let alphaIndex = ALPHABET.indexOf(letter.toLowerCase());
  let newIndex = (alphaIndex + key) % 26;
  let newLetter = ALPHABET[newIndex];
  newLetter = (/[A-Z]/.test(letter)) ? newLetter.toUpperCase() : newLetter;

  return newLetter;
}

function keywordToKeys(keyword) {
  return keyword.toLowerCase().split('')
    .map(letter => ALPHABET.indexOf(letter));
}

console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'meat') === "Bmnxmtpeqw dhz'x gh ar pbldal!");


console.log(vigenereEncrypt('Hello', 'AbC')); // 'Hfnlp'
console.log(vigenereEncrypt('Hello World', 'joy')); // 'Qsiuc Uxfjm'
console.log(vigenereEncrypt('Hi!!!', 'apple')); // 'Hx!!!'
console.log(vigenereEncrypt('789abc123def', 'joy'));


