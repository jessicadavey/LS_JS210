function swapName(fullName) {
  let nameArray = fullName.split(' ');

  let firstName = nameArray[0];
  let lastName = nameArray[1];

  return [lastName, firstName].join(', ');
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"