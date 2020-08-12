function isDoubleNumber(number) {
  str = String(number);

  if (str.length % 2 === 1) {
    return false;
  }

  let midPoint = str.length / 2;

  let firstHalf = str.slice(0, midPoint);
  let secondHalf = str.slice(midPoint);

  return firstHalf === secondHalf;
}

function twice(number) {
  if (isDoubleNumber(number)) {
    return number;
  } else {
    return number * 2;
  }
}


console.log(twice(37) === 74);
console.log(twice(44) === 44);
console.log(twice(334433) === 668866);
console.log(twice(444) === 888);
console.log(twice(107) === 214);
console.log(twice(103103) === 103103);
console.log(twice(3333) === 3333);
console.log(twice(7676) === 7676);