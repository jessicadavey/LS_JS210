/*

Problem: calculate percentages of each type of character and return in an object

Rules:

- input: string
- output: object

- perecentage:
  - total of each type / total number of characters (including spaces)
  - round to two decimal places
  - use as a string
- types of letters:
  - lowercase: a-z
  - uppercase: A-Z
  - neither: anything else


Algorithm:

1. make an empty object 'percentages'
2. use string.match to get an array of matching characters
  one for lowercase, one for uppercase
  if no matches, set to empty array
3. subtract both from string.length to get 'neither'
4. convert numbers to percentage format 
    - divide by total
    - times by 100
    - use toFixed(2)
5. update the object with percentages

*/

function letterPercentages(string) {
  let percentages = {};
  
  let lowercase = string.match(/[a-z]/g) || [];
  let uppercase = string.match(/[A-Z]/g) || [];
  
  lowercase = (lowercase.length / string.length) * 100;
  uppercase = (uppercase.length / string.length) * 100;
  let neither = 100 - lowercase - uppercase;
  
  percentages.lowercase = lowercase.toFixed(2);
  percentages.uppercase = uppercase.toFixed(2);
  percentages.neither = neither.toFixed(2);
  
  return percentages;
}


console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

console.log(letterPercentages('a'));

// { lowercase: "100.00", uppercase: "0.00", neither: "0.00" }