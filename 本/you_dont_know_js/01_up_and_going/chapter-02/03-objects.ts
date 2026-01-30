// @ts-nocheck

/* OBJECTS */

// the object type refers to a compound value
// where you can set properties (named locations) that each hold their own values of any type
// this is perhaps the most useful value types in all of JS

var obj = {
  a: "Hello World",
  b: 42,
  c: true,
};

obj.a;
obj.b;
obj.c;

obj["a"];
obj["b"];
obj["c"];

// properties can either be accessed with dot notation (i.e. obj.a) or bracket notation (i.e. obj["a"])
// bracket notation is useful if you have a property name that has special characters in it
// like obj["hello world!"] -- such properties are often referred to as keys
// the [] notation required either a variable or a string literal
// of course, the bracket notation is also useful if you want to access a property/key
// but the name is stored in another variable

var newObj = {
  a: "nice",
  b: 43,
};

var b = "a";

newObj["b"]; // 43
newObj[b]; // "nice"

// there are a couple of other value types that you will commonly interact with in JS programs:
// array and function
// but rather than being proper built-in types
// these should be thought of more like subtypes—specialized versions of the object type

/* ARRAYS */

// an array is an object that holds values (of any type) in numerically indexed positions

var arr = ["hello", 42, true];

arr[0];
arr[1];
arr[2];
arr.length; // 3

typeof arr; // "object"

// languages that start counting at 0, like JS, use 0 as the index of the first element in the array
// because arrays are special objects (as typeof implies)
// they can also have properties, including the automatically updated length property

/* FUNCTIONS */

// the other object subtype you’ll use all over your JS programs is a function

function foo() {
  return 42;
}

foo.bar = "ok"; // function object property

console.log(typeof foo); // "function"
console.log(typeof foo()); // "number"
console.log(typeof foo.bar); // "string"

// functions are a subtype of objects
// typeof returns "function", which implies that a function is a main type and can thus have properties
// but you typically will only use function object properties (like foo.bar) in limited cases
