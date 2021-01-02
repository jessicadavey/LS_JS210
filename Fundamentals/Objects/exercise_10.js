/*
after midnight:
1. get a time string
2. convert it into a Date object at that time on Jan 1 2000
3. use getTime() to convert it to milliseconds
4. subtract the milliseconds of Jan 1 2000 at midnight
5. divide by milliseconds per minute

before midnight:
1. get a time string
2. convert it into a Date object at that time on Dec 31 1999
3. use getTime() to convert it to milliseconds
4. subtract from milliseconds of Jan 1 2000 at midnight
5. divide by milliseconds per minute

*/

const MINUTES_PER_DAY = 1440;
const MILLISECONDS_PER_MINUTE = 60000;

function afterMidnight(timeStr) {
  let timeAfterMidnight = new Date(`January 1, 2000 ${timeStr}`);
  let midnight = new Date(`January 1, 2000 00:00`);

  let deltaMilliseconds = timeAfterMidnight.getTime() - midnight.getTime();

  return (deltaMilliseconds / MILLISECONDS_PER_MINUTE) % MINUTES_PER_DAY;
}

function beforeMidnight(timeStr) {
  let timeBeforeMidnight = new Date(`December 31, 1999 ${timeStr}`);
  let midnight = new Date(`January 1, 2000 00:00`);

  let deltaMilliseconds = midnight.getTime() - timeBeforeMidnight.getTime();

  return (deltaMilliseconds / MILLISECONDS_PER_MINUTE) % MINUTES_PER_DAY;

}

console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686