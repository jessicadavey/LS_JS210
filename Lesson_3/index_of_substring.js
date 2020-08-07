/*
Index Of:
1. find the length of secondString
2. starting at index 0 of first String, loop through a substring of the 
first string equal to the length of the second string and compare the characters
3. return the starting index if they all match
4. stop looping through first string at firstString - length of secondString
5. return  -1


first string length = 12
second string length = 1

last index to check = 11
*/

function indexOf(firstString, secondString) {
  let lastIndexToCheck = firstString.length - secondString.length;

  for (let outerIndex = 0; outerIndex <= lastIndexToCheck; outerIndex += 1) {
    let match = true;

    for (let innerIndex = 0; innerIndex <= secondString.length - 1; innerIndex += 1) {
      if (firstString[innerIndex + outerIndex] !== secondString[innerIndex]) {
        match = false;
      }

    }
    if (match) {
      return outerIndex;
    }

  }
  return -1;
  }

function lastIndexOf(firstString, secondString) {
  let firstIndexToCheck = firstString.length - secondString.length;

  for (let outerIndex = firstIndexToCheck; outerIndex >= 0; outerIndex -= 1) {
    let match = true;

    for (let innerIndex = 0; innerIndex <= secondString.length - 1; innerIndex += 1) {
      if (firstString[innerIndex + outerIndex] !== secondString[innerIndex]) {
        match = false;
      }

    }
    if (match) {
      return outerIndex;
    }

  }
  return -1;
}

console.log(indexOf('hello', 'el'));

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1