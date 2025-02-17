// @ts-nocheck

/* ToBoolean */

// first and foremost, JS has actual keywords true and false, and they behave exactly as you’d expect of boolean values
// it’s a common misconception that the values 1 and 0 are identical to true/false
// while that may be true in other languages, in JS the numbers are numbers and the booleans are booleans
// you can coerce 1 to true (and vice versa) or 0 to false (and vice versa)
// but they’re not the same

/* FALSY VALUES */

// but that’s not the end of the story
// we need to discuss how values other than the two booleans behave whenever you coerce to their boolean equivalent
// all of JavaScript’s values can be divided into two categories:
// 1. values that will become false if coerced to boolean
// 2. everything else (which will obviously become true)

// i’m not just being facetious
// the JS spec defines a specific narrow list of values that will coerce to false when coerced to a boolean value
// how do we know what the list of values is?
// in the ES5 spec, section 9.2 defines a ToBoolean abstract operation
// which says exactly what happens for all the possible values when you try to coerce them “to boolean”

// from that table, we get the following as the so-called “falsy” values list:
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(0n));
console.log(Boolean(NaN));
console.log(Boolean(""));

// that’s it - if a value is on that list, it’s a “falsy” value
// and it will coerce to false if you force a boolean coercion on it
// by logical conclusion, if a value is not on that list, it must be on another list
// which we call the “truthy” values list
// but JS doesn’t really define a “truthy” list per se
// it gives some examples, such as saying explicitly that all objects are truthy
// but mostly the spec just implies that anything not explicitly on the falsy list is therefore truthy

/* FALSY OBJECTS */

// wait a minute, that section title even sounds contradictory
// i literally just said the spec calls all objects truthy, right?
// there should be no such thing as a “falsy object”
// what could that possibly even mean?
// you might be tempted to think it means an object wrapper around a falsy value (such as "", 0, or false)
// but don’t fall into that trap

// consider:
var a = new String("");
var b = new Boolean(false);
var c = new Number(0);

console.log(a, typeof a, b, typeof b, c, typeof c); // [String: ''] object [Boolean: false] object [Number: 0] object

// we know all three values here are objects (see Chapter 3) wrapped around obviously falsy values
// but do these objects behave as true or as false? That’s easy to answer:
var d = Boolean(a && b && c);

console.log("Boolean(a && b && c) >>", d); // true

// so, if “falsy objects” are not just objects wrapped around falsy values
// what the heck are they?
// the tricky part is that they can show up in your JS program
// but they’re not actually part of JS itself
// what!?
// there are certain cases where browsers have created their own sort of exotic values behavior
// namely this idea of “falsy objects,” on top of regular JS semantics
// a “falsy object” is a value that looks and acts like a normal object (properties, etc)
// but when you coerce it to a boolean, it coerces to a false value
// why!?
// the most well-known case is document.all, an array-like (object) provided to your JS program by the DOM
// (not the JS engine itself)
// which exposes elements in your page to your JS program
// it used to behave like a normal object — it would act truthy
// but not anymore

/* TRUTHY VALUES */

// back to the truthy list. What exactly are the truthy values?
// remember: a value is truthy if it’s not on the falsy list

// consider:
var x = "false";
var y = "0";
var z = "''";

var w = Boolean(x && y && z);
console.log("w >>", w); // true

// what value do you expect d to have here? It’s gotta be either true or false
// it’s true. Why?
// because despite the contents of those string values looking like falsy values
// the string values themselves are all truthy, because "" is the only string value on the falsy list

// what about these?
var p = []; // empty array - truthy or falsy
var q = {}; // empty object - truthy or falsy
var r = function () {}; // empty function - truthy or falsy

var s = Boolean(p && q && r);
console.log("s >>", s); // true

// yep, you guessed it, d is still true here - why? Same reason as before
// despite what it may seem like, [], {}, and function(){} are not on the falsy list
// and thus are truthy values
// in other words, the truthy list is infinitely long
// it’s impossible to make such a list
// you can only make a finite falsy list and consult it
// take five minutes, write the falsy list on a Post-it note for your computer monitor, or memorize it if you prefer
// either way, you’ll easily be able to construct a virtual truthy list whenever you need it
// by simply asking if it’s on the falsy list or not

// the importance of truthy and falsy is in understanding how a value will behave if you coerce it
// (either explicitly or implicitly) to a boolean value
// now that you have those two lists in mind, we can dive into coercion examples themselves
