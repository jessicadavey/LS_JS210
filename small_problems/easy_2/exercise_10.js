function stringToInteger(string) {
  const DIGIT_STRINGS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  let result = 0;

  let digitsArray = string.split('');

  for (let index = 0; index < digitsArray.length; index += 1) {
    let number = DIGIT_STRINGS.indexOf(string[index]);
    result = (result * 10) + number;
  }

  return result;
}

function stringToSignedInteger(string) {
  switch (string[0]) {
  case '+':
    string = string.slice(1, string.length)
    return stringToInteger(string);
  case '-':
    string = string.slice(1, string.length)
    return -(stringToInteger(string));
  default:
    return stringToInteger(string);
  }
}


console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true