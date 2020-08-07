function processIndex(index) {
  if (index < 0 || Number.isNaN(Number(index))) {
    return 0;
  } else {
    return index;
  }
}


function substring(string, start, end) {
  let startIndex = Math.min(processIndex(start), processIndex(end));
  let endIndex = Math.max(processIndex(start), processIndex(end));

  if (end === undefined || end > string.length) {
    endIndex = string.length;
  }

  let result = '';

  for (let index = startIndex; index < endIndex; index += 1) {
    result += string[index];
  }

  return result;

}

let string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"