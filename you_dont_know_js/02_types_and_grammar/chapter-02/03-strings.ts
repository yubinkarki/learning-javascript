// @ts-nocheck

/* STRINGS */

// it's a very common belief that strings are essentially just arrays of characters
// while the implementation under the covers may or may not use arrays
// it’s important to realize that JS strings are really not the same as arrays of characters
// the similarity is mostly just skin-deep

// for example, let's consider these two values:
var a = "foo";
var b = ["f", "o", "o"];

// strings do have a shallow resemblance to arrays — they are array-likes
// for instance, both of them have a length property
// an indexOf(..) method (array version only as of ES5), and a concat(..) method:
console.log(a.length); // 3
console.log(b.length); // 3
console.log(a.indexOf("o")); // 1
console.log(b.indexOf("o")); // 1

var c = a.concat("bar"); // "foobar"
var d = b.concat(["b", "a", "r"]); // ["f", "o", "o", "b", "a", "r"]

console.log(a === c); // false
console.log(b === d); // false

// so, they’re both basically just “arrays of characters” right?
// not exactly:
a[1] = "c";
b[1] = "c";

console.log("a", a); // "foo"
console.log("b", b); // [ 'f', 'c', 'o' ]

// JS strings are immutable, while arrays are quite mutable
// moreover, the a[1] character position access form was not always widely valid JS
// older versions of IE did not allow that syntax (but now they do)
// instead, the correct approach has been a.charAt(1)

// a further consequence of immutable strings is that
// none of the string methods that alter its contents can modify in-place
// but rather must create and return new strings
// by contrast, many of the array methods that change array contents actually do modify in-place:
c = a.toUpperCase();
console.log(a === c); // false

console.log("a", a); // "foo"
console.log("c", c); // "FOO"

b.push("!");
console.log("b", b); // [ 'f', 'c', 'o', '!' ]

// also, many of the array methods that could be helpful when dealing with strings
// are not actually available for them
// but we can “borrow” non-mutation array methods against our string:
a.join; // undefined
a.map; // undefined

var newJoinedString = Array.prototype.join.call(a, "-");
console.log("New joined string", newJoinedString); // "f-o-o"

var newMappedString = Array.prototype.map
  .call(a, function (item) {
    return item.toUpperCase() + "#";
  })
  .join("");

console.log("New mapped string", newMappedString); // "F#O#O#"

// let’s take another example:
// reversing a string (incidentally, a common JS interview trivia question!)
// arrays have a reverse() in-place mutator method, but strings do not:

a.reverse; // undefined
b.reverse();
console.log("Reversed array", b); // [ '!', 'o', 'c', 'f' ]

// unfortunately, this “borrowing” doesn’t work with array mutators
// because strings are immutable and thus can’t be modified in place:

// Array.prototype.reverse.call(a); // still returns a String object wrapper for "foo"

// another hack is to convert the string into array
// reverse the array and then join the array into a string:
var reversedString = Array.from(a).reverse().join("");
console.log("Reversed string", reversedString);

// if that feels ugly, it is
// nevertheless, it works for simple strings
// so if you need something quick-n-dirty, often such an approach gets the job done

// be careful! this approach doesn’t work for strings with complex (unicode) characters in them
// (astral symbols, multibyte characters, etc)

// the other way to look at this is if you are more commonly doing tasks on your “strings”
// that treat them as basically arrays of characters
// perhaps it’s better to just actually store them as arrays rather than as strings
// you’ll probably save yourself a lot of hassle of converting from string to array each time
// you can always call join("") on the array of characters whenever you actually need the string representation
