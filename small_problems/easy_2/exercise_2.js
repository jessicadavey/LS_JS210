function createBorder(length) {
  let border = '+-';

  for (let index = 0; index < length; index += 1) {
    border += '-';
  }

  return border + '-+';
}

function createSpace(length) {
  let space = '| ';

  for (let index = 0; index < length; index += 1) {
    space += ' ';
  }

  return space + ' |';

}



function logInBox(sentence) {
  let length = sentence.length;

  console.log(createBorder(length));
  console.log(createSpace(length));
  console.log(`| ${sentence} |`);
  console.log(createSpace(length));
  console.log(createBorder(length));

}




logInBox('To boldly go where no one has gone before.');
// will log on the console:

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

logInBox('');