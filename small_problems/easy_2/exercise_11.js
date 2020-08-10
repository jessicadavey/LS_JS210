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


console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
console.log(integerToString(1234567890));      // "1234567890"