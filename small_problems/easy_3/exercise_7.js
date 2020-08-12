/*
  1. loop over the array
  2. push the total of array.slice(0, index - 1) to totals
  3. return totals

*/

// function runningTotal(numbers) {
//   let totals = [];

//   let sum = 0;

//   numbers.forEach(number => {
//     sum += number;
//     totals.push(sum);
//   });

//   return totals;
// }

function runningTotal(numbers) {
  return numbers.map((_, index) => {
    return numbers.slice(0, index + 1)
                  .reduce((acc, num) => acc + num);
  });
}


console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []