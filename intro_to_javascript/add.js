// function add(a, b) {
//   return a + b;
// }

// let twoAndThree = add(2, 3);
// console.log(twoAndThree);

let add = (a, b) => a + b;
let getNumber = text => {
  let input = prompt(text);
  return Number(input);
}

let number1 = getNumber('Enter a number: ');
let number2 = getNumber('Enter another number: ');
console.log(add(number1, number2));