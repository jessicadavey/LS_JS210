/*
1. loop through the array
2. each iteration, add all preceding numbers to the array
3. sum with reduce
*/

function sumOfSums(numbers) {
  let result = [];

  numbers.forEach((number, index) => {
    result.push(number, ...numbers.slice(0, index));
  });

  return result.reduce((total, current) => total + current);
}


console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35