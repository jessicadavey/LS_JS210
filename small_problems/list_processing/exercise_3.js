/*
1. map the first array to an array of sub arrays
  - the sub arrays have all of the products of that element multipiled
    by each element of the second array
2. flatten this array with Array.prototype.flat()
3. sort using Array.sort and return

*/

function multiplyAllPairs(arr1, arr2) {
  let products = arr1.map(number => {
    return arr2.map(num => num * number);
  });

  return products.flat().sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]