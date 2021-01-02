const rlSync = require('readline-sync');

let age = parseInt(rlSync.question('What is your age? '), 10);
let retirement = parseInt(rlSync.question('At what age would you like to retire? '), 10);

let currentYear = new Date().getFullYear();

let yearsLeft = retirement - age;
let retirementYear = currentYear + yearsLeft;

console.log(`It's ${currentYear}.  You will retire in ${retirementYear}.`);
console.log(`You have only ${yearsLeft} years of work to go!`);


// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!