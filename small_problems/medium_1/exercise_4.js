/*
Problem: implement a stack-and-register based programming language
Input: string of tokens
Output: integers printed to the console

Rules:

- all operations are integer operations
- if no print commands, then nothing is output
- program contains a stack (array) and a register value (integer)
- initialize stack to [] and register to 0
- each operation that takes two values:
  - take the top value from the stack
  - operate on that value and register value
  - return the new value to the register
  - register value comes first, e.g. register - stack
  
Data Structure:

Store functions in an object with commands as keys
e.g.

{ MULT = (a, b) => a * b; }
  
  
Algorithm:

1. split commands into an array
2. loop through array from left to right
 - if command is an integer, update the register
 - otherwise, retrieve relevant function from command object and call it on 
  stack.pop and register, then update register


*/

const OPERATIONS = {
  ADD(a, b) { return a + b; },
  MULT(a, b) { return a * b; },
  SUB(a, b) { return a - b; },
  DIV(a, b) { return Math.floor(a / b) },
  MOD(a, b) { return a % b },
};

function minilang(commandString) {
  let register = 0;
  let stack = [];

  let commandArray = commandString.split(' ');

  commandArray.forEach(command => {
    if (!Number.isNaN(Number(command))) {
      register = Number(command); 
    } else if (command === 'PRINT') {
      console.log(register);
    } else if (command === 'PUSH') {
      stack.push(register);
    } else if (command === 'POP') {
      register = stack.pop();
    } else {
      register = OPERATIONS[command](register, stack.pop());
    }
  });
}


minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)