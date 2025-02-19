// @ts-nocheck

/* VALUES AS TYPES */

// In JS, variables don’t have types — values have types
// variables can hold any value, at any time
// if you use typeof against a variable, it’s not asking “What’s the type of the variable?” as it may seem
// since JS variables have no types - instead, it’s asking “What’s the type of the value in the variable?”

var a = 42;
typeof a; // "number"

a = true;
typeof a; // "boolean"

// the typeof operator always returns a string
typeof typeof 42; // "string"

// the first typeof 42 returns "number", and typeof "number" is "string"

/* UNDEFINED VS UNDECLARED */

// variables that have no value currently actually have the undefined value
// calling typeof against such variables will return "undefined":

var name;
console.log("Type of name", typeof name); // undefined

var age = 50;
var gender;

age = gender;
console.log("Type of age", typeof age); // undefined
console.log("Type of gender", typeof gender); // undefined

// it’s tempting for most developers to think of the word “undefined” as a synonym for “undeclared"
// however, in JS, these two concepts are quite different
// an “undefined” variable is one that has been declared in the accessible scope, but at the moment has no other value in it
// by contrast, an “undeclared” variable is one that has not been formally declared in the accessible scope

console.log("Accessing undeclared variable 'location'", location); // ReferenceError: location is not defined

// an annoying confusion is the error message that browsers assign to this condition
// as you can see, the message is “location is not defined”
// which is of course very easy and reasonable to confuse with “location is undefined”
// yet again, “undefined” and “is not defined” are very different things
// it’d be nice if the browsers said something like “location is not found”
// or “location is not declared” to reduce the confusion!

// there’s also a special behavior associated with typeof as it relates to undeclared variables
// that even further reinforces the confusion

var x;
console.log("Type of x", typeof x); // "undefined"
console.log("Type of y", typeof y); // "undefined"

// the typeof operator returns "undefined" even for “undeclared” (or “not defined”) variables
// notice that there was no error thrown when we executed typeof y, even though y is an undeclared variable
// this is a special safety guard in the behavior of typeof
// similar to above, it would have been nice if typeof used with an undeclared variable returned “undeclared”
// instead of conflating the result value with the different “undefined” case

/* TYPEOF UNDECLARED */

// nevertheless, this safety guard is a useful feature when dealing with JS in the browser
// where multiple script files can load variables into the shared global namespace

// as a simple example, imagine having a “debug mode” in your program
// that is controlled by a global variable (flag) called DEBUG
// you’d want to check if that variable was declared before performing a debug task
// like logging a message to the console
// a top-level global var DEBUG = true declaration would only be included in a “debug.js” file
// which you only load into the browser when you’re in development/testing, but not in production

// however, you have to take care in how you check for the global DEBUG variable
// in the rest of your application code so that you don’t throw a ReferenceError
// the safety guard on typeof is our friend in this case:

// oops, this would throw an error!
// if (DEBUG) {
//   console.log("Debugging");
// }

if (typeof DEBUG !== "undefined") {
  console.log("Debugging");
}

// this sort of check is useful even if you’re not dealing with user-defined variables (like DEBUG)
// if you are doing a feature check for a built-in API
// you may also find it helpful to check without throwing an error:

if (typeof atob === "undefined") {
  atob = function () {};
}

// another way of doing these checks against global variables but without the safety guard feature of typeof is to observe that all global variables are also properties of the global object, which in the browser is basically the window object
// so, the above checks could have been done (quite safely) as:

// if (window.DEBUG) {
// }

// if (window.atob) {
// }

// unlike referencing undeclared variables, there is no ReferenceError thrown if you try to access an object property (even on the global window object) that doesn’t exist
// on the other hand, manually referencing the global variable with a window reference is something some developers prefer to avoid, especially if your code needs to run in multiple JS environments (not just browsers, but server-side node.js, for instance), where the global variable may not always be called window
// technically, this safety guard on typeof is useful even if you’re not using global variables, though these circumstances are less common, and some developers may find this design approach less desirable
// imagine a utility function that you want others to copy-and-paste into their programs or modules, in which you want to check to see if the including program has defined a certain variable (so that you can use it) or not:
function doSomethingCool() {
  var helper = typeof FeatureXYZ !== "undefined" ? FeatureXYZ : function () {};
  var val = helper();
}

// doSomethingCool() tests for a variable called FeatureXYZ, and if found, uses it, but if not, uses its own
// now, if someone includes this utility into their module/program, it safely checks if they’ve defined FeatureXYZ or not:
(function () {
  function FeatureXYZ() {}

  function doSomethingCool() {
    var helper = typeof FeatureXYZ !== "undefined" ? FeatureXYZ : function () {};
    var val = helper();
  }

  doSomethingCool();
})();

// here, FeatureXYZ is not at all a global variable, but we’re still using the safety guard of typeof to make it safe to check for
// and importantly, here there is no object we can use (like we did for global variables with window.___) to make the check, so typeof is quite helpful

// other developers would prefer a design pattern called “dependency injection” where instead of doSomethingCool() inspecting implicitly for FeatureXYZ to be defined outside/around it, it would need to have the dependency explicitly passed in, like:
function doAnotherThing(FeatureABC) {
  var helper = FeatureABC || function () {};
  var val = helper();
}

// there’s lots of options when designing such functionality
// no one pattern here is “correct” or “wrong” — there are various trade-offs to each approach
// but overall, it’s nice that the typeof undeclared safety guard gives us more options
