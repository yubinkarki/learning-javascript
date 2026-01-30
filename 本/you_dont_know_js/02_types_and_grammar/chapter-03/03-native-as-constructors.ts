// @ts-nocheck

/* NATIVES AS CONSTRUCTORS */

// for array, object, function and regular-expression values
// it's almost universally preferred that you use the literal form for creating the values
// but the literal form creates the same sort of object as the constructor form does
// (that is, there is no non-wrapped value)
// just as we’ve seen above with the other natives
// these constructor forms should generally be avoided, unless you really know you need them
// mostly because they introduce exceptions and gotchas that you probably don’t really want to deal with

/* ARRAY */

var a = new Array(1, 2, 3); // [1, 2, 3]
var b = [1, 2, 3]; // [1, 2, 3]

// the Array(..) constructor does not require the new keyword in front of it
// if you omit it, it will behave as if you have used it anyway
// so Array(1,2,3) is the same outcome as new Array(1,2,3)

// the Array constructor has a special form where if only one number argument is passed
// instead of providing that value as contents of the array
// it’s taken as a length to “pre-size the array” (well, sorta)
// this is a terrible idea - firstly, you can trip over that form accidentally, as it’s easy to forget
// but more importantly, there’s no such thing as actually pre-sizing the array
// instead, what you’re creating is an otherwise empty array
// but setting the length property of the array to the numeric value specified

var c = new Array(3);

console.log("Contents of c", c);
console.log("Length of c", c.length);

var x = new Array(3); // [ <3 empty items> ]
var y = [undefined, undefined, undefined]; // [undefined, undefined, undefined]
var z = []; // []
z.length = 3; // [ <3 empty items> ]

console.log("Contents of x", x, x.length);
console.log("Contents of y", y, y.length);
console.log("Contents of z", z, z.length);

// more than just confusing console output
// x and y from the above code snippet actually behave the same in some cases but differently in others:
console.log("Join x", x.join("-")); // "--"
console.log("Join y", y.join("-")); // "--"

console.log(
  "Map x",
  x.map((item, index) => item)
); // [ <3 empty items> ]

console.log(
  "Map y",
  y.map((item, index) => item)
); // [ undefined, undefined, undefined ]
