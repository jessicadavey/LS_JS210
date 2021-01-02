# Primitive Values, Types and Type Conversions

In Modern JavaScript, there are 7 primitive data types (though only 5 that are often used).  They are:

- number
- string
- boolean
- null
- undefined
- symbol (infrequently used)
- bigint (infrequently used)

In JavaScript, primitive data values are **immutable**.  They can't be changed.  It may look like they're being changed, but they aren't.  Instead, the variable to which they were assigned is reassigned to a completely different primitive value.

For example:

```javascript
let string = 'hello';
let otherString = string;

string += ' world!';

console.log(string) // outputs 'hello world!'
console.log(otherString) // outputs 'hello'
```

On Line 2 of the above code snippet, the variable `string` is reassigned to a new string that has a value of 'hello world!'.  `otherString` still points to the original string, so the change is not observed in the `otherString` variable.

In addition to primitive data types, there is also a compound data type, Object.  It includes objects, which are collections of key-value pairs, and arrays, which, in JavaScript, are objects.  In contrast to primitive data types, objects **are** mutable.

An example:

```javascript
let array = [1, 2, 3, 4];
let otherArray = array;

array[0] = 'awesome';

console.log(array) // outputs ['awesome', 2, 3, 4]
console.log(otherArray) // outputs ['awesome', 2, 3, 4]
```

After the first element of `array`is reassigned, the `array` variable still points to the same array, which is the same array that `otherArray` references.  Therefore, the change is seen in both variables.