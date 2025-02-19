// @ts-nocheck

/* VARIABLES */

// variable names (including function names) must be valid identifiers
// an identifier must start with a-z, A-Z, $, or _
// it can then contain any of those characters plus the numerals 0-9
// generally, the same rules apply to a property name as to a variable identifier
// however, certain words cannot be used as variables, but are OK as property names
// these words are called “reserved words”
// and include the JS keywords (for, in, if, etc.) as well as null, true, and false

/* FUNCTION SCOPES */

// you use the var keyword to declare a variable that will belong to the current function scope
// or the global scope if at the top level outside of any function

/* HOISTING */

// wherever a var appears inside a scope
// that declaration is taken to belong to the entire scope and accessible everywhere throughout
// metaphorically, this behavior is called hoisting
// when a var declaration is conceptually “moved” to the top of its enclosing scope

var a = 2;

foo(); // works because 'foo()' declaration is hoisted

function foo() {
  a = 3;
  console.log("this is inside foo", a);
  var a; // declaration is hoisted to the top of 'foo()'
}

console.log("this is global", a);

// it’s not common or a good idea to rely on variable hoisting
// to use a variable earlier in its scope than its var declaration appears;
// it can be quite confusing
// it’s much more common and accepted to use hoisted function declarations
// as we do with the foo() call appearing before its formal declaration

/* NESTED SCOPES */

// when you declare a variable, it is available anywhere in that scope, as well as any lower/inner scopes

function bar() {
  var b = 1;

  function baz() {
    var c = 2;

    function paz() {
      var d = 3;
      console.log("inside paz", b, c, d);
    }

    paz();
    console.log("inside baz", b, c);
  }

  baz();
  console.log("inside bar", b);
}

bar();

// if you try to set a variable that hasn’t been declared
// you’ll either end up creating a variable in the top-level global scope (bad!)
// or getting an error, depending on “strict mode”

function tryout() {
  myScore = 1; // myScore not formally declared
}

tryout();

console.log("myScore", myScore); // 1 -- oops, auto global variable

// this is a very bad practice - don’t do it! - always formally declare your variables
