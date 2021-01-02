/*
input: 3 numbers representing triangle side lengths
outupt: string:
  - equilateral
  - isoscles
  - scalene
  - invalid
  
Rules:
  valid triangle: 
    - side1 + side2 > side3 (side3 is longest side)
    - every side length greater than 0
  equilateral:
    - side1 === side2 && side2 === side3
  isosceles: 
    - side1 === side2 || side2 === side3 || side1 === side3
  scalene:
    - anything else
    
Algorithm:

1. return invalid if it is not a valid triangle
  - put all sides into an array and sort shortest to longest
  - array.every (greater than 0) && array[0] + array[1] > array[2]
2. use remaining rules to determine type of triangle
3. return that type


*/

function validTriangle(side1, side2, side3) {
  let sides = [side1, side2, side3].sort((a, b) => a - b);
  return sides.every(side => side > 0) && sides[0] + sides[1] > sides[2];
  
}

function triangle(side1, side2, side3) {
  if (!validTriangle(side1, side2, side3)) {
    return "invalid"; 
  }
  if (side1 === side2 && side2 === side3) {
    return "equilateral"; 
  } else if (side1 === side2 || side2 === side3 || side3 === side1) {
    return "isosceles";
  } 
  
  return "scalene"; 
}




console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
console.log(triangle(10.7, 10.7, 10.7)); // "equilateral"
console.log(triangle(-1, 2, 3)); // "invalid"
console.log(triangle(2, 3, 4.3)); // "scalene"
console.log(triangle(40, 40, 70)); // "isosceles"
console.log(triangle(2, -1, 3)); // "invalid"
console.log(triangle(4.3, 2, 3)); // "scalene"
console.log(triangle(70, 40, 40)); // "isosceles"