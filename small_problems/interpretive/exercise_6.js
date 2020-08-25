/*
Problem:

input: odd integer >= 7, n
output: pattern of stars and spaces logged to console (no meaningful return)

Rules:
- output n number of lines
- n = 2a + 1 (ex: n = 7, a = 3; n = 9, a = 4)
- line number a + 1 has n number of stars and no spaces
- all other lines have 3 stars
  - first line: 0 spaces + star + a-1 spaces + star + a-1 spaces + star
  - each line up to line a + 1
    - +1 initial space, -1 interstitial space
  - at line a + 1 (or interstitial spaces = 0)
    - print n stars, no spaces
- print all lines except a + 1 line again in reverse

star(7);
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

star(9);
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *


Algorithm:

1. initialize variables for leadSpaces and middleSpaces
  - leadSpaces = 0
  - middleSpaces = ((n - 1)/2) - 1
2. while middleSpaces >= 0
  print leadSpaces + star + middleSpaces + star + middleSpaces + star
  leadSpaces += 1
  middleSpaces -= 1
3. print a line of n number of stars
4. while leadSpaces >= 0
  print leadSpaces + star + middleSpaces + star + middleSpaces + star
    leadSpaces -= 1
    middleSpaces += 1
*/

function star(n) {
  let leadSpaces = 0;
  let middleSpaces = ((n - 1) / 2) - 1;

  let lines = [];

  while (middleSpaces >= 0 ) {
    lines.push(makeLine(leadSpaces, middleSpaces));
    leadSpaces += 1;
    middleSpaces -= 1;
  }

  lines.push('*'.repeat(n));

  for (let index = 0; index < lines.length; index += 1) {
    console.log(lines[index]);
  }

  for (let index = lines.length - 2; index >= 0; index -= 1) {
    console.log(lines[index]);
  }
}

function makeLine(leadSpaces, midSpaces) {
  return ' '.repeat(leadSpaces) + '*' + ' '.repeat(midSpaces) + '*' + ' '.repeat(midSpaces) + '*';
}

star(7);
star(9);
star(15);