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

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true