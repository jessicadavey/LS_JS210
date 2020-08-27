/*
- input: integer year greater than 1752
- output: integer, number of 'Friday the 13ths' in that year


Algorithm:

Overview:  find the 13th of every month and check whether or not it happened on a Friday, then count how many and return that number

1. make an array of numbers 1 to 12
2. map it to new Date objects (year-num-13)
3. map to the number returned by getDay() method
4. reduce to count of 5s (Friday)

*/

const reducer = (count, current) => {
  if (current === 5) {
    count += 1; 
  }
  return count;
}

function fridayThe13ths(year) {
  let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return months.map(month => new Date(`${year}-${month}-13`))
    .map(date => date.getDay())
    .reduce(reducer, 0);
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
console.log(fridayThe13ths(2020));      // 2