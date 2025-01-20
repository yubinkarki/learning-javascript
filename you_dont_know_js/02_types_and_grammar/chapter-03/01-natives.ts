// @ts-nocheck

/* NATIVES */

// several times in Chapters 1 and 2, we alluded to various built-ins, usually called “natives,” like String and Number
// let’s examine those in detail now

// here's a list of the most commonly used natives:
String();
Number();
Boolean();
Array();
Object();
Function();
RegExp();
Date();
Error();
Symbol(); // added in ES6

// as you can see, these natives are actually built-in functions
// if you’re coming to JS from a language like Java
// JS's String() will look like the String(..) constructor you’re used to for creating string values
// so, you’ll quickly observe that you can do things like:
var s = new String("Hello World");
console.log(s.toString());

// it is true that each of these natives can be used as a native constructor
// but what's being constructed may be different than you think:
var a = new String("abc");
console.log("Type of a", typeof a); // "object" ... not "string"
console.log("a Instance of String", a instanceof String); // true
console.log("Object.prototype.toString.call(a)", Object.prototype.toString.call(a)); // "[object String]"

// the result of the constructor form of value creation is an object wrapper around the primitive ("abc") value
// importantly, typeof shows that these objects are not their own special types
// but more appropriately, they are subtypes of the object type
// the object wrapper can further be observed with:
console.log("Value of a", a); // [String: 'abc']

// new String("abc") creates a string wrapper object around "abc", not just the primitive "abc" value itself
