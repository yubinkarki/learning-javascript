// @ts-nocheck

/* ARRAYS */

// as compared to other type-enforced languages
// JS arrays are just containers for any type of value
// from string to number to object to even another array (which is how you get multidimensional arrays):
var a = [1, "2", [3]];

a.length; // 3
a[0] === 1; // true
a[2][0] === 3; // true

// you don’t need to pre-size your arrays, you can just declare them and add values as you see fit:
var b = [];

b.length; // 0
b[0] = 1;
b[1] = "2";
b[2] = [3];
b.length; // 3

// be careful about creating “sparse” arrays (leaving or creating empty/missing slots):
var c = [];

c[0] = 1;
// no c[1] slot set here
c[2] = [3];

console.log("Accessing the first index of array c", c[1]); // undefined
console.log("Length of array c", c.length); // 3

// while that works
// it can lead to some confusing behavior with the “empty slots” you leave in between
// while the slot appears to have the undefined value in it
// it will not behave the same as if the slot is explicitly set (a[1] = undefined)
// arrays are numerically indexed (as you’d expect)
// but the tricky thing is that they also are objects that can have string keys/properties added to them
// (but which don’t count toward the length of the array):
var d = [];

d[0] = 1;
d["foobar"] = 2;

console.log("Length of array d", d.length); // 1
console.log(d["foobar"]); // 2
console.log(d.foobar); // 2

// however, a gotcha to be aware of is that
// if a string value intended as a key can be coerced to a standard base-10 number
// then it is assumed that you wanted to use it as a number index rather than as a string key!

var e = [];
e["13"] = "hello";

console.log("Length of array e", e.length); // 14

// generally, it’s not a great idea to add string keys/properties to arrays
// use objects for holding values in keys/properties
// and save arrays for strictly numerically indexed values

/* ARRAY-LIKES */

// there will be occasions where you need to convert an array-like value
// (a numerically indexed collection of values) into a true array
// usually so you can call array utilities (like indexOf(..), concat(..), forEach(..), etc)
// against the collection of values
// one very common way to make such a conversion is to borrow the slice(..) utility against the value:
function foo() {
  console.log("Arguments", arguments); // { '0': 'bar', '1': 'baz' }
  var arr = Array.prototype.slice.call(arguments);
  arr.push("bam");
  console.log("List of items", arr); //  [ 'bar', 'baz', 'bam' ]
}

foo("bar", "baz");

// if slice() is called without any other parameters
// as it effectively is in the above snippet
// the default values for its parameters have the effect of duplicating the array (or, in this case, array-like)
// as of ES6, there’s also a built-in utility called Array.from(..) that can do the same task:
function bar() {
  console.log("Arguments", arguments); // { '0': 'foo', '1': 'baz' }
  var arr = Array.from(arguments);
  arr.push("bam");
  console.log("List of items", arr); //  [ 'foo', 'baz', 'bam' ]
}

bar("foo", "baz");

// Array.from(..) has several powerful capabilities
// and will be covered in detail in the ES6 & Beyond title in this series
