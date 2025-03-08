// @ts-nocheck

/* CONTEXTUAL RULES */

// there are quite a few places in the JS grammar rules
// where the same syntax means different things depending on where/how it’s used
// this kind of thing can, in isolation, cause quite a bit of confusion

/* CURLY BRACES */

// there’s two main places that a pair of curly braces { .. } will show up in your code
// let’s take a look at each of them
// first, as an object literal

function bar() {
  console.log("bar");
}

var ok = {
  foo: bar(),
};

// how do we know this is an object literal
// because the { .. } pair is a value that’s getting assigned to a

// what happens if we remove the var a = part of the above snippet?

{
  foo: bar();
}

// a lot of developers assume that the { .. } pair is just a standalone object literal
// that doesn’t get assigned anywhere
// but it’s actually entirely different

// here, { .. } is just a regular code block
// it’s not very idiomatic in JS to have a standalone { .. } block like that
// but it’s perfectly valid JS grammar
// it can be especially helpful when combined with let block-scoping declarations

// it’s a very common belief that JSON is a proper subset of JS
// so a string of JSON (like {"a":42} — notice the quotes around the property name as JSON requires!)
// is thought to be a valid JavaScript program
// not true!
// try putting {"a":42} into your JS console, and you’ll get an error

/* BLOCKS */

// another commonly cited JS gotcha is:

console.log("[] + {}", [] + {}); // "[object Object]"
console.log("{} + []", {} + []); // 0 in the browser - "[object Object]"" in node

// on the second line, {} is interpreted as a standalone {} empty block (which does nothing)
// blocks don’t need semicolons to terminate them
// so the lack of one here isn’t a problem
// finally, + [] is an expression that explicitly coerces the [] to a number, which is the 0 value

/* OPERATOR PRECEDENCE */

// as we covered in Chapter 4, JS's version of && and || are interesting
// in that they select and return one of their operands
// rather than just resulting in true or false
// that’s easy to reason about if there are only two operands and one operator:
var a = 42;
var b = "ok";

console.log("a && b", a && b); // "ok"
console.log("a || b", a || b); // 42

// but what about when there’s two operators involved, and three operands?

var c = [1, 2, 3];

console.log("a && b || c", (a && b) || c); // ok
console.log("a || b && c", a || (b && c)); // 42

// let’s move on to a more complex example to really test your understanding:
var d = (a && b) || c ? (c || b ? a : c && b) : a;

console.log("(a && b) || c ? (c || b ? a : c && b) : a", d); // 42

// ok, evil, i admit it
// no one would write a string of expressions like that, right?
// probably not, but we’re going to use it to examine various issues
// around chaining multiple operators together, which is a very common task

/* SHORT CIRCUITED */

// for both && and || operators
// the right-hand operand will not be evaluated if the left-hand operand is sufficient
// to determine the outcome of the operation
// hence, the name “short circuited” (in that if possible, it will take an early shortcut out)

// for example, with a && b, b is not evaluated if a is falsy
// because the result of the && operand is already certain
// so there’s no point in bothering to check b. Likewise, with a || b, if a is truthy
// the result of the operand is already certain, so there’s no reason to check b

// this short circuiting can be very helpful and is commonly used:
function doSomething(opts) {
  if (opts && opts.cool) {
    // ..
  }
}

// The opts part of the opts && opts.cool test acts as sort of a guard
// because if opts is unset (or is otherwise not an object)
// the expression opts.cool would throw an error
// the opts test failing plus the short circuiting means that opts.cool won’t even be evaluated
// thus no error!

// similarly, you can use || short circuiting:
function doSomethingElse(opts) {
  if (opts.cache || primeCache()) {
    // ..
  }
}

// here, we’re checking for opts.cache first, and if it’s present
// we don’t call the primeCache() function, thus avoiding potentially unnecessary work.

/* TIGHTER BINDING */

// but let’s turn our attention back to that earlier complex statement example
// with all the chained operators, specifically the ? : ternary operator parts
// does the ? : operator have more or less precedence than the && and || operators?
// is that more like this?
// a && b || (c ? c || (b ? a : c) && b : a)
// or more like this?
// (a && b || c) ? (c || b) ? a : (c && b) : a

// the answer is the second one - but why?
// because && is more precedent than ||, and || is more precedent than ? :
// so, the expression (a && b || c) is evaluated first before the ? : it participates in
// another way this is commonly explained is that && and || “bind more tightly” than ? :
