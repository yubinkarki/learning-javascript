// @ts-nocheck

/* EXPLICIT COERCION */

// explicit coercion refers to type conversions that are obvious and explicit
// there’s a wide range of type conversion usage that clearly falls under the explicit coercion category for most developers

/* EXPLICITLY: STRINGS <--> NUMBERS */

// to coerce between strings and numbers, we use the built-in String(..) and Number(..) functions
// (which we referred to as “native constructors” in Chapter 3)
// but very importantly, we do not use the new keyword in front of them
// as such, we’re not creating object wrappers

var a = 42;
var b = String(a);
console.log("Value of b", b, typeof b);

var c = "3.14";
var d = Number(c);
console.log("Value of d", d, typeof d);

// String(..) coerces from any other value to a primitive string value
// using the rules of the ToString operation discussed earlier
// Number(..) coerces from any other value to a primitive number value
// using the rules of the ToNumber operation discussed earlier

// besides String(..) and Number(..)
// there are other ways to “explicitly” convert these values between string and number:
var e = 4.55;
var f = e.toString();
console.log("Value of f", f, typeof f);

var g = "5.55";
var h = +g;
console.log("Value of h", h, typeof h);

// the generally accepted perspective in the open source JS community is
// that unary + is an accepted form of explicit coercion
// even if you really like the +c form
// there are definitely places where it can look awfully confusing

// consider:
var i = "5.1";
var j = 1 + +i;
console.log("Value of j", j, typeof j);

// you should strongly consider avoiding unary + (or -) coercion when it’s immediately adjacent to other operators
// while the above works, it would almost universally be considered a bad idea
// even d = +c (or d =+ c for that matter!) can far too easily be confused for d += c
// which is entirely different!

// remember, we’re trying to be explicit and reduce confusion, not make it much worse!
