// Problem 1
// function say() {
//   if (false) {
//     var a = 'hello from inside a block';
//   }

//   console.log(a);
// }

// say(); // undefined; var a is hoisted to the top of the function (NOT block) and then not assigned to anything

// Problem 2
// function say() {
//   if (false) {
//     let a = 'hello from inside a block';
//   }

//   console.log(a);
// }

// say(); // ReferenceError: 'a' is not defined; let variables are scoped to the block, and so a is only available inside the if block

// // Problem 3
// function hello() {
//   a = 'hello'; // 'hello' is assigned to function-scoped var a
//   console.log(a); // 'hello'

//   if (false) {
//     var a = 'hello again'; // var a is hoisted to top of function scope
//   }
// }

// hello();
// console.log(a); // ReferenceError because 'a' is only in function scope

// Problem 4

// function hello() {
//   a = 'hello';
//   console.log(a); // 'hello'

//   if (false) {
//     let a = 'hello again';
//   }
// }

// hello();
// console.log(a); // 'hello'; a is a global variable because let a on 43 is only scoped to the if block

// Problem 5

// var a = 'hello';

// for (var index = 0; index < 5; index += 1) {
//   var a = index;
// }

// console.log(a); // 4; a is reassigned 5 times on line 55

// Problem 6 

// let a = 'hello';

// for (let index = 0; index < 5; index += 1) {
//   let a = index;
// }

// console.log(a); // 'hello'; a on line 65 is scoped to the for block

// Problem 7
// let a = 1;

// function foo() {
//   a = 2;
//   let bar = function() {
//     a = 3;
//     return 4;
//   };

//   return bar();
// }

// console.log(foo()); // 4; the bar function on line 75 returns 4, and that is the return of the foo function
// console.log(a); // 3; the global a on line 71 gets reassigned on lines 74 and 76

// Problem 8

// var a = 'global';

// function checkScope() {
//   var a = 'local';
//   const nested = function() {
//     var a = 'nested'; // this a is reassigned to 'superNested' on line 95
//     let superNested = () => {
//       a = 'superNested';
//       return a; // 'superNested'
//     };

//     return superNested(); // 'superNested'
//   };

//   return nested(); // 'superNested'
// }

// console.log(checkScope()); // 'superNested'
// console.log(a); // 'global'; all the other a's are in an inner scope and don't affect the outer

// Problem 9

// let a = 'outer';
// let b = 'outer';

// console.log(a); // 'outer'
// console.log(b); // 'outer'
// setScope(a);
// console.log(a); // 'outer'
// console.log(b); // 'inner'

// function setScope(foo) {
//   foo = 'inner'; // argument 'foo' reassigned to 'inner'; a is unchanged
//   b = 'inner'; // global variable b is reassigned to 'inner'
// }

// Problem 10

// let total = 50;
// let increment = 15;

// function incrementBy(increment) {
//   total += increment;
// }

// console.log(total); // 50;
// incrementBy(10); // total is now 60;
// console.log(total); // 60;
// console.log(increment); // 15; global variable increment declared on line 127

// Problem 11

let a = 'outer';

console.log(a); // outer
setScope(); // program exits with error: setScope is not a function at this point (it's undefined)
console.log(a); // outer, but program never gets this far

var setScope = function () {
  a = 'inner';
};