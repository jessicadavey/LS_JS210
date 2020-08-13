function swapName(fullName) {
  let nameArray = fullName.split(' ');

  let [firstName, lastName] = nameArray;

  return [lastName, firstName].join(', ');
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"