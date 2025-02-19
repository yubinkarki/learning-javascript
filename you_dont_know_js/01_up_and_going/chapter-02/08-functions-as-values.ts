// @ts-nocheck

/* FUNCTIONS AS VALUES */

// so far, we’ve discussed functions as the primary mechanism of scope in JS
// you recall typical function declaration syntax as follows:

function foo() {
  // ..
}

// though it may not seem obvious from that syntax
// foo is basically just a variable in the outer enclosing scope
// that’s given a reference to the function being declared
// that is, the function itself is a value, just like 42 or [1,2,3] would be
// this may sound like a strange concept at first, so take a moment to ponder it
// not only can you pass a value (argument) to a function
// but a function itself can be a value that’s assigned to variables
// or passed to or returned from other functions
// as such, a function value should be thought of as an expression, much like any other value or expression

var foo = function () {
  // ..
};

var x = function bar() {
  // ..
};

// the first function expression assigned to the foo variable is called anonymous
// because it has no name
// the second function expression is named (bar)
// even as a reference to it is also assigned to the x variable
// named function expressions are generally more preferable
// though anonymous function expressions are still extremely common

/* IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFEs) */

// in the previous snippet, neither of the function expressions are executed
// we could if we had included foo() or x(), for instance
// there’s another way to execute a function expression, which is typically referred to as an IIFE:

(function IIFE() {
  console.log("hello from iife");
})();

// IFEs can also have return values:

var y = (function ok() {
  return 43;
})();

console.log(y);
