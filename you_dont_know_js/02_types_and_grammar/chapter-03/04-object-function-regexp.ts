// @ts-nocheck

/* Object(..), Function(..), and RegExp(..) */

// the Object(..)/Function(..)/RegExp(..) constructors are also generally optional (and thus should usually be avoided unless specifically called for)

var c = new Object();
c.foo = "bar";
console.log(c); // { foo: "bar" }

var d = { foo: "bar" };
console.log(d); // { foo: "bar" }

var e = new Function("a", "return a*2;");

var f = function (a) {
  return a * 2;
};

function g(a) {
  return a * 2;
}

var h = new RegExp("^a*b+", "g");
var i = /^a*b+/g;

// there’s practically no reason to ever use the new Object() constructor form
// especially since it forces you to add properties one by one instead of many at once in the object literal form
// the Function constructor is helpful only in the rarest of cases
// where you need to dynamically define a function’s parameters and/or its function body
// regular expressions defined in the literal form (/^a*b+/g) are strongly preferred
// not just for ease of syntax but for performance reasons
// the JS engine precompiles and caches them before code execution

// unlike the other constructor forms we’ve seen so far
// RegExp(..) has some reasonable utility: to dynamically define the pattern for a regular expression:
var name = "Kyle";
var namePattern = new RegExp("\\b(?:" + name + ")+\\b", "ig");

var matches = "Kyle".match(namePattern);

console.log("🚀 - matches >>", matches);

/* Date(..) and Error(..) */

// the Date(..) and Error(..) native constructors are much more useful than the other natives
// because there is no literal form for either
// to create a date object value, you must use new Date()
// the Date(..) constructor accepts optional arguments to specify the date/time to use
// but if omitted, the current date/time is assumed

// by far the most common reason you construct a date object is to get the current Unix timestamp value
// (an integer number of seconds since Jan 1, 1970)
// you can do this by calling getTime() on a date object instance

console.log("new Date()", new Date(), typeof new Date()); // Mon Jan 27 2025 21:11:50 GMT+0545 (Nepal Time) object
console.log("new Date().getTime()", new Date().getTime(), typeof new Date().getTime()); // 1737991610417 number

// But an even easier way is to just call the static helper function defined as of ES5: Date.now()
// and to polyfill that for pre-ES5 is pretty easy:
if (!Date.now) {
  Date.now = function () {
    return new Date().getTime();
  };
}

console.log("Date.now()", Date.now(), typeof Date.now()); // 1737991610417 number

// the Error(..) constructor behaves the same with the new keyword present or omitted
// the main reason you’d want to create an error object is that it captures the current execution stack context into the object
// (in most JS engines, revealed as a read-only .stack property once constructed)
// this stack context includes the function call stack and the line number where the error object was created
// which makes debugging that error much easier

// you would typically use such an error object with the throw operator:
function foo(x) {
  if (!x) {
    throw new Error("x wasn't provided");
  }
}

// error object instances generally have at least a message property, and sometimes other properties
// (which you should treat as read-only), like type
// however, other than inspecting the above-mentioned stack property, it’s usually best to just call toString() on the error object to get a friendly formatted error message

/* Symbol(..) */

// new as of ES6, an additional primitive value type has been added, called “Symbol”
// Symbols are special "unique" (not strictly guaranteed) values that can be used as properties on objects with little fear of any collision
// they're primarily designed for special built-in behaviors of ES6 constructs, but you can also define your own Symbols

// symbols can be used as property names, but you cannot see or access the actual value of a symbol from your program
// nor from the developer console
// if you evaluate a symbol in the developer console, what’s shown looks like Symbol(Symbol.create)

// there are several predefined symbols in ES6, accessed as static properties of the Symbol function object
// like Symbol.create, Symbol.iterator, etc
// to use them, do something like:
// obj[Symbol.iterator] = function () {};

// to define your own custom symbols, use the Symbol(..) native
// the Symbol(..) native “constructor” is unique in that you’re not allowed to use new with it, as doing so will throw an error

var mysym = Symbol("my own symbol");
console.log("My own symbol", mysym); // Symbol(my own symbol)
console.log("My own symbol to string", mysym.toString(), typeof mysym.toString()); // Symbol(my own symbol) string
console.log("Type of my own symbol", typeof mysym); // symbol

var a = {};
a[mysym] = "foobar";

console.log("Object.getOwnPropertySymbols(a)", Object.getOwnPropertySymbols(a)); // [Symbol(my own symbol)]

// while symbols are not actually private (Object.getOwnPropertySymbols(..) reflects on the object and reveals the symbols quite publicly)
// using them for private or special properties is likely their primary use case
// for most developers, they may take the place of property names with underscore (_) prefixes
// which are almost always by convention signals to say
// “hey, this is a private/special/internal property, so leave it alone!”

// symbols are not objects, they are simple scalar primitives
