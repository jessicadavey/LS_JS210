function gcd(num1, num2) {
  if (num2 === 0) {
    return num1;
  }

  return gcd(num2, (num1 % num2));

}


console.log(gcd(12, 4));
console.log(gcd(15, 10));
console.log(gcd(9, 2));
