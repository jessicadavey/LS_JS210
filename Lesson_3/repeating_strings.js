function repeat(string, times) {
 let iteration = 1;
 let result = ''

 if (times >= 0 && typeof(times) === 'number') {

  while (iteration <= times) {
    for(let index = 0; index < string.length; index += 1) {
      result = result + string[index];
    }
    iteration += 1;
  }

  return result;
  }
}

console.log(repeat('abc', 1));       // "abc"
console.log(repeat('abc', 2));       // "abcabc"
console.log(repeat('abc', -1));      // undefined
console.log(repeat('abc', 0));       // ""
console.log(repeat('abc', 'a'));     // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));    // undefined
console.log(repeat('abc', '  '));    // undefined