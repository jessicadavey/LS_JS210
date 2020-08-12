let a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a); // [1, 2, 10] --> array a is passed into myValue as a reference, so the 
// reassignment of an element within the array in the function shows up outside of it
// (the array is mutated).