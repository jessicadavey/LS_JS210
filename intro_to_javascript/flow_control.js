// let x;

// if (x = 5) {
//   console.log("how can this be true?");
// } else {
//   console.log("it is not true");
// }

// function evenOrOdd(number) {
//   if (typeof number === 'number' && Number.isInteger(number)) {
//     if (number % 2 === 0) {
//       console.log('even');
//     } else {
//       console.log('odd');
//     }
//   } else {
//     console.log("must enter an integer")
//   }

// }

// evenOrOdd(3.789);

// function barCodeScanner(serial) {
//   switch (serial) {
//     case '123':
//       console.log('Product1');
//     case '113':
//       console.log('Product2');
//     case '142':
//       console.log('Product3');
//     default:
//       console.log('Product not found!');
//   }
// }

// barCodeScanner('113');

// if (foo()) {
//   return 'bar';
// } else {
//   return qux();
// }

// function isArrayEmpty(arr) {
//   if (arr) {
//     console.log('Not Empty');
//   } else {
//    console.log('Empty');
//   }
// }

// isArrayEmpty([]);   // [] is an empty Array

// function numberRange(number) {
//   if (number >= 0 && number <= 50) {
//     console.log(`${number} is between 0 and 50`);
//   } else if (number >= 51 && number <= 100) {
//     console.log(`${number} is between 51 and 100`);
//   } else if (number > 100) {
//     console.log(`${number} is greater than 100`);
//   } else {
//     console.log(`${number} is less than 0`);
//   }
// }

// numberRange(25);   // '25 is between 0 and 50'
// numberRange(75);   // '75 is between 51 and 100'
// numberRange(125);  // '125 is greater than 100'
// numberRange(-25);  // '-25 is less than 0'

function conditionalUpperCase(string) {
  return ((string.length > 10) ? string.toUpperCase() : string);
}

console.log(conditionalUpperCase('goodbye'));