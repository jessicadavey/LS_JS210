function repeater(string) {
  let doubled = '';

  for (let index = 0; index < string.length; index += 1) {
    doubled += string[index] + string[index];
  }

  return doubled;
}


console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""