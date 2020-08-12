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

function stringToSignedInteger(str) {
  let firstCharacter = str[0];

  switch (firstCharacter) {
    case '-':
      return stringToInteger(str.slice(1)) * -1;
    case '+':
      return stringToInteger(str.slice(1));
    default:
      return stringToInteger(str);
  }
}


console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100