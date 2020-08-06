// function changeFirstElement(array) {
//   array[0] = 9;
// }

// let oneToFive = [1, 2, 3, 4, 5];
// changeFirstElement(oneToFive)
// console.log(oneToFive);

function addToArray(array) {
  return array.concat(0);
}

let oneToFive = [1, 2, 3, 4, 5];
console.log(addToArray(oneToFive));
console.log(oneToFive);