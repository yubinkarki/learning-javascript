// @ts-nocheck

/* SPECIAL NUMBERS */

// the number type includes several special values
// we’ll take a look at each in detail

/* THE NOT NUMBER, NUMBER */

// any mathematic operation you perform without both operands being numbers (or values that can be interpreted as regular numbers in base 10 or base 16) will result in the operation failing to produce a valid number
// in which case you will get the NaN value
// NaN literally stands for “not a number,” though this label/description is very poor and misleading, as we’ll see shortly
// it would be much more accurate to think of NaN as being an “invalid number”, “failed number", or even "bad number", than to think of it as "not a number"

var a = 2 / "foo"; // NaN

console.log("Value of a", a, typeof a, typeof a === "number");

// in other words, “the type of not-a-number is number!”
// hooray for confusing names and semantics
// NaN is a kind of “sentinel value” (an otherwise normal value that’s assigned a special meaning) that represents a special kind of error condition within the number set
// the error condition is, in essence, “I tried to perform a mathematic operation but failed, so here’s the failed number result instead”
// so, if you have a value in some variable and want to test to see if it’s this special failed-number NaN, you might think you could directly compare to NaN itself, as you can with any other value, like null or undefined - nope

var b = 2 / "foo"; // NaN
b == NaN; // false
b === NaN; // false

// NaN is a very special value in that it’s never equal to another NaN value (i.e. it’s never equal to itself)
// it’s the only value, in fact, that is not reflexive (without the Identity characteristic x === x)
// so, NaN !== NaN - a bit strange, huh?

// so how do we test for it, if we can’t compare to NaN (since that comparison would always fail)?

isNaN(b); // true

// easy enough, right?
// we use the built-in global utility called isNaN(..) and it tells us if the value is NaN or not - problem solved!
// not so fast

var c = "foo";

console.log("Checking isNaN for b", isNaN(b)); // true
console.log("Checking isNaN for c", isNaN(c)); // true -- ouch!

// clearly, "foo" is literally not a number, but it’s definitely not the NaN value either!
// this bug has been in JS since the very beginning (over 19 years of ouch)
// as of ES6, finally a replacement utility has been provided: Number.isNaN(..)
// a simple polyfill for it so that you can safely check NaN values now even in pre-ES6 browsers is:
if (!Number.isNaN) {
  Number.isNaN = function (n) {
    return typeof n === "number" && isNaN(n);
  };
}

console.log("Checking Number.isNaN for b", Number.isNaN(b)); // true
console.log("Checking Number.isNaN for c", Number.isNaN(c)); // false -- phew!

/* INFINITIES */

// Developers from traditional compiled languages like C are probably used to seeing either a compiler error or runtime exception, like “divide by zero” for an operation like:
var dividedByZero = 1 / 0; // Infinity

// however, in JS, this operation is well-defined and results in the value Infinity (aka Number.POSITIVE_INFINITY)
var negativeDividedByZero = -1 / 0; // -Infinity

console.log("1/0", dividedByZero);
console.log("-1/0", negativeDividedByZero);

// as you can see, -Infinity (aka Number.NEGATIVE_INFINITY) results from a divide-by-zero where either (but not both!) of the divide operands is negative
// JS uses finite numeric representations (IEEE 754 floating-point, which we covered earlier), so contrary to pure mathematics, it seems it is possible to overflow even with an operation like addition or subtraction, in which case you’d get Infinity or -Infinity

var okaychata = Number.MAX_VALUE; // 1.7976931348623157e+308
console.log(okaychata + okaychata); // Infinity
console.log(okaychata + Math.pow(2, 970)); // Infinity - rounds up
console.log(okaychata + Math.pow(2, 969)); // 1.7976931348623157e+308 - rounds down

// according to the specification, if an operation like addition results in a value that’s too big to represent, the IEEE 754 “round-to-nearest” mode specifies what the result should be
// so, in a crude sense, Number.MAX_VALUE + Math.pow( 2, 969 ) is closer to Num ber.MAX_VALUE than to Infinity, so it “rounds down”
// whereas Number.MAX_VALUE + Math.pow( 2, 970 ) is closer to Infinity so it “rounds up”
// once you overflow to either one of the infinities, however, there’s no going back
// in other words, in an almost poetic sense, you can go from finite to infinite but not from infinite back to finite
// it’s almost philosophical to ask: “What is infinity divided by infin‐ ity?” Our naive brains would likely say “1” or maybe “infinity”
// turns out neither is true - both mathematically and in JS, Infinity/Infinity is not a defined operation
// in JS, this results in NaN

console.log(Infinity / Infinity); // NaN

// but what about any positive finite number divided by Infinity? - that’s easy! 0
// and what about a negative finite number divided by Infinity? - keep reading!

console.log(23 / Infinity); // 0
