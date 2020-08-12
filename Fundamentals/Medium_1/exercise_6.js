function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt(); // This logs 'debugging' because of JavaScript's lexical scoping rules.
// The function logger has access to variables declared in the scope of its parent
// function, debugIt.