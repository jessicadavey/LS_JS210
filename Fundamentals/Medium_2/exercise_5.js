const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length); // 3
console.log(Object.keys(array).length); // 4

array[-2] = 'Watermelon';
console.log(array.length); // 3
console.log(Object.keys(array).length); // 5

// Elements that do not have legitimate array indexes as keys do not contribute
// to the array's length.  The length is always one greater than the largest 
// non-zero integer index.