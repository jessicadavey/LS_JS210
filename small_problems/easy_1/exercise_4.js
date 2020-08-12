
const rlSync = require('readline-sync');

let bill = rlSync.question('What is the bill? ');
bill = parseFloat(bill);

let tipRate = rlSync.question('What is the tip percentage? ');
tipRate = parseFloat(tipRate);

let tip = bill * (tipRate / 100);
let total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);
