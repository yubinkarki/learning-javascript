// @ts-nocheck

/* COMPARING NULL TO UNDEFINED */

// another example of implicit coercion can be seen with == loose equality
// between null and undefined values
// yet again quoting the ES5 spec, clauses 11.9.3.2-3:
//   1. if x is null and y is undefined, return true
//   2. if x is undefined and y is null, return true

// null and undefined, when compared with == loose equality
// equate to (aka coerce to) each other (as well as themselves, obviously)
// and no other values in the entire language

// what this means is that null and undefined can be treated as indistinguishable
// for comparison purposes
// if you use the == loose equality operator to allow their mutual implicit coercion:

var a = null;
var b;

console.log(a == b); // true
console.log(a == null); // true
console.log(b == undefined); // true
console.log(a == false); // false
console.log(b == false); // false
console.log(a == ""); // false
console.log(b == ""); // false
console.log(a == 0); // false
console.log(b == 0); // false

/* COMPARING OBJECTS TO NON-OBJECTS */

// if an object/function/array is compared to a simple scalar primitive
// (string, number, or boolean)
// the ES5 spec says in clauses 11.9.3.8-9:
//   1. if Type(x) is either String or Number and Type(y) is Object
//      return the result of the comparison x == ToPrimitive(y)
//   2. if Type(x) is Object and Type(y) is either String or Number
//      return the result of the comparison ToPrimitive(x) == y

// consider:
var c = 42;
var d = [42];

console.log("c == d", c == d); // true

// the [ 42 ] value has its ToPrimitive abstract operation called
// which results in the "42" value
// from there, it’s just "42" == 42
// which as we’ve already covered becomes 42 == 42, so a and b are found to be coercively equal

// in Chapter 3, we covered “unboxing”
// where an object wrapper around a primitive value (like from new String("abc"), for instance)
// is unwrapped, and the underlying primitive value ("abc") is returned
// this behavior is related to the ToPrimitive coercion in the == algorithm:

var e = "abc";
var f = Object(e); // same as new String(e)
console.log("e == f", e == f); // true
console.log("e === f", e === f); // false

// e == f is true because f is coerced (aka “unboxed,” unwrapped)
// via ToPrimitive to its underlying "abc" simple scalar primitive value
// which is the same as the value in e

// there are some values where this is not the case though
// because of other overriding rules in the == algorithm

// consider:
var g = null;
var h = Object(g); // same as Object()

console.log("g == h", g == h); // false

var i = undefined;
var j = Object(i); // same as Object()

console.log("i == j", i == j); // false

var k = NaN;
var l = Object(k); // same as new Number(k)

console.log("k == l", k == l); // false

// the null and undefined values cannot be boxed
// they have no object wrapper equivalent
// so Object(null) is just like Object() in that both just produce a normal object

// NaN can be boxed to its Number object wrapper equivalent
// but when == causes an unboxing
// the NaN == NaN comparison fails because NaN is never equal to itself
