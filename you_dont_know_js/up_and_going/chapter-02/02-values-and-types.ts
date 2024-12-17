// @ts-nocheck

/* VALUES AND TYPES */

// as we asserted in chapter 1, JS has typed values, not types variables
// the following built-in types are available:
// string, number, boolean, null, undefined, object, symbol (ES6)
// JS provides a typeof operator that can examine a value and tell you what type it is

var a;
typeof a; // undefined

a = "hello world";
typeof a; // string

a = 42;
typeof a; // number

a = true;
typeof a; // boolean

a = null;
typeof a; // object -- weird, bug

a = undefined;
typeof a; // undefined

a = { b: "c" };
typeof a; // object˝

// the return value from the typeof operator is always one of seven string values, i.e. type of "abc" returns "string", not string
// typeof a is not asking for the “type of a” but rather for the “type of the value currently in a”
// only values have types in JS, variables are just containers for those values
// typeof null is an interesting case because it errantly returns "object" when you’d expect it to return "null"
// this is a long-standing bug in JS, but one that is likely never going to be fixed
// too much code on the Web relies on the bug, and thus fixing it would cause a lot more bugs!
// also, note a = undefined - we’re explicitly setting 'a' to the undefined value, but that is behaviorally no different from a variable that has no value set yet, like with the var a; line at the top of the snippet
// a variable can get to this “undefined” value state in several different ways, including functions that return no values and usage of the void operator
