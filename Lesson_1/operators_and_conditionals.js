let apples = 3;
let bananas = 5;

if (apples == bananas) {
  console.log('Apples are equal to bananas');
}

bananas = '3';

if (apples === bananas) {
  console.log('Apples are strictly equal to bananas');
} else {
    if (apples == bananas) {
      console.log('Same number, different types');
    } 
    else {
      console.log('Not equal');
    }
}

apples = 3;
bananas = 3;

let areEqual = (apples === bananas);
console.log(areEqual);

apples = 3;
bananas = undefined;
let eitherOr = (apples || bananas);
console.log(eitherOr);

bananas = 1;
eitherOr = (apples || bananas);
console.log(eitherOr);

eitherOr = (bananas || apples);
console.log(eitherOr);

let lastName = 'Davey'
let familyMessage;

familyMessage = lastName === 'Davey' ? "You're part of the family!" : "You're not family.";

console.log(familyMessage);