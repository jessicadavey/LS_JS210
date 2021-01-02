function concat(...args) {
  let result = [];

  for (let argIndex = 0; argIndex < args.length; argIndex += 1) {
    if (Array.isArray(args[argIndex])) {
      for (let index = 0; index < args[argIndex].length; index += 1) {
        result.push(args[argIndex][index]);
      }
    } else {
      result.push(args[argIndex]);
    }
  }

  return result;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]