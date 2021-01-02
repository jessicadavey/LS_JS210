/*


*/

function isXor(arg1, arg2) {
  return (!!arg1 && !arg2) || (!arg1 && !!arg2)
}

console.log(isXor(false, true) === true);     // true
console.log(isXor(true, false) === true);     // true
console.log(isXor(false, false) === false);    // false
console.log(isXor(true, true) === false);      // false


console.log(isXor(false, 3) === true);        // true
console.log(isXor('a', undefined) === true);  // true
console.log(isXor(null, '') === false);        // false
console.log(isXor('2', 23) === false);         // false