const rlSync = require('readline-sync');

console.log('Please enter a phrase:');
let phrase = rlSync.prompt();


let count = phrase.replace(/[^A-Za-z]/g, '').length

console.log(`There are ${count} characters in "${phrase}".`);