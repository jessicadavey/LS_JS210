function showMultiplicativeAverage(numbers) {
  let average = numbers.reduce((acc, number) => acc * number) / numbers.length;
  return average.toFixed(3);
}

console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"