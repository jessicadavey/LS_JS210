function generateNumbers(limit) {
  let result = '';

  for (let num = 1; num <= limit; num += 1) {
    result += num;
  }
  return result;
}

function generateStars(number) {
  let result = '';
  let counter = 1;

  while (counter <= number) {
    result += '*';
    counter += 1;
  }

  return result;
}

function generatePattern(nStars) {
  for (let num = 1; num <= nStars; num += 1) {
    console.log(generateNumbers(num) + generateStars(nStars - num));
  }
}

generatePattern(20);