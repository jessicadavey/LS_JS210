/*

Rules: 

input: 3 integers representing angles of a triangle in degrees
output: string representing type of triangle
('right', 'acute', 'obtuse', or 'invalid')

- valid triangle:
  - angle1 + angle2 + angle3 === 180 && all angles > 0
- right triangle:
  - one angle === 90
- acute triangle: 
  - all angles are less than 90
- obtuse triangle:
  - one angle is greater than 90

Algorithm

1. return invalid if triangle is not a valid triangle
2. return acute if all angles are less than 90
3. return right if one angle is 90
4. otherwise return obtuse

*/
function isValidTriangle(angle1, angle2, angle3) {
  return [angle1, angle2, angle3].every(angle => angle > 0) &&
    angle1 + angle2 + angle3 === 180;
}


function triangle(angle1, angle2, angle3) {
  if (!isValidTriangle(angle1, angle2, angle3)) {
    return "invalid";
  }

  if ([angle1, angle2, angle3].every(angle => angle < 90)) {
    return "acute";
  }

  if (angle1 === 90 || angle2 === 90 || angle3 === 90) {
    return "right"; 
  }

  return "obtuse";
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
console.log(triangle(-90, 60, 30)); // "invalid"
console.log(triangle(10, 50, 120)); // "obtuse"