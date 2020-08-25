/*
Problem:

Input: total number of switches, n
Output:  array of switch numbers that are on after n passes (array)

Rules:
 - on each pass, toggle switches for which switchNumber % passNumber === 0
    pass 1: 1, 2, 3, 4, 5
    pass 2: 2, 4
    pass 3: 3
    ...and so on
  - toggle: switch that was on becomes off, switch that was off becomes on
  - return the switchNumbers that are on at the end of all passes in an Array

  Data Structure:
{ 1: on,
  2: off,
  3: off,
  4: on,
  5: off,
  6: off,
  7: off,
  8: off,
  9: on,
  10: off,
}

Algorithm:
1. for passNumbers 1 to n
2. iterate through switchNumbers
  - if switchNumber % passNumber === 0
  - toggle switch
    - if switch was on, make off
    - if switch was off make on
3. after iteration, filter switchNumbers to just those whose value is 'on'

Alternative Algorithm:
1. return all numbers from 1 to n for which square root is an integer
  Math.sqrt round === Math.sqrt
*/

function lightsOn(switches) {
  let switchBank = {};
  for (let switchNumber = 1; switchNumber <= switches; switchNumber += 1) {
    switchBank[String(switchNumber)] = false;
  }
  for (let passNumber = 1; passNumber <= switches; passNumber += 1) {
    passThroughSwitches(passNumber, switchBank);
  }

  return Object.keys(switchBank).filter(key => switchBank[key]);
}

function passThroughSwitches(passNumber, switchBank) {
  let switchKeys = Object.keys(switchBank);
  switchKeys.forEach(switchKey => {
    let switchNumber = parseInt(switchKey, 10);
    if (switchNumber % passNumber === 0) {
      toggleSwitch(switchNumber, switchBank);
    }
  });
}

function toggleSwitch(switchNumber, switchBank) {
  let switchKey = switchNumber.toString();
  switchBank[switchKey] = !switchBank[switchKey];
}

// Tests:
console.log(lightsOn(5)); // [1, 4];
console.log(lightsOn(100)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(lightsOn(1)); // [1];
console.log(lightsOn(3)); // [1];
console.log(lightsOn(10)); // [1, 4, 9];
