// @ts-nocheck

/* LOOSE EQUALS VERSUS STRICT EQUALS */

// loose equals is the == operator, and strict equals is the === operator
// both operators are used for comparing two values for “equality”
// but the “loose” versus “strict” indicates a very important difference in behavior between the two
// specifically in how they decide “equality"

// a very common misconception about these two operators is:
// == checks values for equality and === checks both values and types for equality
// while that sounds nice and reasonable, it’s inaccurate
// countless well-respected JS books and blogs have said exactly that
// but unfortunately they’re all wrong

// the correct description is:
// == allows coercion in the equality comparison and === disallows coercion

/* EQUALITY PERFORMANCE */

// in the first explanation, it seems obvious that === is doing more work than ==
// because it has to also check the type. In the second explanation
// == is the one doing more work because
// it has to follow through the steps of coercion if the types are different

// don’t fall into the trap, as many have
// of thinking this has anything to do with performance
// though, as if == is going to be slower than === in any relevant way
// while it’s measurable that coercion does take a little bit of processing time
// it’s mere microseconds (yes, that’s millionths of a second!)

/* ABSTRACT EQUALITY */

// the == operator’s behavior is defined as “The Abstract Equality Comparison Algorithm”
// in section 11.9.3 of the ES5 spec
// what’s listed there is a comprehensive but simple algorithm
// that explicitly states every possible combination of types
// and how the coercions (if necessary) should happen for each combination

/* COMPARING STRINGS TO NUMBERS */

var a = 42;
var b = "42";

console.log(a == b); // true
console.log(a === b); // false

// as we’d expect, a === b fails, because no coercion is allowed
// and indeed the 42 and "42" values are different
// however, the second comparison a == b uses loose equality
// which means that if the types happen to be different
// the comparison algorithm will perform implicit coercion on one or both values

// but exactly what kind of coercion happens here?
// does the a value of 42 become a string
// or does the b value of "42" become a number?

// in the ES5 spec, clauses 11.9.3.4-5 say:
// 1. if Type(x) is Number and Type(y) is String
//    return the result of the comparison x == ToNumber(y)
// 2. if Type(x) is String and Type(y) is Number
//    return the result of the comparison ToNumber(x) == y

/* COMPARING ANYTHING TO BOOLEAN */

// one of the biggest gotchas with the implicit coercion of == loose equality pops up
// when you try to compare a value directly to true or false

var c = "42";
var d = true;

console.log("c == d", c == d); // false
console.log("c > d", c > d); // true

// wait, what happened here!? We know that "42" is a truthy value
// so, how come it’s not == loose equal to true?

// the reason is both simple and deceptively tricky
// it’s so easy to misunderstand
// many JS developers never pay close enough attention to fully grasp it

// let’s again quote the spec, clauses 11.9.3.6-7:
// 1. If Type(x) is Boolean, return the result of the comparison ToNumber(x) == y
// 2. If Type(y) is Boolean, return the result of the comparison x == ToNumber(y)

// let’s break that down:
// the Type(x) is indeed Boolean, so it performs ToNumber(x), which coerces true to 1
// now, 1 == "42" is evaluated. The types are still different
// so (essentially recursively) we re-consult the algorithm
// which just as above will coerce "42" to 42, and 1 == 42 is clearly false
