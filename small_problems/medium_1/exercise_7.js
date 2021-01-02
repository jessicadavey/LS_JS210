/*

return 1 if n is less than or equal to 2


set first = 1
set second = 1

set index = 3

loop:
  set current = first + second
  if index === n, return current
  set first = second
  set second = current
  index += 1
end

*/


function fibonacci(n) {
  if (n <= 2) {
    return 1;
  }

  let first = 1;
  let second = 1;

  let index = 3;

  while (true) {
    let current = first + second;
    if (index === n) {
      return current;
    }

    first = second;
    second = current;
    index += 1;
  }
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2