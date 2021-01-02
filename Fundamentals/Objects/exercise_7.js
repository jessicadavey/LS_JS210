function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}
// arguments is an Array-like object that contains all of the arguments
// passed to the function.  It is possible to use bracket notation
// on this object even though it isn't a true array.

console.log(calculateBonus(2800, true));               // 1400
console.log(calculateBonus(1000, false));              // 0
console.log(calculateBonus(50000, true));              // 25000