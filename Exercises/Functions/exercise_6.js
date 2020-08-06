let a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a); // outputs 7.  When myValue is executed, the value of global variable a is 
// assigned to function parameter b, which is then reassigned within the function body.  However,
// this reassignment does not affect the value of a.