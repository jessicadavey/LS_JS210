function union(arr1, arr2) {
  function includeInUnion(array, resultArray) {
    for (let index = 0; index < array.length; index += 1) {
      if (!resultArray.includes(array[index])) {
        resultArray.push(array[index]);
      }
    }
  }

  let combinedArrays = [];

  includeInUnion(arr1, combinedArrays);
  includeInUnion(arr2, combinedArrays);

  return combinedArrays;
}


console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
console.log(union([2, 2, 3, 4], [1, 2, 3])); // [2, 3, 4, 1]