var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar); // outputs 'This is global'; The myVar declared on line 4 is in the local someFunction() scope, 
// not the global scope.