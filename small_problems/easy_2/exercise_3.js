function stringy(length) {
  let string = '';

  for (let index = 0; index < length; index += 1) {
    if (index % 2 === 0) {
      string += '1';
    } else {
      string += '0';
    }
  }

  return string;
}


console.log(stringy(6) === "101010");
console.log(stringy(9) === "101010101");
console.log(stringy(4) === "1010");
console.log(stringy(7) === "1010101");