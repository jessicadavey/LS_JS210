// 1.

function radiansToDegrees(radians) {
  return (radians * 180) / Math.PI;
}

// console.log(radiansToDegrees(1));

// 2.

let number = -180;
// console.log(Math.abs(number));

// 3.

let squareRoot = Math.sqrt(16777216);
// console.log(squareRoot);


// 4. 

// console.log(Math.pow(16, 6));

// 5.

let a = Math.floor(50.72);
let b = Math.ceil(49.2);
let c = Math.round(49.86);

// console.log(a, b, c);

// 6.

let random = function (min, max) {
  if (min < max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  } else if (max < min) {
    return Math.floor(Math.random() * (min - max + 1) + max);
  } else {
    return 'please supply a range.';
  }
}

console.log(random(0, 0));