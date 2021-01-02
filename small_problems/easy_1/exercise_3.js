const rlSync = require('readline-sync');


const SQFT_PER_SQM = 10.7639;

console.log('Enter the length of the room in meters:');
let length = parseInt(rlSync.prompt(), 10);

console.log('Enter the width of the room in meters:');
let width = parseInt(rlSync.prompt(), 10);

let areaInSqM = length * width;
let areaInSqFt = areaInSqM * SQFT_PER_SQM;


console.log(`The area of the room is ${areaInSqM.toFixed(2)} square meters ` +
`(${areaInSqFt.toFixed(2)} square feet).`);