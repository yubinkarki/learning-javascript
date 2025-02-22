// @ts-nocheck

/* EXPLICITLY PARSING NUMERIC STRINGS */

// a similar outcome to coercing a string to a number can be achieved by parsing a number out of a string’s character contents
// there are, however, distinct differences between this parsing and the type conversion we examined above

// consider:
var a = "42";
var b = "42px";

console.log("Number(a)", Number(a)); // 42
console.log("parseInt(a)", parseInt(a)); // 42

console.log("Number(b)", Number(b)); // NaN
console.log("parseInt(b)", parseInt(b)); // 42

console.log(parseInt("87458475.12312")); // 87458475
console.log(parseFloat("87458475.12312")); // 87458475.12312

// parsing a numeric value out of a string is tolerant of non-numeric characters
// it just stops parsing left-to-right when encountered
// whereas coercion is not tolerant and fails, resulting in the NaN value

// parsing should not be seen as a substitute for coercion
// these two tasks, while similar, have different purposes
// parse a string as a number when you don’t know/care what other non-numeric characters there may be on the right-hand side
// coerce a string (to a number) when the only acceptable values are numeric
// and something like "42px" should be rejected as a number

// don’t forget that parseInt(..) operates on string values
// it makes absolutely no sense to pass a number value to parseInt(..)
// nor would it make sense to pass any other type of value, like true, function(){..}, or [1,2,3]

// if you pass a non-string
// the value you pass will automatically be coerced to a string first
// which would clearly be a kind of hidden implicit coercion
// it’s a really bad idea to rely upon such behavior in your program
// so never use parseInt(..) with a non-string value

console.log(parseInt(0.000008)); // 0
console.log(parseInt(0.0000008)); // 8 ("8" from "8e-7")
console.log(parseInt(false, 16)); // 250 ("fa" from "false")
console.log(parseInt(parseInt, 16)); // 15 ("f" from "function..")
console.log(parseInt("0x10")); // 16
console.log(parseInt("103", 2)); // 2

// parseInt(..) is actually pretty predictable and consistent in its behavior
// if you use it correctly, you’ll get sensible results
// if you use it incorrectly, the crazy results you get are not the fault of JS

/* EXPLICITLY BOOLEAN */

// now, let’s examine coercing from any non-boolean value to a boolean
// just like with String(..) and Number(..) above, Boolean(..) (without the new, of course!)
// is an explicit way of forcing the ToBoolean coercion:
var p = "0";
var q = [];
var r = {};
var s = "";
var t = 0;
var u = null;
var v;

console.log(Boolean(p)); // true
console.log(Boolean(q)); // true
console.log(Boolean(r)); // true

console.log(Boolean(s)); // false
console.log(Boolean(t)); // false
console.log(Boolean(u)); // false
console.log(Boolean(v)); // false

// while Boolean(..) is clearly explicit, it’s not at all common or idiomatic
// just like the unary + operator coerces a value to a number (see above)
// the unary ! negate operator explicitly coerces a value to a boolean
// the problem is that it also flips the value from truthy to falsy or vice versa
// so, the most common way JS developers explicitly coerce to boolean is to use the !! double-negate operator
// because the second ! will flip the parity back to the original:

console.log(!p, !!p); // false true
console.log(!q, !!q); // false true
console.log(!r, !!r); // false true

console.log(!s, !!s); // true false
console.log(!t, !!t); // true false
console.log(!u, !!u); // true false
console.log(!v, !!v); // true false

// any of these ToBoolean coercions would happen implicitly without the Boolean(..) or !!
// if used in a boolean context such as an if (..) statement
// but the goal here is to explicitly force the value to a boolean
// to make it clearer that the ToBoolean coercion is intended

// another example use case for explicit ToBoolean coercion is
// if you want to force a true/false value coercion in the JSON serialization of a data structure:
var myList = [1, function () {}, 2, function () {}];

console.log(JSON.stringify(myList));

console.log(
  JSON.stringify(myList, function (k, v) {
    if (typeof v === "function") return !!v;
    else return v;
  })
);

// if you come to JavaScript from Java, you may recognize this idiom:
var x = 4;
var y = x ? true : false;

// The ? : ternary operator will test a for truthiness
// and based on that test will either assign true or false to y, accordingly

// on its surface, this idiom looks like a form of explicit ToBoolean type coercion
// since it’s obvious that only either true or false come out of the operation

// however, there’s a hidden implicit coercion
// in that the x expression has to first be coerced to boolean to perform the truthiness test
// i’d call this idiom “explicitly implicit”
// furthermore, i’d suggest you should avoid this idiom completely in JS
// it offers no real benefit, and worse, masquerades as something it’s not
// Boolean(a) and !!a are far better as explicit coercion options
