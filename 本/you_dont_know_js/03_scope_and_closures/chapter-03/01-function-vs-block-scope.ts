// @ts-nocheck

/* FUNCTION VERSUS BLOCK SCOPE */

// as we explored in Chapter 2
// scope consists of a series of “bubbles” that each act as a container or bucket
// in which identifiers (variables, functions) are declared
// these bubbles nest neatly inside each other
// and this nesting is defined at author time
// but what exactly makes a new bubble?
// is it only the function?
// can other structures in JavaScript create bubbles of scope?

/* SCOPE FROM FUNCTIONS */

// the most common answer to those questions is that JS has function-based scope
// that is, each function you declare creates a bubble for itself
// but no other structures create their own scope bubbles
// as we’ll see in just a little bit, this is not quite true

/* FUNCTIONS AS SCOPES */

// we’ve seen that we can take any snippet of code and wrap a function around it
// and that effectively “hides” any enclosed variable or
// function declarations from the outside scope inside that function’s inner scope

// for example:
var a = 2;

function foo() {
  var a = 3;
  console.log(a);
}

foo();
console.log(a);

// while this technique works, it is not necessarily very ideal
// there are a few problems it introduces
// the first is that we have to declare a named-function foo()
// which means that the identifier name foo itself “pollutes” the enclosing scope
// we also have to explicitly call the function by name (foo()) so that the wrapped code actually executes

/* ANONYMOUS VS NAMED */

// you are probably most familiar with function expressions as callback parameters, such as:
setTimeout(function () {
  console.log("I waited 1 second!");
}, 1000);

// this is called an anonymous function expression
// because function() has no name identifier on it
// function expressions can be anonymous
// but function declarations cannot omit the name—that would be illegal JS grammar

// inline function expressions are powerful and useful
// the question of anonymous versus named doesn’t detract from that
// providing a name for your function expression
// quite effectively addresses all these drawbacks
// but has no tangible downsides
// the best practice is to always name your function expressions:
setTimeout(function littleDelay() {
  console.log("I waited 1 second!");
}, 1000);

/* INVOKING FUNCTION EXPRESSIONS IMMEDIATELY */
var b = 10;

(function callMe() {
  var b = 20;
  console.log(`This is the value of ${b}`);
})();

// this pattern is so common
// a few years ago the community agreed on a term for it:
// IIFE, which stands for immediately invoked function expression
