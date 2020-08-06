var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction(); // 'This is global'.  When someFunction doesn't find a local variable named
// myVar, it consults the global scope (and finds one).