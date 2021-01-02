function buyFruit(list) {
  let result = [];

  list.forEach(item => {
    let times = item[1];

    for (let i = 1; i <= times; i += 1) {
      result.push(item[0]);
    }
  });

  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]