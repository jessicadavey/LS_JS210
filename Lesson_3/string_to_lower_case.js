function toLowerCase(string) {
  const CONVERSION_OFFSET = 32;
  let result = '';

  for (let index = 0; index < string.length; index += 1) {
    let charCode = string.charCodeAt(index);

    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode(charCode + CONVERSION_OFFSET);
    } else {
      result += string[index];
    }

  }

  return result;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"