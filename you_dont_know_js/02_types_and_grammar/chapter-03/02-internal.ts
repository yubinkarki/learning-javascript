// @ts-nocheck

/* INTERNAL [[CLASS]] */

// values that are typeof of "object" (such as an array)
// are additionally tagged with an internal [[Class]] property
// think of this more as an internal classification rather than related to classes
// from traditional class-oriented coding
// this property cannot be accessed directly
// but can generally can be revealed indirectly by borrowing the default
// Object.prototype.toString(..) method called against the value

// for example:
console.log("[1, 2, 3]", Object.prototype.toString.call([1, 2, 3])); // [object Array]
console.log("/regex-literal/i", Object.prototype.toString.call(/regex-literal/i)); // [object RegExp]

// so, for the array in this example
// the internal [[Class]] value is "Array", and for the regular expression, it’s "RegExp"
// in most cases, this internal [Class]] value corresponds to the built-in native constructor
// that’s related to the value - but that’s not always the case

// what about primitive values? - first, null and undefined:
console.log("null", Object.prototype.toString.call(null)); // [object Null]
console.log("undefined", Object.prototype.toString.call(undefined)); // [object Undefined]

// you'll note that there are no Null() or Undefined() native constructors
// but nevertheless "Null" and "Undefined" are the internal [[Class]] values exposed
// but for the other simple primitives like string, number and boolean
// another behavior actually kicks in which is usually called "boxing"

console.log("abc", Object.prototype.toString.call("abc")); // [object String]
console.log("42", Object.prototype.toString.call(42)); // [object Number]
console.log("true", Object.prototype.toString.call(true)); // [object Boolean]

// in this snippet
// each of the simple primitives are automatically boxed by their respective object wrappers
// which is why "String", "Number", and "Boolean" are revealed as the respective internal [[Class]] values

/* BOXING WRAPPERS */

// these object wrappers serve a very important purpose
// primitive values don't have properties or methods
// so to access .length or .toString() you need an object wrapper around the value
// thankfully, JS will automatically box (aka wrap) the primitive value to fulfill such accesses:
var a = "abc";
a.length; // 3
a.toUpperCase(); // "ABC"

// there's basically no reason to use the object form directly
// it's better to just let the boxing happen implicitly where necessary
// in other words, never do things like new String("abc"), new Number(42), etc
// always prefer using the literal primitive values "abc" and 42

/* OBJECT WRAPPER GOTCHAS */

// there are even gotchas with using object wrappers directly
// that you should be aware of if you do choose to ever use them
// for example, consider Boolean wrapper values:
var isNice = new Boolean(false);

if (!isNice) {
  console.log("Oops"); // never runs
}

// the problem is that you've created an object wrapper around the false value
// but objects themselves are truthy
// so using the object behaves oppositely to using the underlying false value itself

/* UNBOXING */

// if you have an object wrapper and you want to get the underlying primitive value out
// you can use the valueOf() method:
var x = new String("abc");
var y = new Number(42);
var z = new Boolean(true);

console.log("Value of x", x.valueOf()); // "abc"
console.log("Value of y", y.valueOf()); // 42
console.log("Value of z", z.valueOf()); // true

// unboxing can also happen implicitly
// when using an object wrapper value in a way that requires the primitive value
var w = new String("nice");
var v = w + "";

console.log("Type of w", typeof w); // "object"
console.log("Type of v", typeof v); // "string"
