// @ts-nocheck

/* THE CURIOUS CASE OF THE ~ */

// one coercive JS operator that is often overlooked and
// usually very confused is the tilde ~ operator (aka “bitwise NOT”)
// many of those who even understand what it does will often still want to avoid it
// but sticking to the spirit of our approach in this book and series
// let’s dig into it to find out if ~ has anything useful to give us

// in “32-Bit (Signed) Integers” on page 23
// we covered how bitwise operators in JS are defined only for 32-bit operations
// which means they force their operands to conform to 32-bit value representations
// the rules for how this happens are controlled by the ToInt32 abstract operation (ES5 spec, section 9.5)

// ToInt32 first does a ToNumber coercion
// which means if the value is "123", it’s going to first become 123 before the ToInt32 rules are applied

// while not technically coercion itself (since the type doesn’t change!)
// using bitwise operators (like | or ~) with certain special number values
// produces a coercive effect that results in a different number value

// for example, let’s first consider the | “bitwise OR” operator used in the otherwise no-op idiom 0 | x
// which (as Chapter 2 showed) essentially only does the ToInt32 conversion:
console.log("0 | -0 >>", 0 | -0); // 0
console.log("0 | NaN >>", 0 | NaN); // 0
console.log("0 | Infinity >>", 0 | Infinity); // 0
console.log("0 | -Infinity >>", 0 | -Infinity); // 0

// these special numbers aren’t 32-bit representable (since they come from the 64-bit IEEE 754 standard)
// so ToInt32 just specifies 0 as the result from these values

// it’s debatable if 0 | __ is an explicit form of this coercive ToInt32 operation or if it’s more implicit
// from the spec perspective, it’s unquestionably explicit
// but if you don’t understand bitwise operations at this level
// it can seem a bit more implicitly magical
// nevertheless, consistent with other assertions in this chapter, we will call it explicit

// so, let’s turn our attention back to ~
// the ~ operator first “coerces” to a 32-bit number value
// and then performs a bitwise negation (flipping each bit’s parity)

// but… what!?
// why do we care about bits being flipped?
// that’s some pretty specialized, nuanced stuff
// it’s pretty rare for JS developers to need to reason about individual bits

// another way of thinking about the definition of ~ comes from
// old-school computer science/discrete mathematics:
// ~ performs two’s complement
// great, thanks, that’s totally clearer!

// let’s try again: ~x is roughly the same as -(x+1)
// that’s weird, but slightly easier to reason about - so:
console.log(~42); // -(42+1) ==> -43

// consider -(x+1)
// what’s the only value that can you can perform that operation on
// that will produce a 0 (or -0 technically!) result? -1
// in other words
// ~ used with a range of number values will produce a falsy
// (easily coercible to false) 0 value for the -1 input value
// and any other truthy number otherwise

// why is that relevant?

// -1 is commonly called a “sentinel value”
// which basically means a value that’s given an arbitrary semantic meaning
// within the greater set of values of its same type (numbers)
// the C-language uses -1 sentinel values for many functions
// that return >= 0 values for “success” and -1 for “failure”

// JS adopted this precedent when defining the string operation indexOf(..)
// which searches for a substring and if found returns its zero-based index position
// or -1 if not found

// it’s pretty common to try to use indexOf(..) not just as an operation to get the position
// but as a boolean check of presence/absence of a substring in another string
// here’s how developers usually perform such checks:
var a = "hello world";

if (a.indexOf("lo") >= 0) {
  // found it
}

if (a.indexOf("he") !== -1) {
  // found it
}

if (a.indexOf("he") === -1) {
  // not found
}

if (a.indexOf("he") < 0) {
  // not found
}

// i find it kind of gross to look at >= 0 or == -1
// it’s basically a “leaky abstraction”
// in that it’s leaking underlying implementation behavior
// the usage of sentinel -1 for “failure” into my code
// i would prefer to hide such a detail

// and now, finally, we see why ~ could help us!
// using ~ with indexOf() “coerces” (actually just transforms)
// the value to be appropriately boolean-coercible:
console.log("indexOf('ll')", ~a.indexOf("ll")); // -3

if (~a.indexOf("h")) {
  console.log("Exists");
}

// ~ takes the return value of indexOf(..) and transforms it
// for the “failure” -1 we get the falsy 0, and every other value is truthy

// technically, `if(~a.indexOf(..))` is still relying on implicit coercion
// of its resultant 0 to false or nonzero to true
// but overall, ~ still feels to me more like an explicit coercion mechanism
// as long as you know what it’s intended to do in this idiom
// i find this to be cleaner code than the previous >= 0 / == -1 clutter
