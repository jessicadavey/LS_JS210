const multiply = (num1, num2) => num1 * num2;

const square = number => multiply(number, number);

console.log(square(5) === 25); // logs true
console.log(square(-8) == 64); // logs true