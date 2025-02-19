// @ts-nocheck

/* SCOPE */

// scope is basically a collection of variables
// as well as the rules for how those variables are accessed by name
// in JS, each function gets its own scope
// a variable name has to be unique within the same scope
// there can’t be two different a variables sitting right next to each other
// the same variable name a could appear in different scopes

function one() {
  // this 'a' only belongs to the 'one' function
  var a = 1;
  console.log(a);
}

function two() {
  // this 'a' only belongs to the 'two' function
  var a = 2;
  console.log(a);
}

one();
two();

// also, a scope can be nested inside another scope
// if one scope is nested inside another
// code inside the innermost scope can access variables from either scope

function outer() {
  var a = 1;

  function inner() {
    var b = 2;

    // we can access both a and b here
    console.log(a + b);
  }

  inner();

  // we can only access a here
  console.log(a);
}

outer();

// lexical scope rules say that
// code in one scope can access variables of either that scope or any scope outside of it
