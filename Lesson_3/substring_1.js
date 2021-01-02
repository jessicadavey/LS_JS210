function substr(string, start, length) {
  if (length <= 0) {
    return '';
  }

  if (start < 0) {
    start = string.length + start;
  }

  let endIndex = Math.min((start + length - 1), (string.length - 1));

  let substring = '';
  for (let index = start; index <= endIndex; index += 1) {
    substring += string[index];
  }

  return substring;
}

let string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 2, 5));      // ""