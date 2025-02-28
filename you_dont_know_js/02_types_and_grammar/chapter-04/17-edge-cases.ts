// @ts-nocheck

/* EDGE CASES */

// now that we’ve thoroughly examined how the implicit coercion
// of == loose equality works
// let’s try to call out the worst, craziest corner cases
// so we can see what we need to avoid to not get bitten with coercion bugs

// first, let’s examine how modifying the built-in native prototypes
// can produce crazy results:

Number.prototype.valueOf = function () {
  return 3;
};

console.log(new Number(2) == 3); // true

// don’t fall into the “my programming language should protect me from myself” fallacy

var i = 2;

Number.prototype.valueOf = function () {
  return i++;
};

var a = new Number(42);

console.log(a == 2 && a == 3); // true

/* FALSY COMPARISON */

// the most common complaint against implicit coercion in == comparisons comes from
// how falsy values behave surprisingly when compared to each other

console.log("'0' == null", "0" == null); // false
console.log("'0' == undefined", "0" == undefined); // false
console.log("'0' == false", "0" == false); // true
console.log("'0' == NaN", "0" == NaN); // false
console.log("'0' == 0", "0" == 0); // true
console.log("'0' == ", "0" == ""); // false

console.log("false == null", false == null); // false
console.log("false == undefined", false == undefined); // false
console.log("false == NaN", false == NaN); // false
console.log("false == 0", false == 0); // true
console.log("false == ''", false == ""); // true
console.log("false == []", false == []); // true
console.log("false == {}", false == {}); // false

console.log("'' == null", "" == null); // false
console.log("'' == undefined", "" == undefined); // false
console.log("'' == NaN", "" == NaN); // false
console.log("'' == 0", "" == 0); // true
console.log("'' == []", "" == []); // true
console.log("'' == {}", "" == {}); // false

console.log("0 == null", 0 == null); // false
console.log("0 == undefined", 0 == undefined); // false
console.log("0 == NaN", 0 == NaN); // false
console.log("0 == []", 0 == []); // true
console.log("0 == {}", 0 == {}); // false

console.log("[] == ![]", [] == ![]); // true
console.log("2 == [2]", 2 == [2]); // true
console.log("'' == [null]", "" == [null]); // true

// as we said earlier in our ToNumber discussion
// the right-hand side [2] and [null] values will go through a ToPrimitive coercion
// so they can be more readily compared to the simple primitives (2 and "", respectively)
// on the left-hand side
// since the valueOf() for array values just returns the array itself
// coercion falls to stringify the array
// [2] will become "2", which then is ToNumber coerced to 2 for the right-hand side value
// in the first comparison
// [null] just straight becomes ""

/* SAFELY USING IMPLICIT COERCION */

// the most important advice I can give you:
// examine your program and reason about what values can show up on either side of an == comparison
// to effectively avoid issues with such comparisons
// here’s some heuristic rules to follow:
//   1. If either side of the comparison can have true or false values, don’t ever, EVER use ==
//   2. If either side of the comparison can have [], "", or 0 values, seriously consider not using ==
