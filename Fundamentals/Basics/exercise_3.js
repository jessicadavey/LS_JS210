if (condition1) {
  // ...
  if (condition2) {
    // ...
  } else {
    // ...
  }
} else {
  // ...
  if (condition4) {
    // ...
    if (condition5) {
    // ...
    }
  }
}

// Execution Paths:
//
// 1. condition 1 -> condition 2
// 2. condition 1 -> else
// 3. else -> condition 4 -> condition 5
// 4. else -> condition 4 -> nothing
// 5. else

// 5 in total