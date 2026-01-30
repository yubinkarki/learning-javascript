// @ts-nocheck

/* ToNumber */

// if any non-number value is used in a way that requires it to be a number
// such as a mathematical operation, the ES5 spec defines the ToNumber abstract operation in section 9.3
// for example, true becomes 1 and false becomes 0
// undefined becomes NaN, but (curiously) null becomes 0

console.log(1 + true); // 2
console.log(1 + false); // 1
console.log(1 + undefined); // NaN
console.log(1 + null); // 1
console.log(1 + NaN); // NaN

// ToNumber for a string value essentially works for the most part
// like the rules/syntax for numeric literals
// if it fails, the result is NaN (instead of a syntax error as with number literals)
// one difference is that 0-prefixed octal numbers are not handled as octals
// in this operation (just as normal base-10 decimals)
// though such octals are valid as number literals

// objects (and arrays) will first be converted to their primitive value equivalent
// and the resulting value (if a primitive but not already a number)
// is coerced to a number according to the ToNumber rules

// to convert to this primitive value equivalent
// the ToPrimitive abstract operation (ES5 spec, section 9.1) will consult the value in question
// (using the internal DefaultValue operation—ES5 spec, section 8.12.8) to see if it has a valueOf() method
// if valueOf() is available and it returns a primitive value
// that value is used for the coercion
// if not, toString() will provide the value for the coercion, if present

// if neither operation can provide a primitive value, a TypeError is thrown
// as of ES5, you can create such a non-coercible object—one without valueOf() and toString()
// if it has a null value for its [[Prototype]], typically created with Object.create(null)

// we cover how to coerce to numbers later in this chapter in detail
// but for this next code snippet, just assume the Number(..) function does so

var a = {
  valueOf: function () {
    return "42";
  },
};

var b = {
  toString: function () {
    return "42";
  },
};

var c = [1, 2];

c.toString = function () {
  return this.join(""); // "12"
};

console.log(Number(a)); // 42
console.log(Number(b)); // 42
console.log(Number(c)); // 12
console.log(Number("")); // 0
console.log(Number([])); // 0
console.log(Number(["abc"])); // NaN
