const multisum = function(limit) {
  let total = 0;

  for (let number = 3; number <= limit; number += 1) {
    if (number % 3 === 0 || number % 5 === 0) {
      total += number;
    }
  }

  return total;
}


console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168