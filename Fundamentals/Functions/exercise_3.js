var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar); // 'This is local'; global myVar is reassigned when someFunction is executed.