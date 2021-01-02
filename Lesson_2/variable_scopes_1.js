// Problem 1

// let a = 'outer';

// function testScope() {
//   let a = 'inner';
//   console.log(a);
// }

// console.log(a);  // 'outer'; Line 3 variable declaration in outer scope
// testScope(); // 'inner'; Line 6 declaration shadows Line 3
// console.log(a); // 'outer'; Line 6 declaration vanished after function finished execution

// Problem 2

// let a = 'outer';

// function testScope() {
//   a = 'inner';
//   console.log(a);
// }

// console.log(a); // 'outer'; same as above
// testScope(); // 'inner'; a in global scope is reassigned on line 19
// console.log(a); // 'inner'; a in global scope was permanently reassigned

// Problem 3

// let basket = 'empty';

// function goShopping() {
//   function shop1() {
//     basket = 'tv';
//   }

//   console.log(basket);  // 'empty'; no functions have been executed yet

//   let shop2 = function() {
//     basket = 'computer';
//   };

//   const shop3 = () => {
//     let basket = 'play station';
//     console.log(basket);
//   };

//   shop1();
//   shop2();
//   shop3(); // 'play station'; a new basket variable is declared and 'play station' is assigned to it

//   console.log(basket); // 'computer; basket was reassigned on line 39
// }

// goShopping();

// Problem 4

// function hello() {
//   a = 'hi';
// }

// hello(); // nothing is logged
// console.log(a); // 'hi'; when the function hello was executed, a global variable 'a' was initialized and 'hi' was assigned
// // to it

// Problem 5

// function hello() {
//   let a = 'hello';
// }

// hello(); // nothing is logged
// console.log(a); // ReferenceError; a is available only inside the function hello

// Problem 6

// console.log(a); // undefined; 'a' is hoisted to the top of the global scope and assigned a value of undefined

// var a = 1;

// Problem 7

// console.log(a); // ReferenceError: cannot access 'a' before initialization; when using let, JS is aware of the
// variable but it is in 'unset' state

// let a = 1;

// Problem 8

console.log(a); // ReferenceError; the function hello is never executed, so the global variable a is not created

function hello() {
  a = 1;
}