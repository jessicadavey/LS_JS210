  /*
  1. split into an array of words
  2. swap first and last letter of each word
  3. join with spaces and return

  swap function:
  1. split word into an array of characters
  2. let first = arr[0]
  3. set arr[0] equal to last element
  4. set last element equal to first
  5. join characters into a string and return

  */

function swapLetters(word) {
  let characters = word.split('');
  let first = characters[0];

  characters[0] = characters[characters.length - 1];
  characters[characters.length - 1] = first;

  return characters.join('');
}

function swap(words) {
  return words.split(' ')
              .map(word => swapLetters(word))
              .join(' ');
}


console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"