// let name = "Victor";

// console.log(`Good Morning, ${name}.`);
// console.log(`Good Afternoon, ${name}.`);
// console.log(`Good Evening, ${name}.`);

let rlSync = require('readline-sync');
let firstName = rlSync.question("What is your first name? ");
let lastName = rlSync.question("What is your last name? ")
console.log(`Hello, ${firstName} ${lastName}!`)