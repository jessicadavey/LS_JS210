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

const checkGoldbach = expectedSum => {
  if (expectedSum % 2 === 1 || expectedSum < 4) {
    console.log(null);
    return;
  }

  for (let addend = 2; addend <= expectedSum / 2; addend += 1) {
    let difference = expectedSum - addend;
    
    if (isPrime(addend) && isPrime(difference)) {
      console.log(`${addend} ${difference}`);
    }
  }
}

checkGoldbach(3);
checkGoldbach(4);
checkGoldbach(12);
checkGoldbach(100);