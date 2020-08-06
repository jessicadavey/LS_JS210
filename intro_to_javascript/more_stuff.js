// let array1 = [1, 2, 3];
// let array2 = array1;
// array1[1] = 4;
// console.log(array2); // [1, 4, 3]

// console.log(Math.sqrt(37));


function allMatches(strings, regex) {
  return strings.filter((string) => {
    return regex.test(string)
  });
}

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

let result = allMatches(words, /lab/); // ['laboratory', 'flab', 'elaborate']
console.log(result);