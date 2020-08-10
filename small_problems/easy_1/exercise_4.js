const rlSync = require('readline-sync');
const SQ_METERS_TO_SQ_FEET = 10.7639;

console.log('Enter the length of the room in meters:');
let lengthInMeters = parseInt(rlSync.prompt(), 10);

console.log('Enter the width of the room in meters:');
let widthInMeters = parseInt(rlSync.prompt(), 10);

let areaInSquareMeters = (lengthInMeters * widthInMeters).toFixed(2);
let areaInSquareFeet = (areaInSquareMeters * SQ_METERS_TO_SQ_FEET).toFixed(2);

console.log(`The area of the room is ${areaInSquareMeters} square meters (${areaInSquareFeet} square feet).`);