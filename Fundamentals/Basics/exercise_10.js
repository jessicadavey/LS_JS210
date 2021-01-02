function digitToString(digit) {
  const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  return DIGITS[digit];
}

function integerToString(number) {
  let string = '';

  do {
    string = digitToString(number % 10) + string;
    number = Math.floor(number / 10);
  } while (number > 0)

  return string;
}

function signedIntegerToString(number) {
  if (number > 0) {
    return '+' + integerToString(number);
  } else if (number < 0) {
    return '-' + integerToString(Math.abs(number));
  } else {
    return '0';
  }
}

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"