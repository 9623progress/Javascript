// An IIFE, or Immediately Invoked Function Expression, is a JavaScript function that is executed immediately after it is defined. It is a common pattern used to create a new scope for variables, preventing them from polluting the global scope.

// ()()

(function chai() {
  console.log("welcome");
})();

((user) => {
  console.log(`Welcome ${user}`);
})("pragati");
