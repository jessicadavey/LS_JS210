/*
1. let string = '';
2. make an array of string digits
3. start a loop (while number > 1)
4. get number % 10 and convert to a string using the array
5. add it to the end of the result string
6. number = Math.floor(number / 10) and go back to the start of the loop
7. return the string
*/

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


console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
