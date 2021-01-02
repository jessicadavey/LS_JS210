/*
1. create an object lookup table with string numbers as keys and numbers as values
2. set integer = 0
3. loop through the given string left to right
4. use table to convert current character to digit representation (number)
5. update integer = number + (integer * 10)
6. return integer

*/


function stringToInteger(str) {
  const DIGITS = { 0:0, 1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9 };

  let integer = 0;

  for (let index = 0; index < str.length; index += 1) {
    let currentCharacter = str[index];
    let number = DIGITS[currentCharacter];

    integer = number + (integer * 10);
  }

  return integer;
}


console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570