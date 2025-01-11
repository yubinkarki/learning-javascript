// @ts-nocheck

/* ZEROS */

// while it may confuse the mathematics-minded reader, JS has both a normal zero 0 (otherwise known as a positive zero +0) and a negative zero -0
// before we explain why the -0 exists, we should examine how JS handles it, because it can be quite confusing
// besides being specified literally as -0, negative zero also results from certain mathematic operations

// for example:
var a = 0 / -3; // -0
var b = 0 * -3; // -0
var c = 0;

// addition and subtraction cannot result in a negative zero
// a negative zero when examined in the developer console will usually reveal -0, though that was not the common case until fairly recently, so some older browsers you encounter may still report it as 0
// however, if you try to stringify a negative zero value, it will always be reported as "0", according to the spec:
console.log(String(a)); // "0"
console.log(a + ""); // "0"
console.log(a.toString()); // "0"

// strangely, even JSON gets in on the deception:
console.log(JSON.stringify(a)); // "0"

// interestingly, the reverse operations (going from string to number) don’t lie:
console.log(typeof Number("-0")); // -0 number
console.log(+"-0"); // -0 number
console.log(JSON.parse("-0")); // -0 number

// in addition to stringification of negative zero being deceptive to hide its true value, the comparison operators are also (intentionally) configured to lie:
console.log("a == c", a == c); // true
console.log("-0 == 0", -0 == 0); // true
console.log("-0 > 0", -0 > 0); // false

// clearly, if you want to distinguish a -0 from a 0 in your code, you can’t just rely on what the developer console outputs, so you’re going to have to be a bit more clever:
function isNegZero(n) {
  n = Number(n);
  return n === 0 && 1 / n === -Infinity;
}

console.log("Checking for 0", isNegZero(0)); // false
console.log("Checking for -0", isNegZero(-0)); // true

/* SPECIAL EQUALITY */

// as we saw above, the NaN value and the -0 value have special behavior when it comes to equality comparison
// NaN is never equal to itself, so you have to use ES6’s Number.isNaN(..)
// similarly, -0 lies and pretends that it’s equal (even === strict equal) to regular 0, so you have to use the somewhat hackish isNegZero(..) utility we suggested above

// as of ES6, there’s a new utility that can be used to test two values for absolute equality, without any of these exceptions
// it’s called Object.is(..):
var d = 2 / "foo"; // NaN
var e = -3 * 0; // -0

console.log("Checking d", Object.is(d, NaN)); // true
console.log("Checking e for -0", Object.is(e, -0)); // true
console.log("Checking e for 0", Object.is(e, 0)); // false

// there’s a pretty simple polyfill for Object.is(..) for pre-ES6 environments:
if (!Object.is) {
  Object.is = function (n1, n2) {
    // test for -0
    if (n1 === 0 && n2 === 0) {
      return 1 / n1 === 1 / n2;
    }

    // test for NaN
    if (n1 !== n1) {
      return n2 !== n2;
    }

    // everything else
    return n1 === n2;
  };
}

// Object.is(..) probably shouldn’t be used in cases where == or === are known to be safe, as the operators are likely much more efficient and certainly are more idiomatic/common
// Object.is(..) is mostly for these special cases of equality
