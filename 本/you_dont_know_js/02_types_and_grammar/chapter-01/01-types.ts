// @ts-nocheck

/* TYPES */

// a type is an intrinsic
// built-in set of characteristics that uniquely identifies the behavior of a particular value
// and distinguishes it from other values, both to the engine and to the developer
// in other words, if both the engine and the developer treat value 42 (the number) differently
// than they treat value "42" (the string)
// then those two values have different types — number and string, respectively
// when you use 42, you are intending to do something numeric, like math
// but when you use "42"
// you are intending to do something string’ish
// like outputting to the page, etc - these two values have different types

/* A TYPE BY ANY OTHER NAME */

// having a proper understanding of each type and its intrinsic behavior
// is absolutely essential to understanding how to properly and accurately convert values to different types
// nearly every JS program ever written will need to handle value coercion in some shape or form
// so it’s important you do so responsibly and with confidence
// if you have the number value 42, but you want to treat it like a string
// such as pulling out the "2" as a character in position 1
// you obviously must first convert (coerce) the value from number to string
// there are many different ways that such coercion can happen
// some of these ways are explicit, easy to reason about, and reliable
// but if you’re not careful, coercion can happen in very strange and surprising ways
// coercion confusion is perhaps one of the most profound frustrations for JS developers
// it has often been criticized as being so dangerous as to be considered a flaw in the design of the language
// to be shunned and avoided

// armed with a full understanding of JS types
// we’re aiming to illustrate why coercion’s bad reputation is largely over-hyped and somewhat undeserved
// to flip your perspective so you see coercion’s power and usefulness
// but first, we have to get a much better grip on values and types
