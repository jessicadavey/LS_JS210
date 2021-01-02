function repeatedChar(char, number) {
  let result = '';
  for (let index = 0; index < number; index += 1) {
    result += char;
  }

  return result;
}

function triangle(n) {
  for (let line = 1; line <= n; line += 1) {
    let spaces = n - line;
    let output = repeatedChar(' ', spaces) + repeatedChar('*', line);
    console.log(output);
  }
}


triangle(5);
//     *
//    **
//   ***
//  ****
// *****
triangle(9);
