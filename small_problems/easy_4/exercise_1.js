/*
1. get everything after the decimal point
    angle - Math.floor(angle)

2. convert to minutes (will have decimal point)
    multiply by minutes_per_degree

3. get everything after that decimal point
    minutes - Math.floor(minutes)

4. convert to seconds
    multiply by seconds_per_degree

5. combine into a string with appropriate units (use string concatenation)
    Use Math.floor on minutes and Math.round on seconds
    pad with zeroes where necessary

*/

function makeTwoDigits(str) {
  if (str.length === 1) {
    return '0' + str;
  } else if (str.length === 2) {
    return str;
  }
}

const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE  = 60;

function dms(angle) {
  let minutes = (angle - Math.floor(angle)) * MINUTES_PER_DEGREE;
  let seconds = (minutes - Math.floor(minutes)) * SECONDS_PER_MINUTE;

  angle = Math.floor(angle);
  minutes = makeTwoDigits(String(Math.floor(minutes)));
  seconds = makeTwoDigits(String(Math.floor(seconds)));

  return `${angle}°${minutes}'${seconds}"`;
}


console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"