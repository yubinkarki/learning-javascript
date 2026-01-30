// @ts-nocheck

/* 32-BIT (SIGNED) INTEGERS */

// while integers can range up to roughly 9 quadrillion safely (53 bits)
// there are some numeric operations (like the bitwise operators) that are only defined for 32-bit numbers
// so the “safe range” for numbers used in that way must be much smaller
// the range then is Math.pow(-2,31) (-2147483648, about –2.1 billion)
// up to Math.pow(2,31) - 1 (2147483647, about +2.1 billion)

// to force a number value in a to a 32-bit signed integer value, use a | 0
// this works because the | bitwise operator only works for 32-bit integer values
// (meaning it can only pay attention to 32 bits and any other bits will be lost)
// then, “or’ing” with zero is essentially a no-op bitwise speaking

var intNum = 3.9;
var convertedNum = intNum | 0; // 3

console.log("Converted number", convertedNum);

const largePositive = 9007199254740991; // larger than 32-bit signed integer range
const forcedPositive = largePositive | 0;

const largeNegative = -9007199254740991;
const forcedNegative = largeNegative | 0;

console.log("Converted large positive", forcedPositive); // -1
console.log("Converted large negative", forcedNegative); // 1

/* SPECIAL VALUES */

// there are several special values spread across the various types
// that the alert JS developer needs to be aware of, and use properly

/* THE NON-VALUE VALUES */

// for the undefined type, there is one and only one value: undefined
// for the null type, there is one and only one value: null
// so for both of them, the label is both its type and its value
// both undefined and null are often taken to be interchangeable as either “empty” values or “non” values
// other developers prefer to distinguish between them with nuance

// for example:
//  null is an empty value
//  undefined is a missing value
// or
//  undefined hasn’t had a value yet
//  null had a value and doesn’t anymore

// regardless of how you choose to “define” and use these two values
// null is a special keyword, not an identifier
// and thus you cannot treat it as a variable to assign to (why would you!?)
// however, undefined is (unfortunately) an identifier - uh oh

/* UNDEFINED */

// in non-strict mode, it’s actually possible (though incredibly ill- advised!)
// to assign a value to the globally provided undefined identifier:
function foo() {
  undefined = 2; // really bad idea!
}

foo();

function bar() {
  "use strict";
  // undefined = 2; // TypeError!
}

bar();

// in both non-strict mode and strict mode, however, you can create a local variable of the name undefined
// but again, this is a terrible idea!

function baz() {
  "use strict";
  var undefined = 4;
  console.log(undefined); // 4
}

// friends don’t let friends override undefined - ever

/* VOID OPERATOR */

// while undefined is a built-in identifier that holds (unless modified) the built-in undefined value
// another way to get this value is the void operator
// the expression void ___ “voids” out any value
// so that the result of the expression is always the undefined value
// it doesn’t modify the existing value
// it just ensures that no value comes back from the operator expression:
var a = 42;
console.log("Value of a and void a", void a, a); // undefined 42

// by convention (mostly from C-language programming)
// to represent the undefined value standalone by using void
// you’d use void 0 (though clearly even void true or any other void expression does the same thing)
// there’s no practical difference between void 0, void 1, and undefined
// but the void operator can be useful in a few other circumstances
// if you need to ensure that an expression has no result value (even if it has side effects)

function doSomething() {
  if (!true) {
    // try again later
    return void setTimeout(doSomething, 100);
  }

  var result;

  // do some other stuff
  return result;
}

// were we able to do it right away?
if (doSomething()) {
  // handle next task right away
}

// here, the setTimeout(..) function returns a numeric value
// (the unique identifier of the timer interval, if you wanted to cancel it)
// but we want to void that out so that the return value of our function
// doesn’t give a false positive with the if statement

// many devs prefer to just do these actions separately
// which works the same but doesn’t use the void operator:
function doSomethingElse() {
  if (!true) {
    // try again later
    setTimeout(doSomethingElse, 100);
    return;
  }
}
