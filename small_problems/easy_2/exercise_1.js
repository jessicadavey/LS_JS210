
/*
1. let result = ''
2. loop through the string by each character
3. if the last character of result !== current character, add it to the result
4. return the result string

*/

function crunch(string) {
  let result = '';

  for (let index = 0; index < string.length; index += 1) {
    let currentCharacter = string[index];
    let lastCharacterOfResult = result[result.length - 1];
    
    if (lastCharacterOfResult !== currentCharacter) {
      result += currentCharacter;
    }
  }

    return result;
}


console.log(crunch('ddaaiillyy ddoouubbllee') === "daily double");
console.log(crunch('4444abcabccba') === "4abcabcba");
console.log(crunch('ggggggggggggggg') === "g");
console.log(crunch('a') === "a");
console.log(crunch('') === "");