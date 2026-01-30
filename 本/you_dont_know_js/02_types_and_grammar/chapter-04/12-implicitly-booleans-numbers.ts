// @ts-nocheck

/* IMPLICITLY: BOOLEANS --> NUMBERS */

// i think a case where implicit coercion can really shine is
// in simplifying certain types of complicated boolean logic into simple numeric addition
// of course, this is not a general-purpose technique
// but a specific solution for specific cases

function onlyOne(a, b, c) {
  var firstCheck = !!(a && !b && !c);
  var secondCheck = !!(!a && b && !c);
  var thirdCheck = !!(!a && !b && c);

  return firstCheck || secondCheck || thirdCheck;
}

console.log(onlyOne(true, false, false)); // true
console.log(onlyOne(false, true, false)); // true
console.log(onlyOne(true, true, false)); // false

// this onlyOne(..) utility should only return true if exactly one of the arguments is truthy
// it’s using implicit coercion on the truthy checks and explicit coercion on the others
// including the final return value

// but what if we needed that utility to be able to handle four, five, or twenty flags in the same way?
// it’s pretty difficult to imagine implementing code that would handle all those permutations of comparisons

// but here’s where coercing the boolean values to numbers (0 or 1) can greatly help:
function findOne() {
  console.log(arguments, typeof arguments);
  var sum = 0;

  for (var i = 0; i <= arguments.length; i++) {
    if (arguments[i]) sum += arguments[i]; // + coerces boolean to number
  }

  return sum == 1;
}

function findMe(...rest) {
  console.log(rest, typeof rest);
}

findMe(1, 2, "ok", ["a", "b"]);

console.log("Calling findOne >>", findOne(false, false, true, false));

// what we’re doing here is relying on the 1 for true/truthy coercions
// and numerically adding them all up
// sum += arguments[i] uses implicit coercion to make that happen
// if one and only one value in the arguments list is true
// then the numeric sum will be 1, otherwise the sum will not be 1 and thus the desired condition is not met

/* IMPLICITLY: * --> BOOLEAN */

// remember, implicit coercion is what kicks in when you use a value in such a way
// that it forces the value to be converted. For numeric and string operations
// it’s fairly easy to see how the coercions can occur
// but, what sort of expression operations require/force (implicitly) a boolean coercion?
//  1. the test expression in an if (..) statement
//  2. the test expression (second clause) in a for ( .. ; .. ; .. ) header
//  3. the test expression in while and do while loops
//  4. the test expression in a ternary operation
//  5. The left-hand operand to the || (“logical or”) and && (“logical and”) operators

// any value used in these contexts that is not already a boolean
// will be implicitly coerced to a boolean
// using the rules of the ToBoolean abstract operation

var a = 42;
var b = "abc";
var c;
var d = null;

if (a) console.log("yep");

while (c) console.log("never runs");

c = d ? a : b;
console.log(c); // "abc"

if ((a && d) || c) console.log("yep");

// in all these contexts
// the non-boolean values are implicitly coerced to their boolean equivalents to make the test decisions
