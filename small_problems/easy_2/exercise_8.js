function oddities(array) {
  let oddElements = [];

  for (let index = 0; index < array.length; index += 1) {
    if (index % 2 === 1) {
      continue;
    }
    oddElements.push(array[index]);
  }

  return oddElements;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []