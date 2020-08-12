/*

1. let counts = {}
2. split sentence into an array of words
3. loop through the array
4. if counts[word.length], increment by 1
5. otherwise counts[word.length] = 1
6. return counts

*/

function wordSizes(sentence) {
  let counts = {};

  let words = sentence.split(' ');

  words.forEach(word => {
    if (counts[word.length]) {
      counts[word.length] += 1;
    } else if (word.length > 0) {
      counts[word.length] = 1;
    }
  });

  return counts;
}



console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}