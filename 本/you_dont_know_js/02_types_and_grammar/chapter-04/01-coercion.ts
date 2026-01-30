// @ts-nocheck

/* COERCION */

// now that we much more fully understand JavaScript’s types and values
// we turn our attention to a very controversial topic: coercion

/* CONVERTING VALUES */

// converting a value from one type to another is often called "type casting" when done explicitly
// and "coercion" when done implicitly (forced by the rules of how a value is used)
// it may not be obvious but JS coercions always result in one of the scalar primitives values
// like string, number or boolean
// there is no coercion that results in a complex value like object or function
// another way these terms are often distinguished is as follows:
// “type casting” (or “type conversion”) occurs in statically typed languages at compile time
// while “type coercion” is a runtime conversion for dynamically typed languages
// the difference should be obvious:
// “explicit coercion” is when it is obvious from looking at the code
// that a type conversion is intentionally occurring
// whereas “implicit coercion” is when the type conversion will occur as a less obvious side effect
// of some other intentional operation

// for example:
var a = 42;
var b = a + ""; // implicit coercion
var c = String(a); // explicit coercion

// for b, the coercion that occurs happens implicitly
// because the + operator combined with one of the operands being a string value ("")
// will insist on the operation being a string concatenation (adding two strings together)
// which as a (hidden) side effect will force the 42 value in a to be coerced to its string equivalent: "42"

// by contrast, the String(..) function makes it pretty obvious
// that it’s explicitly taking the value in a and coercing it to a string representation
