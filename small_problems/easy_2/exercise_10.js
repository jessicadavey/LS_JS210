function getSuffix(str) {
  let suffix = 'th';

  if (str[str.length - 2] !== '1') {
    switch (str[str.length - 1]) {
      case '1': 
        suffix = 'st';
        break;
      case '2': 
        suffix = 'nd';
        break;
      case '3':
        suffix = 'rd';
        break;
    } 
  }
  return suffix;
}

function century(year) {
  let cent = String(Math.floor((year - 1) / 100) + 1);
  return cent + getSuffix(cent);

}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"