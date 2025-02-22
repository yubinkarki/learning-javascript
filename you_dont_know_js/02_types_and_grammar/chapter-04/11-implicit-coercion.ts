// @ts-nocheck

/* IMPLICIT COERCION */

// implicit coercion refers to type conversions that are hidden
// with non-obvious side effects that implicitly occur from other actions
// in other words, implicit coercions are any type conversions that aren’t obvious (to you)
// while it’s clear what the goal of explicit coercion is (making code explicit and more understandable)
// it might be too obvious that implicit coercion has the opposite goal: making code harder to understand

/* IMPLICITLY: STRINGS <--> NUMBERS */

// the + operator is overloaded to serve the purposes of both number addition and string concatenation
// so how does JS know which type of operation you want to use?
// consider:
var a = "42";
var b = "0";
var c = 42;
var d = 0;

console.log(a + b); // 420 string
console.log(c + d); // 42 number

var e = [1, 2];
var f = [3, 4];

console.log(e + f); // "1,23,4"
// the valueOf() operation on the array will fail to produce a simple primitive
// so it then falls to a toString() representation
// the two arrays thus become "1,2" and "3,4", respectively
// now, + concatenates the two strings as you’d normally expect: "1,23,4"

console.log(typeof (4 + "")); // implicit conversion to "4"

// numeric addition with the + operator is commutative
// which means 2 + 3 is the same as 3 + 2
// string concatenation with + is obviously not generally commutative
// but with the specific case of "", it’s effectively commutative
// as a + "" and "" + a will produce the same result

// it’s extremely common/idiomatic to (implicitly) coerce number to string with a + "" operation
// in fact, even some of the most vocal critics of implicit coercion still use that approach
// instead of one of its explicit alternatives

// comparing this implicit coercion of a + "" to our earlier example of String(a) explicit coercion
// there’s one additional quirk to be aware of
// because of how the ToPrimitive abstract operation works
// a + "" invokes valueOf() on the a value
// whose return value is then finally converted to a string via the internal ToString abstract operation
// but String(a) just invokes toString() directly

// both approaches ultimately result in a string
// but if you’re using an object instead of a regular primitive number value
// you may not necessarily get the same string value!

var g = {
  valueOf: function () {
    return 42;
  },
  toString: function () {
    return 4;
  },
};

console.log("g + '' >>", g + ""); // "42" - calls valueOf first
console.log("String(g) >>", String(g)); // "4" - calls toString directly

// this sort of gotcha won’t bite you unless you’re really trying to create confusing data structures and operations
// but you should be careful if you’re defining both your own valueOf() and toString() methods for some object
// as how you coerce the value could affect the outcome

// what about the other direction? How can we implicitly coerce from string to number?

var h = "3.14";
var i = h - 0;
console.log(i); // 3.14 number

// the - operator is defined only for numeric subtraction
// so a - 0 forces a’s value to be coerced to a number
// while far less common, a * 1 or a / 1 would accomplish the same result
// as those operators are also only defined for numeric operations
