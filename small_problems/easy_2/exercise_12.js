function integerToString(number) {
  if (number === 0) {
    return '0';
  }

  const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  let result = '';
  let quotient = number;

  while (quotient >= 1) {
    let remainder = quotient % 10;
    result = DIGITS[remainder] + result;
    quotient = parseInt((quotient / 10), 10);
  }

  return result;
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

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");