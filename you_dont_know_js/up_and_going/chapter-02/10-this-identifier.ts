// @ts-nocheck

/* THIS IDENTIFIER */

// another very commonly misunderstood concept in JavaScript is the this keyword
// while it may often seem that this is related to “object-oriented patterns”, in JS this is a different mechanism
// If a function has a this reference inside it, that 'this' reference usually points to an object
// but which object it points to depends on how the function was called
// it’s important to realize that this does not refer to the function itself, as is the most common misconception

function foo() {
  console.log(this.bar);
}

var bar = "global";

var objOne = {
  bar: "object one",
  foo: foo,
};

var objTwo = {
  bar: "object two",
};

foo(); // "global" or undefined
objOne.foo(); // "object one"
foo.call(objTwo); // "object two"
new foo(); // undefined - sets 'this' to a brand new empty object

function greetUser(greeting) {
  console.log(`${greeting} ${this.name}`);
}

var yubin = {
  name: "Yubin Karki",
  age: 25,
};

greetUser("Hello");
greetUser.call(yubin, "Ola"); // explicitly setting the 'this' reference yo the yubin object for this function call

// to understand what this points to, you have to examine how the function in question was called
// it will be one of those four ways just shown, and that will then answer what 'this' is

/* PROTOTYPES */

// the prototype mechanism in JS is quite complicated
// when you reference a property on an object, if that property doesn’t exist, JS will automatically use that object’s internal prototype reference to find another object to look for the property on
// you could think of this almost as a fallback if the property is missing
// the internal prototype reference linkage from one object to its fallback happens at the time the object is created
// the simplest way to illustrate it is with a built-in utility called Object.create(..)

var nice = { a: 42 };

// create 'awesome' and link it to 'nice'
var awesome = Object.create(nice);

awesome.b = "hello world";

console.log(awesome.b); // "hello world"
console.log(awesome.a); // 42 -- delegated to 'nice'

// the 'a' property doesn’t actually exist on the 'awesome' object
// but because 'awesome' is prototype-linked to 'nice', JS automatically falls back to looking for 'a' on the 'nice' object, where it’s found
// this linkage may seem like a strange feature of the language
// the most common way this feature is used and I would argue, abused — is to try to emulate/fake a “class” mechanism with “inheritance”
// but a more natural way of applying prototypes is a pattern called “behavior delegation”
// where you intentionally design your linked objects to be able to delegate from one to the other for parts of the needed behavior

/* OLD AND NEW */

// some of the JS features we’ve already covered, and certainly many of the features covered in the rest of this series, are newer additions and will not necessarily be available in older browsers
// in fact, some of the newest features in the specification aren’t even implemented in any stable browsers yet
// so, what do you do with the new stuff?
// do you just have to wait around for years or decades for all the old browsers to fade into obscurity?
// that’s how many people think about the situation, but it’s really not a healthy approach to JS
// there are two main techniques you can use to “bring” the newer JS stuff to the older browsers: polyfilling and transpiling

/* POLYFILLING */

// the word “polyfill” is an invented term (by Remy Sharp) used to refer to taking the definition of a newer feature and producing a piece of code that’s equivalent to the behavior, but is able to run in older JS environments
// for example, ES6 defines a utility called Number.isNaN(..) to provide an accurate, non-buggy check for NaN values, deprecating the original isNaN(..) utility
// but it’s easy to polyfill that utility so that you can start using it in your code regardless of whether the end user is in an ES6 browser or not

if (!Number.isNaN) {
  Number.isNaN = function isNan(x) {
    return x !== x;
  };
}

// the if statement guards against applying the polyfill definition in ES6 browsers where it will already exist
// if it’s not already present, we define Number.isNaN(..)
// not all new features are fully polyfillable
// sometimes most of the behavior can be polyfilled, but there are still small deviations
// you should be really, really careful in implementing a polyfill yourself, to make sure you are adhering to the specification as strictly as possible
// or better yet, use an already vetted set of polyfills that you can trust, such as those provided by ES5-Shim and ES6-Shim

/* TRANSPILING */

// there’s no way to polyfill new syntax that has been added to the language
// the new syntax would throw an error in the old JS engine as unrecognized/invalid
// so the better option is to use a tool that converts your newer code into older code equivalents
// this process is commonly called “transpiling” a term for transforming + compiling
// essentially, your source code is authored in the new syntax form, but what you deploy to the browser is the transpiled code in old syntax form
// you typically insert the transpiler into your build process, similar to your code linter or your minifier

// you might wonder why you’d go to the trouble to write new syntax only to have it transpiled away to older code
// why not just write the older code directly?
// there are several important reasons you should care about transpiling:
//    the new syntax added to the language is designed to make your code more readable and maintainable
//    the older equivalents are often much more convoluted
//    you should prefer writing newer and cleaner syntax, not only for yourself but for all other members of the development team
//    if you transpile only for older browsers, but serve the new syntax to the newest browsers, you get to take advantage of browser performance optimizations with the new syntax
//    this also lets browser makers have more real-world code to test their implementations and optimizations on
//    using the new syntax earlier allows it to be tested more robustly in the real world, which provides earlier feedback to the JS committee (TC39)
//    if issues are found early enough, they can be changed/fixed before those language design mistakes become permanent

// here’s a quick example of transpiling
// ES6 adds a feature called “default parameter values”
// it looks like this:

function doSomething(a = 2) {
  console.log(a);
}

doSomething(); // 2
doSomething(42); // 42

// simple, right? Helpful, too!
// but it’s new syntax that’s invalid in pre-ES6 engines
// so what will a transpiler do with that code to make it run in older environments?

function doAnotherThing() {
  var a = arguments[0] !== void 0 ? arguments[0] : 2;
  console.log(a);
}

// as you can see, it checks to see if the arguments[0] value is void 0 (aka undefined), and if so provides the 2 default value; otherwise, it assigns whatever was passed
// in addition to being able to now use the nicer syntax even in older browsers, looking at the transpiled code actually explains the intended behavior more clearly
