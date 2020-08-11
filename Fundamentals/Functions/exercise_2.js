var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction(); // 'This is local'; the console.log on line 5 is in the local function scope, as well as the 
// myVar declared on line 4.  The local variable is found, so the global variable is never accessed.