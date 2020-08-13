/*

1. find the length of the string
2. if the length is odd
  return string.slice(Math.floor(half length), Math.ceil(half length))

3. if the length is even
  return string.slice
    start: string.length / 2 - 1
    end: string.length / 2 + 1
*/

function centerOf(string) {
  let length = string.length;
  let halfLength = length / 2;

  if (length % 2 === 1) {
    return string.slice(Math.floor(halfLength), Math.ceil(halfLength));
  } else {
    return string.slice(halfLength - 1, halfLength + 1);
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"