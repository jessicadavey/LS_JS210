function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;

do {
  tries += 1;
} while (randomNumberBetween(1, 6) <= 2)


console.log('It took ' + String(tries) + ' tries to get a number greater than 2');