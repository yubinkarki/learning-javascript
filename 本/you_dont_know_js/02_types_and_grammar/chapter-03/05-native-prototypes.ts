// @ts-nocheck

/* NATIVE PROTOTYPES */

// each of the built-in native constructors has its own .prototype object
// Array.prototype, String.prototype, etc
// these objects contain behavior unique to their particular object sub‐type
// for example, all string objects, and by extension (via boxing) string primitives
// have access to default behavior as methods defined on the String.prototype object

// String#indexOf(..) - find the position in the string of another substring
// String#charAt(..) - access the character at a position in the string
// String#substr(..), String#substring(..), and String#slice(..) - extract a portion of the string as a new string
// String#toUpperCase() and String#toLowerCase() - create a new string that’s converted to either uppercase or lowercase
// String#trim() - creates a new string that's stripped of any leading or trailing whitespaces

// none of the methods modify the string in place
// modifications (like case conversion or trimming) create a new value from the existing value
// by virtue of prototype delegation any string value can access these methods:
var a = " abc ";
console.log("a.indexOf('c')", a.indexOf("c")); // 3
console.log("a.toUpperCase()", a.toUpperCase()); // " ABC "
console.log("a.trim()", a.trim()); // "abc"

// the other constructor prototypes contain behaviors appropriate to their types, such as:
// Number#toFixed(..)
// Array#concat(..)

// all functions have access to apply(..), call(..), and bind(..) because Function.prototype defines them
// but, some of the native prototypes aren’t just plain objects

console.log("typeof Function.prototype", typeof Function.prototype); // function
console.log("Function.prototype()", Function.prototype()); // undefined
console.log(RegExp.prototype.toString()); // /(?:)/ -- empty regex

/* PROTOTYPES AS DEFAULTS */

// Function.prototype being an empty function, RegExp.prototypebeing an “empty” (e.g., nonmatching) regex
// and Array.prototypebeing an empty array make them all nice “default” values to assign to variables
// if those variables wouldn’t already have had a value of the proper type

// for example:
function isThisCool(vals, fn, rx) {
  vals = vals || Array.prototype;
  fn = fn || Function.prototype;
  rx = rx || RegExp.prototype;

  return rx.test(vals.map(fn).join(""));
}

isThisCool();
isThisCool(
  ["a", "b", "c"],
  function (v) {
    return v.toUpperCase();
  },
  /D/
);
