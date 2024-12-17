// @ts-nocheck

/* BUILT IN TYPE METHODS */

// the built-in types and subtypes we’ve just discussed have behaviors exposed as properties and methods that are quite powerful and useful

var a = "ok";
var b = 3.14159;

console.log(a.length); // 2
console.log(a.toUpperCase()); // "OK"
console.log(b.toFixed(4)); // 3.1416

// the “how” behind being able to call a.toUpperCase() is more complicated than just that method existing on the value
// briefly, there is a String (capital S) object wrapper form, typically called a "native", that pairs with the primitive string type
// it's this object wrapper that defines the toUpperCase() method on its prototype
// when you use a primitive value like "ok" as an object by referencing a property or method, JS automatically "boxes" the value to its object wrapper counterpart (hidden under the covers)
// a string value can be wrapped by a String object, a number can be wrapped by a Number object and a boolean can be wrapped by a Boolean object
// for the most part, you don't need to worry about or directly use these object wrapper forms of the values -- prefer the primitive value forms in practically all cases and JS will take care of the rest

/* COMPARING VALUES */

// there are two main types of value comparison that you will need to make in your JS programs: equality and inequality
// the result of any comparison is a strictly boolean value (true or false), regardless of what value types are compared

/* COERCION */

// coercion comes in two forms: explicit and implicit
// explicit coercion is simply that you can see from the code that a conversion from one type to another will occur
// whereas implicit coercion is when the type conversion can happen as more of a non-obvious side effect of some other operation
// you’ve probably heard sentiments like “coercion is evil” drawn from the fact that there are clearly places where coercion can produce some surprising results
// perhaps nothing evokes frustration from developers more than when the language surprises them

// explicit
var c = "42";
var d = Number(c);

console.log(c, typeof c);
console.log(d, typeof d);

// implicit
var e = "22";
var f = e * 1; // "42" implicitly coerced to 42 here

console.log(e, typeof e);
console.log(f, typeof f);

/* TRUTHY AND FALSY */

// when a non boolean value if coerced to a boolean, does it become true or false, respectively?

// the specific list of “falsy” values in JavaScript is as follows
// "" (empty string), 0, -0, NaN (invalid number), null, undefined, false

// any value that's not on this "falsy" list is "truthy"
// "hello", 42, true, [], [1, 2 , "3"], {}, { a: 42}, functions

// it's important to remember than a non-boolean value only follows this coercion if it's actually coerced to a boolean
// it’s not all that difficult to confuse yourself with a situation that seems like it’s coercing a value to a boolean when it’s not

/* EQUALITY */

// there are four equality operators: ==, ===, !=, and !==
// the ! forms are of course the symmetric “not equal” versions of their counterparts; non-equality should not be confused with inequality
// the difference between == and === is usually characterized that == checks for value equality and === checks for both value and type equality
// however, this is inaccurate
// the proper way to characterize them is that == checks for value equality with coercion allowed, and === checks for value equality without allowing coercion; === is often called “strict equality” for this reason
// consider the implicit coercion that’s allowed by the == loose-equality comparison

var numOne = 1;
var numTwo = true;

console.log(numOne == numTwo); // true - numTwo is converted to 1
console.log(numOne === numTwo); // false

// in the a == b comparison, JS notices that the types do not match, so it goes through an ordered series of steps to coerce one or both values to a different type until the types match, where then a simple value equality can be checked
// if you think about it, there’s two possible ways a == b could give true via coercion
// either the comparison could end up as 42 == 42 or it could be "42" == "42" - so which is it?
// the answer: "42" becomes 42, to make the comparison 42 == 42
// in such a simple example, it doesn’t really seem to matter which way that process goes, as the end result is the same
// there are more complex cases where it matters not just what the end result of the comparison is, but how you get there
// you should take special note of the == and === comparison rules if you’re comparing two non-primitive values, like objects (including function and array)
// because those values are actually held by reference, both == and === comparisons will simply check whether the references match, not anything about the underlying values
// for example, arrays are by default coerced to strings by simply joining all the values with commas (,) in between
// you might think that two arrays with the same contents would be == equal, but they’re not

var arrOne = [1, 2, 3];
var arrTwo = [1, 2, 3];
var numberString = "1,2,3";

console.log("arrOne == numberString", arrOne == numberString); // true
console.log("arrTwo == numberString", arrTwo == numberString); // true
console.log("arrOne == arrTwo", arrOne == arrTwo); // false

/* INEQUALITY */

// the <, >, <=, and >= operators are used for inequality, referred to in the specification as “relational comparison”
// typically they will be used with ordinally comparable values like numbers
// it’s easy to understand that 3 < 4
// but JS string values can also be compared for inequality, using typical alphabetic rules ("bar" < "foo")
// what about coercion?
// similar rules as == comparison (though not exactly identical!) apply to the inequality operators
// notably, there are no “strict inequality” operators that would disallow coercion the same way === “strict equality” does

var testOne = 41;
var testTwo = "400";
var testThree = "42";

console.log("testOne < testTwo", testOne < testTwo);
console.log("testTwo < testThree", testTwo < testThree); // "4" === "4" >> "0" < "2"

// the biggest gotcha you may run into here with comparisons between potentially different value types
// remember, there are no “strict inequality” forms to use

var blue = 42;
var purple = "foo";

console.log("blue < purple", blue < purple); // false
console.log("blue > purple", blue > purple); // false
console.log("blue == purple", blue == purple); // false

// wait, how can all three of those comparisons be false?
// because the 'purple' value is being coerced to the “invalid number value” NaN in the < and > comparisons
// and the specification says that NaN is neither greater than nor less than any other value
// the == comparison fails for a different reason
// blue == purple could fail if it’s interpreted either as 42 == NaN or "42" == "foo"
// as we explained earlier, the former is the case
