const person = {
  firstName() {
    return 'Victor';
  },
  lastName() {
    return 'Reyes';
  },
};

console.log(`${person.firstName} ${person.lastName}`);

// There needs to be parentheses after the methods, or references to the methods will be returned and
// the method won't be called.