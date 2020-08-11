function repeatedCharacters(string) {
  // 1. Downcase the string
  string = string.toLowerCase();
  // 2. make an object containing all character counts
  let count = {};

  for (let index = 0; index < string.length; index += 1) {
    let letter = string[index];

    if (!count[letter]) {
      count[letter] = 0;
    }

    count[letter] += 1;
  }
  // 3. delete any count less than 2
  for (let key in count) {
    if (count[key] < 2) {
      delete count[key];
    }
  }

  return count;
}


console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }