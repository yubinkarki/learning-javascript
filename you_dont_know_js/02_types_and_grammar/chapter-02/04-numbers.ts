// @ts-nocheck

/* NUMBERS */

// JS has just one numeric type: number
// this type includes both “integer” values and fractional decimal numbers
// i say "integer" in quotes because it’s long been a criticism of JS
// that there’s not true integers, as there are in other languages
// that may change at some point in the future, but for now, we just have numbers for everything
// so, in JS, an “integer” is just a value that has no fractional decimal value
// that is, 42.0 is as much an “integer” as 42

// like most modern languages, including practically all scripting languages
// the implementation of JS's numbers is based on the “IEEE 754” standard, often called “floating-point”
// JS specifically uses the “double precision” format (aka “64-bit binary”) of the standard

/* NUMERIC SYNTAX */

// number literals are expressed in JS generally as base-10 decimal literals
// for example:

var a = 42;
var b = 42.3;

// the leading portion of a decimal value, if 0, is optional:
var c = 0.42; // .42

// by default, most numbers will be outputted as base-10 decimals, with trailing fractional 0s removed
// very large or very small numbers will by default be outputted in exponent form
// the same as the output of the toExponential() method, like:
var d = 5e5;
console.log("Value of d", d);
console.log("Value of d in exponent", d.toExponential());

var e = d * d;
console.log("Value of e", e, e.toExponential()); // 250000000000 2.5e+11

var f = 1 / d;
console.log("Value of f", f, f.toExponential()); // 0.000002 2e-6

// because number values can be boxed with the Number object wrapper
// number values can access methods that are built into the Number.prototype
// for example, the toFixed(..) method allows you to specify
// how many fractional decimal places you’d like the value to be represented with:
var numOne = 42.59;
console.log(numOne.toFixed(0)); // "43"
console.log(numOne.toFixed(1)); // "42.6"
console.log(numOne.toFixed(2)); // "42.59"
console.log(numOne.toFixed(3)); // "42.590"
console.log(numOne.toFixed(4)); // "42.5900"

// toPrecision(..) is similar, but specifies how many significant digits should be used to represent the value:
console.log(numOne.toPrecision(1)); // "4e+1"
console.log(numOne.toPrecision(2)); // "43"
console.log(numOne.toPrecision(3)); // "42.6"
console.log(numOne.toPrecision(4)); // "42.59"
console.log(numOne.toPrecision(5)); // "42.590"
console.log(numOne.toPrecision(6)); // "42.5900"

// you don’t have to use a variable with the value in it to access these methods;
// you can access these methods directly on number literals
console.log("Using on number literal", (42).toFixed(3)); // "42.000"

// number literals can also be expressed in other bases, like binary, octal, and hexadecimal

0xf3; // hexadecimal for: 243
0o363; // octal for: 243
0b11110011; // binary for: 243

// please do your fellow developers a favor: never use the 0O363 form
// 0 next to capital O is just asking for confusion - always use the lower‐case predicates 0x, 0b, and 0o

/* SMALL DECIMAL VALUES */

// the most (in)famous side effect of using binary floating-point numbers
// (which, remember, is true of all languages that use IEEE 754 — not just JS as many assume/pretend) is:
0.1 + 0.2 === 0.3; // false

// mathematically, we know that statement should be true - why is it false?
// simply put, the representations for 0.1 and 0.2 in binary floating point are not exact
// so when they are added, the result is not exactly 0.3
// it’s really close, 0.30000000000000004, but if your comparison fails, “close” is irrelevant

// what if we did need to compare two numbers, like 0.1 + 0.2 to 0.3
// knowing that the simple equality test fails?
// the most commonly accepted practice is to use a tiny “rounding error” value as the tolerance for comparison
// this tiny value is often called “machine epsilon”
// which is commonly 2^-52 (2.220446049250313e-16) for the kind of numbers in JS

// we can use this Number.EPSILON to compare two numbers for “equality”
// (within the rounding error tolerance):
function numbersCloseEnoughToEqual(n1, n2) {
  return Math.abs(n1 - n2) < Number.EPSILON;
}

var closeSum = 0.1 + 0.2; // 0.30000000000000004
var closeSumResult = 0.3;

console.log("Subtraction", 0.30000000000000004 - 0.3); // 5.551115123125783e-17
console.log(Math.abs(0.30000000000000004 - 0.3)); // 5.551115123125783e-17
console.log("Number.EPSILON", Number.EPSILON); // 2.220446049250313e-16
console.log(numbersCloseEnoughToEqual(closeSum, closeSumResult)); // true
console.log(numbersCloseEnoughToEqual(0.0000001, 0.0000002)); // false

// the maximum floating-point value that can be represented is roughly 1.798e+308
// (which is really, really, really huge!), predefined for you as Number.MAX_VALUE
// on the small end, Number.MIN_VALUE is roughly 5e-324
// which isn’t negative but is really close to zero!

console.log("Number.MAX_VALUE", Number.MAX_VALUE); // 1.7976931348623157e+308
console.log("Number.MIN_VALUE", Number.MIN_VALUE); // 5e-324

/* SAFE INTEGER RANGES */

// because of how numbers are represented
// there is a range of “safe” values for the whole number “integers”
// and it’s significantly less than Number.MAX_VALUE
// the maximum integer that can “safely” be represented
// (that is, there’s a guarantee that the requested value is actually representable unambiguously)
// is 2^53 - 1, which is 9007199254740991
// if you insert your commas, you’ll see that this is just over 9 quadrillion
// so that’s pretty darn big for numbers to range up to

console.log("Number.MAX_SAFE_INTEGER", Number.MAX_SAFE_INTEGER); // 9007199254740991 (2^53 - 1)
console.log("Number.MIN_SAFE_INTEGER", Number.MIN_SAFE_INTEGER); // -9007199254740991 (-2^53 + 1)

// the main scenario in which JS programs are confronted with such large numbers is
// when dealing with 64-bit IDs from databases, etc
// 64-bit numbers cannot be represented accurately with the number type
// so they must be stored in (and transmitted to/from) JS using string representation
// numeric operations on such large ID number values
// (besides comparison, which will be fine with strings) aren’t all that common, thankfully
// but if you do need to perform math on these very large values
// for now you’ll need to use a big number utility
// big numbers may get official support in a future version of JS

/* TESTING FOR INTEGERS */

// to test if a value is an integer, you can use the ES6-specified Num ber.isInteger(..):
console.log(Number.isInteger(42)); // true
console.log(Number.isInteger(42.0)); // true
console.log(Number.isInteger(42.3)); // false
console.log("3.5 % 1", 3.5 % 1); // 0.5
console.log("3.5 / 1", 3.5 / 1); // 3.5

// to polyfill Number.isInteger(..) for pre-ES6:
if (!Number.isInteger) {
  Number.isInteger = function (num) {
    return typeof num === "number" && num % 1 == 0;
  };
}

// to test if a value is a safe integer, use the ES6-specified Number.isSafeInteger(..):
console.log("Is safe integer > Number.MAX_SAFE_INTEGER >", Number.isSafeInteger(Number.MAX_SAFE_INTEGER)); // true
console.log("Is safe integer > Math.pow(2, 53) >", Number.isSafeInteger(Math.pow(2, 53))); // false
console.log("Is safe integer > Math.pow(2, 53) - 1 >", Number.isSafeInteger(Math.pow(2, 53) - 1)); // true

// to polyfill Number.isSafeInteger(..) in pre-ES6 browsers:
if (!Number.isSafeInteger) {
  Number.isSafeInteger = function (num) {
    return Number.isInteger(num) && Math.abs(num) <= Number.MAX_SAFE_INTEGER;
  };
}

console.log(9007199254740991 + 1); // 9007199254740992 (correct)
console.log(9007199254740991 + 2); // 9007199254740992 (incorrect)
