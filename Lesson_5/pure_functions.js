// 1.

const bar = 42;
let qux = [1, 2, 3];
let baz = 3;

function foo(arr) {
  let value = arr.pop();
  console.log(`popped ${value} from the array`);
  return value + bar + baz;
}

foo(qux);

// side effects: mutates qux array, logs to the console, uses non-constant baz

// 2. 

//Function 1
function sum(a, b) {
  console.log(a + b);
  return a + b;
} // has a side effect of writing to console

//Function 2
function sum(a, b) {
  a + b;
} // does not return a meaningful value, and it's independent of arguments

//Function 3
function sum(a, b) {
  return a + b;
} // pure function

//Function 4
function sum(a, b) {
  return a + b + Math.random();
} // side effect: random number generator

//Function 5
function sum(a, b) {
  return 3.1415;
} // return value not dependent on arguments
