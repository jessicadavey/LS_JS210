function halvsies(array) {
  let midpoint = Math.round(array.length / 2);

  let arr1 = array.slice(0, midpoint);
  let arr2 = array.slice(midpoint);

  return [arr1, arr2];
}


console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]