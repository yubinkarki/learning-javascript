// @ts-nocheck

/* ASSOCIATIVITY */

// so, the && and || operators bind first, then the ? : operator
// but what about multiple operators of the same precedence
// do they always process left-to-right or right-to-left?

// in general, operators are either left-associative or right-associative
// referring to whether grouping happens from the left or from the right
// it’s important to note that associativity is not the same thing as
// left-to-right or right-to-left processing

// but why does it matter whether processing is left-to-right or right-to-left?
// because expressions can have side effects, like for instance with function calls:
// var a = foo() && bar();

// here, foo() is evaluated first
// and then possibly bar() depending on the result of the foo() expression
// that definitely could result in different program behavior than if bar() was called before foo()

// but this behavior is just left-to-right processing (the default behavior in JS!)
// it has nothing to do with the associativity of &&
// in that example, since there’s only one && and thus no relevant grouping here
// associativity doesn’t even come into play

// but with an expression like a && b && c, grouping will happen implicitly
// meaning that either a && b or b && c will be evaluated first

// technically, a && b && c will be handled as (a && b) && c
// because && is left-associative (so is ||, by the way)
// however, the right-associative alternative a && (b && c) behaves observably the same way
// for the same values, the same expressions are evaluated in the same order

// so it doesn’t really matter that much that && and || are left-associative
// other than to be accurate in how we discuss their definitions

// but that’s not always the case. Some operators would behave very differently
// depending on left-associativity versus right-associativity
// consider the ? : (“ternary” or “conditional”) operator:
// a ? b : c ? d : e;

// ? : is right-associative, so which grouping represents how it will be processed?
// a ? b : (c ? d : e)
// (a ? b : c) ? d : e

// the answer is a ? b : (c ? d : e). Unlike with && and || above
// the right-associativity here actually matters, as (a ? b : c) ? d : e
// will behave differently for some (but not all!) combinations of values
// one such example:
console.log("Testing ternary", true ? false : true ? true : true); // false - right way
console.log("Testing another ternary", (true ? false : true) ? true : true); // true

// another example of right-associativity (grouping) is the = operator
// recall the chained assignment example from earlier in the chapter:
// var a, b, c;
// a = b = c = 42;

// we asserted earlier that a = b = c = 42 is processed by first evaluating the c = 42 assignment
// then b = .., and finally a = ...
// why? - because of the right-associativity
// which actually treats the statement like this: a = (b = (c = 42))

// remember our running complex assignment expression example from earlier in the chapter?

var a = 42;
var b = "foo";
var c = false;
var d = (a && b) || c ? (c || b ? a : c && b) : a; // 42

// armed with our knowledge of precedence and associativity
// we should now be able to break the code down into its grouping behavior like this:
// ((a && b) || c) ? ((c || b) ? a : (c && b)) : a

// Let’s solve it now:
//   1. (a && b) is "foo"
//   2. "foo" || c is "foo"
//   3. for the first ? test, "foo" is truthy
//   4. (c || b) is "foo"
//   5. for the second ? test, "foo" is truthy
//   6. a is 42

// that’s it, we’re done! The answer is 42, just as we saw earlier
// that actually wasn’t so hard, was it?
