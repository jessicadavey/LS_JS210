// let bar = 1;
// function foo() {
//   let bar = 2;
// }

// foo();

// console.log(bar); // 1
// foo function doesn't affect output because it defines a new
// local variable only scoped to the function, which is then discarded.

// function getName(message) {
//   return prompt(message)
// }

// function greet() {
//   firstName = getName('What is your first name?')
//   lastName = getName('What is your last name?')
//   console.log(`Hello ${firstName} ${lastName}!`)
// }

// greet()

function scream(words) {
  return words + '!!!!';
}

scream('Yipeee');