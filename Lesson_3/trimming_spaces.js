const trim = string => {

  let result = '';
  let startIndex = string.length;
  let endIndex = string.length;


// 1. loop forward through string to find where non-space characters start
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] !== ' ') {
      startIndex = index;
      break;
    }
  }

  // 2. loop backward through string to find where non-space characters end
  for (let index = string.length - 1; index >= 0; index -= 1) {
    if (string[index] !== ' ') {
      endIndex = index;
      break;
    }
  }

  // 3. build result string
  for (let index = startIndex; index <= endIndex; index += 1) {
    result += string[index];
  }
  
  // 4. return the result, unless start and end are equal (meaning all spaces or empty string)
  if (startIndex === endIndex) {
    return ''; 
    } else {
    return result;
  }
}


console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""