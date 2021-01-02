const rlSync = require('readline-sync');


const PASSWORD = 'password';
let loggedIn = false;

for (let attemptsRemaining = 3; attemptsRemaining > 0; attemptsRemaining -= 1) {
  let userInput = rlSync.question('What is the password: ');
  if (userInput === PASSWORD) {
    loggedIn = true;
    break;
  }
};

if (loggedIn) {
  console.log('You have successfully logged in.');
} else {
  console.log('You have been denied access.');
}