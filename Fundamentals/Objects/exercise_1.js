const myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

myObject[1];
myObject[a]; // 'a' should be in quotes, or it's looking for a local variable a
myObject.a;