/*

Problem: return the nth Fibonacci number, using recursion

Rules:
- input: number, n
- output: nth number in fibonacci sequence

- function must call itself
- function must have an ending condition
- results of each recursion must be used in each step

Algorithm:
F(1) = 1
F(2) = 1
F(n) = F(n - 1) + F(n - 2) where n > 2

*/

function fibonacci(n) {
  if (n <= 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765