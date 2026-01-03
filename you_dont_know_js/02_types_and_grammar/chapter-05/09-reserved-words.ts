// @ts-nocheck

/* RESERVED WORDS */

// the ES5 spec defines a set of “reserved words” in Section 7.6.1
// that cannot be used as standalone variable names
// technically, there are four categories:
// “keywords”, “future reserved words”, the null literal, and the true/false boolean literals

// keywords are the obvious ones like function and switch
// future reserved words include things like enum
// though many of the rest of them (class, extends, etc) are all now actually used by ES6
// there are other strict mode-only reserved words like interface

// StackOverflow user “art4theSould” creatively worked
// all these reserved words into a fun little poem:

// Let this long package float,
// Goto private class if short.
// While protected with debugger case,
// Continue volatile interface.
// Instanceof super synchronized throw,
// Extends final export throws.

// Try import double enum?
// - False, boolean, abstract function,
// Implements typeof transient break!
// Void static, default do,
// Switch int native new.
// Else, delete null public var
// In return for const, true, char
// …Finally catch byte.

// this poem includes words that were reserved in ES3 (byte, long, etc)
// that are no longer reserved as of ES5

// prior to ES5, the reserved words also could not be property names
// or keys in object literals, but that restriction no longer exists

// So, this is not allowed:
// var import = "42";

// But this is allowed:
var obj = { import: "42" };
console.log(obj.import);

/* IMPLEMENTATION LIMITS */

// the JS spec does not place arbitrary limits on things
// such as the number of arguments to a function or the length of a string literal
// but these limits exist nonetheless, because of implementation details in different engines

function addAll() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

var nums = [];

for (var i = 1; i < 100000; i++) {
  nums.push(i);
}

console.log(addAll(1, 1, 1));
console.log(addAll.apply(null, nums));

// in some JS engines, you’ll get the correct 499950000 answer
// but in others (like Safari 6.x) you’ll get the error
// “RangeError: Maximum call stack size exceeded”

// examples of other limits known to exist:
// - maximum number of characters allowed in a string literal (not just a string value)
// - size (bytes) of data that can be sent in arguments to a function call (aka stack size)
// - number of parameters in a function declaration
// - maximum depth of nonoptimized call stack (i.e., with recursion):
//   how long a chain of function calls from one to the other can be
// - number of seconds a JS program can run continuously blocking the browser
// - maximum length allowed for a variable name
