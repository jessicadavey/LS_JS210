function penultimate(string) {
  array = string.split(' ')
  return array[array.length - 2];
}
// it isn't possible to access the second to last item
// in an array using a negative number.


console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"