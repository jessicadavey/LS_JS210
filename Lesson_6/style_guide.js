// Problem 1:
let title = "The Three-Body Problem";

// Use single quotes for strings.
let title = 'The Three-Body Problem';

// Problem 2:
let title = 'The Three-Body Problem',
    author = 'Cixin Liu',
    page_count = 400;

// Use one let declaration per assignment.
// Use camelCase for variable names.

let title = 'The Three-Body Problem';
let author = 'Cixin Liu';
let pageCount = 400;

// Problem 3:
let completed = lastPageRead == 400;

// Use === instead of ==
let completed = lastPageRead === 400;


// Problem 4:
if (finishedBook())
  console.log('You have finished reading this book');

// need braces around body of if statement
if (finishedBook()) {
  console.log('You have finished reading this book');
}

// Problem 5:
function read(pages) {
  console.log('You started reading.');
  for (let page=0; page<pages; page += 1) {
          let message = 'You read page '+page;
          console.log(message);
  }
}

read(400);

// Use a function expression instead of a function declaration.
// Put an empty line before the start of the block.
// Put spaces before and after operators.
// Use string interpolation instead of concatenation.
// Use 2 spaces for indentation.

let read = function logPagesRead(pages) {
  console.log('You started reading.');

  for (let page = 0; page < pages; page += 1) {
    let message = `You read page ${page}`;
    console.log(message);
  }
}

read(400);