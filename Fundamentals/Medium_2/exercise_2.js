// const person = { name: 'Victor' };
// const otherPerson = { name: 'Victor' };

// console.log(person === otherPerson);    // false -- expected: true

// The above code does not work because JavaScript compares objects by
// reference, i.e., whether or not they point to the same object.  person 
// and otherPerson are not the same object, so they are not equal, even though
// their keys and values are the same.

// Refactored:

function objectEqual(obj1, obj2) {
  if (obj1.length !== obj2.length) {
    return false;
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

console.log(objectEqual(person, otherPerson));    // false -- expected: true

// However, this won't work if any of the values are themselves objects (unless they
// are the same object referenced in both places.