/*
Problem:

Input: odd integer, n
Output: print a four-pointed diamond to the console

Rules:
  - if given 1, print single star
  - total number of lines === n
  - longest line has n stars
  - pad stars with spaces
  - number of stars each line:
    - starts with 1
    - goes up by 2 each line up to n
    - then goes down by two each line back to 1
  - number of spaces each line:
    - start at Math.floor(n / 2) on each side of star
    - go down by one down to 0
    - go back up to Math.floor(n / 2)


Algorithm:
  - each line, print spaces + stars + spaces
  - spaces:
    - start at Math.floor(n / 2)
    - subtract 1
    - when it's at zero, go back up to start
  - stars:
    - start at 1
    - add 2
    - when it's at n, go back down to start

Examples:

diamond(3)
 * 
***
 * 

diamond(5)
  *  
 *** 
*****
 *** 
  *  

diamond(1)
*

diamond(9)
    *    
   ***   
  *****  
 ******* 
*********
 ******* 
  *****  
   ***   
    *    

*/

function diamond(n) {
  let stars = generateStars(n).map(star => '*'.repeat(star));
  let spaces = generateSpaces(n).map(space => ' '.repeat(space));

  for (let index = 0; index < n; index += 1) {
    console.log(spaces[index] + stars[index] + spaces[index]);
  }

}

function generateSpaces(n) {
  let start = Math.floor(n / 2);
  let result = [];
  let spaces = start;

  while (spaces > 0) {
    result.push(spaces);
    spaces -= 1;
  }

  while (spaces <= start) {
    result.push(spaces);
    spaces += 1;
  }

  return result;
}

function generateStars(n)  {
  let start = 1;
  let result = [];
  let stars = start;
  
  while (stars < n) {
    result.push(stars);
    stars += 2;
  }

  while (stars > 0) {
    result.push(stars);
    stars -= 2;
  }

  return result;
}

diamond(9);
diamond(5);
diamond(3);