/*

Problem:

input: word string
output: boolean

Rules:
  - determine whether word can be spelled using given set of alphabet blocks:
        B:O   X:K   D:Q   C:P   N:A
        G:T   R:E   F:S   J:W   H:U
        V:I   L:Y   Z:M
  - word can only use each block once
    - any word with double letters is 'false'
    - any word with 2 letters from same block is 'false'
  - consider letters to be case insensitive

Data structure:
  - array of two-element block arrays:
  [['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'],
    ['N', 'A'], ['G', 'T'], ['R', 'E'], ['F', 'S'],
    ['J', 'W'], ['H', 'U'], ['V', 'I'], ['L', 'Y'],
    ['Z', 'M']]

Algorithm;
  - convert word to uppercase
  - iterate through each character
  - find block in array that includes character
    - if found, 
      - set to undefined or filter it out
    - otherwise return false
  - return true if finish iterating through word

*/
function isBlockWord(word) {
  let blocks = [['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'],
    ['N', 'A'], ['G', 'T'], ['R', 'E'], ['F', 'S'],
    ['J', 'W'], ['H', 'U'], ['V', 'I'], ['L', 'Y'],
    ['Z', 'M']];

  let uppercaseWord = word.toUpperCase();

  for (let index = 0; index < uppercaseWord.length; index += 1) {
    let letter = uppercaseWord[index];
    if (findBlock(letter, blocks)) {
      blocks = removeBlock(letter, blocks);
    } else {
      return false;
    }
  }

  return true;
}

function findBlock(letter, blocks) {
  let result = blocks.filter(block => block.includes(letter));
  return result.length !== 0;
}

function removeBlock(letter, blocks) {
  return blocks.filter(block => !block.includes(letter));
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('apple')); // false
console.log(isBlockWord('leap')); // true
console.log(isBlockWord('notepad'));  // false