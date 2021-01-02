let object = { a: 1, b: 2, c: 3 };

console.log(object.a);

let array = [1, 2, 3, 4];

let otherArray = array;

console.log(otherArray === array);

array[0] = 'hello';

console.log(array);
console.log(otherArray);