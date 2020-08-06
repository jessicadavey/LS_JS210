// let person = {
//   name:       'Bob',
//   occupation: 'web developer',
//   hobbies:    'painting',
// };

// console.log(person['name']);

// let myArray = {
//   0: 'apple',
//   1: 2,
//   2: undefined,
//   3: -7,
//   length: 4
// };

// for (let i = 0; i < myArray.length; i += 1) {
//   console.log(myArray[i]);
// }

// let obj = {
//   b: 2,
//   a: 1,
//   c: 3,
// };

// let array = Object.keys(obj).map(element => element.toUpperCase());

// console.log(array);
// console.log(obj);

// let myProtoObj = {
//   foo: 1,
//   bar: 2,
// };

// let myObj = Object.create(myProtoObj);

// myObj.qux = 3;
// console.log(myObj);

// function copyObj(obj, keys=Object.keys(obj)) {
//   let newObj = {};

//   keys.forEach(function(key) {
//     newObj[key] = obj[key];
//   });

//   return newObj;
// }


// let objToCopy = {
//   foo: 1,
//   bar: 2,
// };

// let newObj = copyObj(objToCopy);
// console.log(newObj.foo);    // => 1
// console.log(newObj.bar);    // => 2

// let newObj2 = copyObj(objToCopy, [ 'foo' ]);
// console.log(newObj2.foo);   // => 1
// console.log(newObj2.bar);   // => undefined

let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);