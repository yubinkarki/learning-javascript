// @ts-nocheck

/* JSON STRINGIFICATION */

// another task that seems awfully related to ToString is
// when you use the JSON.stringify(..) utility to serialize a value to a JSON-compatible string value
// it’s important to note that this stringification is not exactly the same thing as coercion
// but since it’s related to the ToString rules above
// we’ll take a slight diversion to cover JSON stringification behaviors here

// for most simple values, JSON stringification behaves basically the same as toString() conversions
// except that the serialization result is always a string:
console.log(JSON.stringify(42)); // "42"
console.log(JSON.stringify("42")); // '"42"'
console.log(JSON.stringify(null)); // "null"
console.log(JSON.stringify(true)); // "true"

// any JSON-safe value can be stringified by JSON.stringify(..)
// but what is JSON-safe? Any value that can be represented validly in a JSON representation
// it may be easier to consider values that are not JSON-safe
// some examples are undefineds, functions, (ES6+) symbols
// and objects with circular references
// (where property references in an object structure create a never-ending cycle through each other)
// these are all illegal values for a standard JSON structure
// mostly because they aren’t portable to other languages that consume JSON values

// the JSON.stringify(..) utility will automatically omit
// undefined, function, and symbol values when it comes across them
// if such a value is found in an array
// that value is replaced by null (so that the array position information isn’t altered)
// if found as a property of an object, that property will simply be excluded

// consider:
console.log(JSON.stringify(undefined)); // undefined
console.log(JSON.stringify(function () {})); // undefined
console.log(JSON.stringify([1, undefined, function () {}, 4])); // "[1,null,null,4]"
console.log(JSON.stringify({ a: 2, b: function () {} })); // "{"a":2}"

// but if you try to JSON.stringify(..)
// an object with circular reference(s) in it, an error will be thrown
// JSON stringification has the special behavior that if an object value has a toJSON() method defined
// this method will be called first to get a value to use for serialization

var o = {};
var a = {
  b: 42,
  c: o,
  d: function () {},
};

// create a circular reference inside 'a'
o.e = a;

// console.log(JSON.stringify(a)); // TypeError: Converting circular structure to JSON

a.toJSON = function () {
  return { b: this.b };
};

console.log(JSON.stringify(a)); // {"b":42}

// it’s a very common misconception that toJSON() should return a JSON stringification representation
// that’s probably incorrect, unless you’re wanting to actually stringify the string itself (usually not!)
// toJSON() should return the actual regular value (of whatever type) that’s appropriate
// and JSON.stringify(..) itself will handle the stringification

// while we’re talking about JSON.stringify(..)
// let’s discuss some lesser-known functionalities that can still be very useful
// an optional second argument can be passed to JSON.stringify(..) that is called replacer
// this argument can either be an array or a function
// it’s used to customize the recursive serialization of an object by providing a filtering mechanism
// for which properties should and should not be included
// in a similar way to how toJSON() can prepare a value for serialization

// if replacer is an array, it should be an array of strings
// each of which will specify a property name that is allowed to be included in the serialization of the object
// if a property exists that isn’t in this list, it will be skipped

// if replacer is a function, it will be called once for the object itself
// and then once for each property in the object, and each time is passed two arguments, key and value
// to skip a key in the serialization, return undefined
// otherwise, return the value provided

var w = {
  x: 42,
  y: "42",
  z: [1, 2, 3],
};

console.log(JSON.stringify(w, ["x", "y"])); // {"x":42,"y":"42"}
console.log(
  JSON.stringify(w, function (k, v) {
    if (k === "" || k === "x") return v; // have to check empty string for root object
    else return undefined;
  })
); // {"y":"42","z":[1,2,3]}

// a third optional argument can also be passed to JSON.stringify(..), called space
// which is used as indentation for prettier human-friendly output
// space can be a positive integer to indicate how many space characters should be used at each indentation level
// or, space can be a string
// in which case up to the first 10 characters of its value will be used for each indentation level:
console.log("indentation with number", JSON.stringify(w, null, 2));
console.log("indentation with string", JSON.stringify(w, null, "--"));
