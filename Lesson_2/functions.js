function sum(numbers){
  let total = 0;
  for (let index = 0, len = numbers.length; index < len; index += 1) {
    total += numbers[index];
  }
  return total;
}

function average(numbers) {
  return sum(numbers) / numbers.length;
}

console.log(average([1, 2, 3, 4, 5]));

let temperatures = [89, 87, 64, 93, 101];

console.log(average(temperatures));