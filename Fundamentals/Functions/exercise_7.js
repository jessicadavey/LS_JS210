let a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a); // outputs 7.  The 'a' that is assigned to a + 10 (i.e., 17) on line
// 4 is the function argument 'a', not the global variable 'a'.