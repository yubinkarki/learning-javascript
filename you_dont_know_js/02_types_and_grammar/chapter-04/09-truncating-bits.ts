// @ts-nocheck

/* TRUNCATING BITS */

// there’s one more place ~ may show up in code you run across
// some developers use the double tilde ~~ to truncate the decimal part of a number
// (i.e., “coerce” it to a whole number integer)
// it’s commonly (though mistakenly) said that this is the same result as calling Math.floor(..)

// how ~~ works is that the first ~ applies the ToInt32 “coercion” and does the bitwise flip
// and then the second ~ does another bitwise flip
// flipping all the bits back to the original state
// the end result is just the ToInt32 “coercion” (aka truncation)

// however, ~~ needs some caution/clarification. First, it only works reliably on 32-bit values
// but more importantly, it doesn’t work the same on negative numbers as Math.floor(..) does!

console.log("Math.floor(-49.6)", Math.floor(-49.6)); // -50
console.log("~~(-49.6)", ~~-49.6); // -49

// setting the Math.floor(..) difference aside
// ~~x can truncate to a (32-bit) integer
// but so does x | 0, and seemingly with (slightly) less effort

// so, why might you choose ~~x over x | 0, then?
// operator precedence:
console.log(~~1e20 / 10); // 166199296
console.log(1e20 | (0 / 10)); // 1661992960
console.log((1e20 | 0) / 10); // 166199296

// just as with all other advice here, use ~ and ~~ as
// explicit mechanisms for “coercion” and value transformation
// only if everyone who reads/writes such code is properly aware of how these operators work!
