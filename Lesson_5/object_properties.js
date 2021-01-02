// 1.

function objectHasProperty(object, string) {
  for (let key in object) {
    if (key === string) {
      return true;
    }
  }

  return false;
}

let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

// console.log(objectHasProperty(pets, 'dog'));       // true
// console.log(objectHasProperty(pets, 'lizard'));    // false
// console.log(objectHasProperty(pets, 'mice'));      // true

// 2.

function incrementProperty(object, propertyName) {
  if (objectHasProperty(object, propertyName)) {
    object[propertyName] += 1;
  } else {
    object[propertyName] = 1;
  }

  return object[propertyName];
}

let wins = {
  steve: 3,
  susie: 4,
};

// console.log(incrementProperty(wins, 'susie'));   // 5
// console.log(wins);                               // { steve: 3, susie: 5 }
// console.log(incrementProperty(wins, 'lucy'));    // 1
// console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }


// 3.

function copyProperties(objectToCopy, copyDestination) {
  let numberOfProperties = 0;

  for (let key in objectToCopy) {
    copyDestination[key] = objectToCopy[key];
    numberOfProperties += 1;
  }

  return numberOfProperties;
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
// console.log(copyProperties(hal, sal));  // 2
// console.log(sal);                       // { model: 9000, enabled: true }

// 4.

function wordCount(string) {
  let stringArray = string.split(' ');

  let counts = {};

  for (let word of stringArray) {
    if (counts[word]) {
      counts[word] += 1;
    } else {
      counts[word] = 1;
    }
  }

  return counts;
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }