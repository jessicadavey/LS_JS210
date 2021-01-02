function oddities(array) {
  const oddElements = [];

  for (let i = 0; i < array.length; i += 2) {
    oddElements.push(array[i]);
  }

  return oddElements;
}

oddities([2, 3, 4, 5, 6]) === [2, 4, 6];      // false
oddities(['abc', 'def']) === ['abc'];         // false

/* Yes - arrays are compared by reference, not by the values they 
contain.  The output of the oddities function is being compared to 
a completely separate array that just happens to have the same values.
Since the two arrays are two different objects, the comparison returns false. */