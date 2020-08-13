function countOccurrences(items) {
  let occurrences = {};

  items.forEach(item => occurrences[item] = occurrences[item] + 1 || 1);

  Object.keys(occurrences).forEach(key => console.log(`${key} => ${occurrences[key]}`));
}


const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2