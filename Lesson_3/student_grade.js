let score1 = prompt('Enter score 1:');
let score2 = prompt('Enter score 2:');
let score3 = prompt('Enter score 3:');


let averageScore = (Number(score1) + Number(score2) + Number(score3)) / 3;
let grade;

if (averageScore >= 90) {
  grade = 'A';
} else if (averageScore >= 70) {
  grade = 'B'; 
} else if (averageScore >= 50) {
  grade = 'C';
} else {
  grade = 'F'; }

console.log(`Based on the average of your 3 scores your letter grade is "${grade}"`);