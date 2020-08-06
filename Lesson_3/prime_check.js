/*
1. return false if number === 1 || number === 0
2. loop through numbers 2 to number - 1
      - if number % current_number === 0 return false
3. return true

*/

const isPrime = number => {
  if (number === 1 || number === 0) {
    return false;
  }

  for (let current = 2; current < number; current += 1) {
    if (number % current === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(43));  // true
console.log(isPrime(55));  // false
console.log(isPrime(0));   // false