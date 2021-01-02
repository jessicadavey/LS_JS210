function asciiValue(string) {
  return string.split('')
               .map(char => char.charCodeAt(0))
               .reduce(((acc, num) => acc + num), 0);
}


console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0