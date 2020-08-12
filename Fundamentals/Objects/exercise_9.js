/*
1. get midnight
2. convert to millisecond representation
3. convert delta minutes to delta milliseconds
4. add to midnight to make new time
5. get hours from new time
6. get minutes from new time
7. pad both with zeroes
8. concatenate into hh:mm

*/


const MILLISECONDS_PER_MINUTE = 60000;

function timeOfDay(deltaMinutes) {
  let midnight = new Date('January 1, 2000, 00:00:00');

  let deltaMilliseconds = deltaMinutes * MILLISECONDS_PER_MINUTE;

  let newMilliseconds = new Date(midnight.getTime() + deltaMilliseconds);

  let hours = newMilliseconds.getHours();
  let minutes = newMilliseconds.getMinutes();

  return `${padWithZeroes(hours, 2)}:${padWithZeroes(minutes, 2)}`;
}

function padWithZeroes(number, length) {
  let numberString = String(number);

  while (numberString.length < length) {
    numberString = `0${numberString}`;
  }

  return numberString;
}

console.log(timeOfDay(0));          // "00:00"
console.log(timeOfDay(-3));         // "23:57"
console.log(timeOfDay(35));         // "00:35"
console.log(timeOfDay(-1437));      // "00:03"
console.log(timeOfDay(3000));       // "02:00"
console.log(timeOfDay(800));        // "13:20"
console.log(timeOfDay(-4231));      // "01:29"