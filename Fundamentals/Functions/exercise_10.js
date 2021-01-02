// logValue(); // outputs 'Hello, world!'; the function declaration
// // and function body are both hoisted to the top of the program

// function logValue() {
//   console.log('Hello, world!');
// }


// Further Exploration:

var logValue = 'foo';

function logValue() {
  console.log('Hello, world!');
}

console.log(typeof logValue); // string; functions get hoisted above variable 
// declarations, so when the variable logValue is 'declared', it is actually reassigning
// the logValue that used to be a function.