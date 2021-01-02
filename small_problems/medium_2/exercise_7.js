/*
input: array
output: same array sorted in place


rules:
implement bubble sort
  - iterate through all but the last element of the array
  - compare current element with next element
    - if the second element is less than the first, swap them
  - continue making passes until no swaps are made
  - must work with numbers and strings

algorithm:

  
while true;
  - let swapped = false;
  - loop from index 0 to index length - 2
  - compare current index to index + 1
    - if index + 1 < index 
      - swap them
        - let first = array[index]
        - let second = array[index + 1]
        - array[index] = second
        - array[index + 1] = first
      - swapped = true
    - end loop
    - if swapped = false
        return array 
*/

function bubbleSort(array) {
  while (true) {
    let swapped = false;
    for (let index = 0; index < array.length - 1; index += 1) {
      if (array[index + 1] < array[index]) {
        let first = array[index];
        let second = array[index + 1];
        array[index] = second;
        array[index + 1] = first;
        swapped = true;     
      }
    }
    if (!swapped) {
      return array; 
    }
  }
}

const array4 = [1, 2, 3];
bubbleSort(array4);
console.log(array4); [1, 2, 3];

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]