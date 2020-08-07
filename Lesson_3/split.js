function splitString(string, delimiter) {
  if (delimiter === '') {
    for(let index = 0; index < string.length; index += 1) {
      console.log(string[index]);
    }
  } else  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
  } else {
    let substring = '';

    for (let index = 0; index < string.length; index += 1) {
      if (string[index] !== delimiter) {
        substring += string[index];
      } else {
        console.log(substring);
        substring = '';
      }
    }

    console.log(substring);
  }
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// // logs:
// // ERROR: No delimiter

splitString('hello', '');
// // logs:
// // h
// // e
// // l
// // l
// // o

splitString('hello', ';');
// // logs:
// // hello

splitString(';hello;', ';');
// // logs:
// //  (this is a blank line)
// // hello