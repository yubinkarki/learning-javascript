// @ts-nocheck

/* MIXED ENVIRONMENT JAVASCRIPT */

// beyond the core language mechanics we’ve fully explored in this book
// there are several ways that your JS code can behave differently when it runs in the real world
// if JS was executing purely inside an engine
// it’d be entirely predictable based on nothing but the black-and-white of the spec
// but JS pretty much always runs in the context of a hosting environment
// which exposes your code to some degree of unpredictability

/* ECMAScript */

// it’s a little known fact that the official name of the language is ECMAScript
// (referring to the ECMA standards body that manages it)
// what then is “JavaScript”? JavaScript is the common tradename of the language of course
// but more appropriately JavaScript is basically the browser implementation of the spec

// the official ECMAScript specification includes “Annex B”
// which discusses specific deviations from the official spec
// for the purposes of JS compatibility in browsers

// the proper way to consider these deviations is that
// they are only reliably present/valid if your code is running in a browser
// if your code always runs in browsers, you won’t see any observable difference
// if not (like if it can run in node.js, Rhino, etc.)
// or you’re not sure, tread carefully

// the main compatibility differences:
// - octal number literals are allowed, such as 0123 (decimal 83) in non-strict mode
// - window.escape(..) and window.unescape(..) allow you to escape or unescape strings
//   with %-delimited hexadecimal escape sequences
// - String.prototype.substr is quite similar to String.prototype.substring
//   except that instead of the second parameter being the ending index (noninclusive)
//   the second parameter is the length (number of characters to include)

/* WEB ECMAScript */

// the Web ECMAScript specification covers the differences between
// the official ECMAScript specification and the current JS implementations in browsers
// in other words, these items are “required” of browsers (to be compatible with each other)
// but are not (as of the time of writing) listed in the “Annex B” section of the official spec:
// - <!-- and --> are valid single-line comment delimiters
// - String.prototype additions for returning HTML-formatted strings:
//   anchor(..), big(..), blink(..), bold(..), fixed(..), fontcolor(..)
//   fontsize(..), italics(..), link(..), small(..), strike(..), and sub(..)
// - Function.prototype additions:
//   Function.prototype.arguments (aliases internal arguments object) and
//   Function.caller (aliases internal arguments.caller).

/* HOST OBJECTS */

// the well-covered rules for how variables behave in JS have exceptions to them
// when it comes to variables that are auto-defined
// or otherwise created and provided to JS by the environment that hosts your code (browser, etc)
// so-called “host objects” (which include both built-in objects and functions)

var a = document.createElement("div");
typeof a; // "object" - as expected
Object.prototype.toString.call(a); // "[object HTMLDivElement]"
a.tagName; // "DIV"

// a is not just an object, but a special host object because it’s a DOM element
// it has a different internal [[Class]] value ("HTMLDivElement")
// and comes with predefined (and often unchangeable) properties

// another such quirk has already been covered, in the “Falsy Objects” section in Chapter 4:
// some objects can exist but when coerced to boolean
// they (confoundingly) will coerce to false instead of the expected true

// other behavior variations with host objects to be aware of can include:
// - not having access to normal object built-ins like toString()
// - not being over-writable
// - having certain predefined read-only properties
// - having methods that cannot be this-overridden to other objects
// - and more…

// host objects are critical to making our JS code work with its surrounding environment
// but it’s important to note when you’re interacting with a host object
// and to be careful assuming its behaviors
// as they will quite often not conform to regular JS objects

/* GLOBAL DOM VARIABLES */

// you’re probably aware that declaring a variable in the global scope (with or without var)
// creates not only a global variable
// but also its mirror: a property of the same name on the global object (window in the browser)
// but what may be less common knowledge is that (because of legacy browser behavior)
// creating DOM elements with id attributes creates global variables of those same names
// for example:
// <div id="foo"></div>;
// And:
// if (typeof foo == "undefined") {
//   foo = 42; // will never run
// }
// console.log(foo); // HTML element

// you’re perhaps used to managing global variable tests (using typeof or .. in window checks)
// under the assumption that only JS code creates such variables
// but as you can see, the contents of your hosting HTML page can also create them
// which can easily throw off your existence check logic if you’re not careful
