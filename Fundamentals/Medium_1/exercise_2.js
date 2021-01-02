let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}

// No.  i is only incremented if i % 3 is not equal to 0.
// As 0 % 3 === 0, the first branch will run on the first iteration
// of the while loop, and 0 will be output.  i will not be incremented, and 
// so 0 will be output again...and again, in an infinite loop.