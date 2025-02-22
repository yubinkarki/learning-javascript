// @ts-nocheck

/* BUILT-IN TYPES */

// JS defines seven built-in types:
//  null
//  undefined
//  string
//  number
//  boolean
//  object
//  symbol - added in ES6

// all of these types except object are called primitives

// the 'typeof' operator inspects the type of the given value, and always returns one of seven string values
// surprisingly, there’s not an exact 1-to-1 match with the seven built-in types we just listed:
typeof undefined === "undefined"; // true
typeof true === "boolean"; // true
typeof 42 === "number"; // true
typeof "42" === "string"; //true
typeof { life: 42 } === "object"; // true
typeof Symbol() === "symbol"; // true

// as you may have noticed, I excluded null from the above listing
// it’s special—special in the sense that it’s buggy when combined with the typeof operator:
typeof null === "object"; // true

// it would have been nice (and correct!) if it returned "null"
// but this original bug in JS has persisted for nearly two decades
// and will likely never be fixed because there’s so much existing web content
// that relies on its buggy behavior
// that “fixing” the bug would create more “bugs” and break a lot of web software

// if you want to test for a null value using its type, you need a compound condition:
var a = null;
!a && typeof a === "object"; // true

// null is the only primitive value that is “falsy”
// but which also returns "object" from the typeof check

typeof function a() {} === "function"; // true

// it’s easy to think that function would be a top-level built-in type in JS
// especially given this behavior of the typeof operator
// however, if you read the spec, you’ll see it’s actually somewhat of a “subtype” of object
// specifically, a function is referred to as a “callable object”
// an object that has an internal [[Call]] property that allows it to be invoked

// the fact that functions are actually objects is quite useful
// most importantly, they can have properties - for example:
function sum(numOne, numTwo) {}

// the function object has a length property set to the number of formal parameters it is declared with

console.log("Num of properties in sun function", sum.length); // 2

// what about arrays?
// they’re native to JS, so are they a special type?

typeof [1, 2, 3] === "object"; // true

// nope, just objects
// it’s most appropriate to think of them also as a “subtype” of object
// in this case with the additional characteristics of being numerically indexed
// (as opposed to just being string-keyed like plain objects)
// and maintaining an automatically updated length property
