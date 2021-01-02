function doubleConsonants(string) {
  let doubled = ''

  for (let index = 0; index < string.length; index += 1) {
    doubled += string[index];
    if (string[index].match(/[^aeiou\d\W]/g)) {
      doubled += string[index];
    }
  }

  return doubled;
}

console.log(doubleConsonants('String') === "SSttrrinngg");
console.log(doubleConsonants('Hello-World!') === "HHellllo-WWorrlldd!");
console.log(doubleConsonants('July 4th') === "JJullyy 4tthh");
console.log(doubleConsonants('') === "");