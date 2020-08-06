function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function times(num1, num2) {
  return num1 * num2;
}

result = add(subtract(80, 10),
  times(subtract(20, 6),
    add(30,5)))

console.log(result);