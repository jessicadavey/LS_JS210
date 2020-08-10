for (let number = 1; number <= 99; number += 1) {
  if (number % 2 === 1) {
    console.log(number);
  }
}

// using a while loop and continue:

let num = 0;

while (num <= 99) {
  num += 1;

  if (num % 2 === 0) {
    continue;
  }

  console.log(num);
}