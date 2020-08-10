const rlSync = require('readline-sync');
const PERCENT_CONVERSION = .01;

console.log('What is the bill?');
let bill = rlSync.prompt();
bill = parseFloat(bill);

console.log('What is the tip percentage?');
let tipPercentage = rlSync.prompt();
tipPercentage = parseFloat(tipPercentage) * PERCENT_CONVERSION;

let tip = bill * tipPercentage;
let total = tip + bill;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);