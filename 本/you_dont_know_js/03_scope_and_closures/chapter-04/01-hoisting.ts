// @ts-nocheck

/* HOISTING */

// by now, you should be fairly comfortable with the idea of scope
// and how variables are attached to different levels of scope
// depending on where and how they are declared
// both function scope and block scope behave by the same rules in this regard
// any variable declared within a scope is attached to that scope
// but there’s a subtle detail of how scope attachment works
// with declarations that appear in various locations within a scope
// and that detail is what we will examine here

// there’s a temptation to think that all of the code you see in a JS program
// is interpreted line-by-line, top-down in order, as the program executes
// while that is substantially true
// there’s one part of that assumption that can lead to incorrect thinking about your program

// consider this code:
a = 2;
var a;
console.log(a);

// many developers would expect undefined
// since the var a statement comes after the a = 2
// and it would seem natural to assume that the variable is redefined
// and thus assigned the default undefined
// however, the output will be 2

// consider another piece of code:
console.log(b);
var b = 2;

// you might be tempted to assume that
// since the previous snippet exhibited some less-than-top-down looking behavior
// perhaps in this snippet, 2 will also be printed
// others may think that since the a variable is used before it is declared
// this must result in a ReferenceError being thrown
// unfortunately, both guesses are incorrect
// undefined is the output

// so, what’s going on here?
// it would appear we have a chicken-and-the-egg question
// which comes first, the declaration (“egg”), or the assignment (“chicken”)?

/* THE COMPILER STRIKES AGAIN */

// to answer this question, we need to refer back to Chapter 1, and our discussion of compilers
// recall that the engine actually will compile your JS code before it interprets it
// part of the compilation phase was to find and associate all declarations with their appropriate scopes
// chapter 2 showed us that this is the heart of lexical scope
// so, the best way to think about things is that all declarations
// both variables and functions, are processed first, before any part of your code is executed

// when you see var a = 2;
// you probably think of that as one statement
// but JS actually thinks of it as two statements: var a; and a = 2;
// the first statement, the declaration, is processed during the compilation phase
// the second statement, the assignment, is left in place for the execution phase

// so, one way of thinking, sort of metaphorically, about this process
// is that variable and function declarations are “moved”
// from where they appear in the flow of the code to the top of the code
// this gives rise to the name hoisting
// in other words, the egg (declaration) comes before the chicken (assignment)

// only the declarations themselves are hoisted
// while any assignments or other executable logic are left in place
// if hoisting were to re-arrange the executable logic of our code, that could wreak havoc

foo();

function foo() {
  console.log(a); // undefined
  var a = 2;
}

// the function foo’s declaration
// (which in this case includes the implied value of it as an actual function) is hoisted
// such that the call on the first line is able to execute
// tt’s also important to note that hoisting is per-scope
// so while our previous snippets were simplified in that they only included global scope
// the foo(..) function we are now examining itself exhibits
// that var a is hoisted to the top of foo(..) (not, obviously, to the top of the program)
// so the program can perhaps be more accurately interpreted like this:
function foo() {
  var a;
  console.log(a); // undefined
  a = 2;
}

foo();

// function declarations are hoisted, as we just saw
// but function expressions are not

foo(); // not ReferenceError, but TypeError!

var foo = function bar() {
  // ...
};

// the variable identifier foo is hoisted and
// attached to the enclosing scope (global) of this program
// so foo() doesn’t fail as a ReferenceError
// but foo has no value yet
// (as it would if it had been a true function declaration instead of expression)
// so, foo() is attempting to invoke the undefined value, which is a TypeError illegal operation
