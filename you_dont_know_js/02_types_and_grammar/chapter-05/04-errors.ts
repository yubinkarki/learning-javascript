// @ts-nocheck

/* ERRORS */

// not only does JS have different subtypes of errors
// (TypeError, ReferenceError, SyntaxError, etc)
// but also the grammar defines certain errors to be enforced at compile time
// as compared to all other errors that happen during runtime

// in particular, there have long been a number of specific conditions
// that should be caught and reported as “early errors” (during compilation)
// any straight-up syntax error is an early error (a = ,)
// but also the grammar defines things that are syntactically valid but disallowed nonetheless

// since execution of your code has not begun yet
// these errors are not catch-able with try..catch;
// instead they will just fail the parsing/compilation of your program

// one simple example is with syntax inside a regular expression literal
// there’s nothing wrong with the JS syntax here
// but the invalid regex will throw an early error:
// var a = /+foo/; // SyntaxError: Invalid regular expression: /+foo/: Nothing to repeat
// 42 = a; // ERROR: Invalid assignment target

// ES5’s strict mode defines even more early errors
// for example, in strict mode, function parameter names cannot be duplicated:
function foo(a, b, a) {} // fine

// ERROR: "a" cannot be bound multiple times in the same parameter list
// function bar(a, b, a) {
//   "use strict";
// }

/* USING VARIABLES TOO EARLY */

// ES6 defines a (frankly confusingly named) new concept called the TDZ (“Temporal Dead Zone”)
// the TDZ refers to places in code where a variable reference cannot yet be made
// because it hasn’t reached its required initialization

// the most clear example of this is with ES6 let block-scoping:
// {
//   a = 42; // ReferenceError: Cannot access 'a' before initialization
//   let a;
// }

// the assignment a = 2 is accessing the a variable (which is indeed block-scoped to the { .. } block)
// before it’s been initialized by the let a declaration
// so it’s in the TDZ for a and throws an error

// interestingly, while typeof has an exception to be safe for undeclared variables
// no such safety exception is made for TDZ references:
// {
//   typeof a; // undefined
//   typeof b; // ReferenceError: Cannot access 'b' before initialization
//   let b;
// }

/* FUNCTION ARGUMENTS */

// another example of a TDZ violation can be seen with ES6 default parameter values:
var b = 3;

function bar(a = 42, b = a + b + 5) {}

// the b reference in the assignment would happen in the TDZ for the parameter b
// (not pull in the outer b reference)
// so it will throw an error
// however, the a is fine since by that time it’s past the TDZ for parameter a

// when using ES6’s default parameter values
// the default value is applied to the parameter if you either omit an argument
// or you pass an undefined value in its place:
function test(a = 42, b = a + 1) {
  console.log(a, b);
}

test(); // 42 43
test(undefined); // 42 43
test(5); // 5 6
test(void 0, 7); // 42 7
test(null); // null 1 >> null is coerced to a 0 value

// from the ES6 default parameter values perspective
// there’s no difference between omitting an argument and passing an undefined value
// however, there is a way to detect the difference in some cases:
function best(a = 42, b = a + 1) {
  console.log(arguments.length, a, b, arguments[0], arguments[1]);
}

best(); // 0 42 43 undefined undefined
best(10); // 1 10 11 10 undefined
best(10, undefined); // 2 10 11 10 undefined
best(10, null); // 2 10 null 10 null
