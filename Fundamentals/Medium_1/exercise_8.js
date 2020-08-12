function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  let sum; // 0 must be assigned to sum, or loop will add numbers to undefined

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];

  }

  return sum; // need explicit return
}



let arr1 = [1, 4, 2];
let arr2 = [2, 2, 2];
console.log(productOfSums(arr1, arr2)); //  42