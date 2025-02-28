// @ts-nocheck

/* ABSTRACT RELATIONAL COMPARISON */

// the “Abstract Relational Comparison” algorithm in ES5 section 11.8.5
// essentially divides itself into two parts:
// what to do if the comparison involves both string values (second half)
// or anything else (first half)

// the algorithm is only defined for a < b
// so, a > b is handled as b < a

// the algorithm first calls ToPrimitive coercion on both values
// and if the return result of either call is not a string
// then both values are coerced to number values using the ToNumber operation rules
// and compared numerically

console.log("[42] < ['43']", [42] < ["43"]); // true
console.log("[43] < ['42']", [43] < ["42"]); // false

// however, if both values are strings for the < comparison
// simple lexicographic (natural alphabetic) comparison on the characters is performed:
console.log("['43'] < ['043']", ["43"] < ["043"]);

// a and b are not coerced to numbers
// because both of them end up as strings after the ToPrimitive coercion on the two arrays
// so, "42" is compared character by character to "043"
// starting with the first characters "4" and "0", respectively
// since "0" is lexicographically less than "4", the comparison returns false

// the exact same behavior and reasoning goes for:
console.log("[4, 2] < [0, 4, 2, 3]", [4, 2] < [0, 4, 2, 3]); // false

var a = { b: 10 };
var b = { b: 12 };

console.log("a < b", a < b); // false
console.log("a > b", a > b); // false
console.log("a == b", a == b); // false
console.log("a >= b", a >= b); // true
console.log("a <= b", a <= b); // true

// how are a <= b and a >= b resulting in true
// if a < b and a == b and a > b are all false?

// because the spec says for a <= b, it will actually evaluate b < a first
// and then negate that result
// since b < a is also false, the result of a <= b is true

// unfortunately, there is no “strict relational comparison” as there is for equality
// in other words, there’s no way to prevent implicit coercion from occurring
// with relational comparisons like a < b
// other than to ensure that a and b are of the same type explicitly before making the comparison

// use the same reasoning from our earlier == versus === sanity check discussion
// if coercion is helpful and reasonably safe, like in a 42 < "43" comparison, use it
// on the other hand, if you need to be safe about a relational comparison
// explicitly coerce the values first, before using < (or its counterparts):

console.log([42] < ["043"]); // false -- string comparison
console.log(Number([42]) < Number(["043"])); // true -- number comparison
