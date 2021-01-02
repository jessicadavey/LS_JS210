function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar); // 'This is global'; myVar on line 2 is assigned but not
// declared, creating a global variable (actually a propery of the global object...?) when someFunction is executed on line 5.