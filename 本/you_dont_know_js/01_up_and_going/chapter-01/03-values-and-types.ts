// @ts-nocheck

/* VALUE AND TYPES */

// different representation of for values are called types in programming terminology
// JS has built-in types for each of the primitive values
// values that are included directly into the source code are called literals: "okay", 42, true
// beyond string/number/boolean value types
// it's common for programming languages to provide arrays, objects, functions

/* CONVERTING BETWEEN TYPES */

// conversion of one type to another, like number to string or vice versa is called coercion

// explicitly converting to a number
var fiftyTwo = "52";
var fiftyTwoNum = Number(fiftyTwo);
console.log(fiftyTwo);
console.log(fiftyTwoNum);

// if you use == loose equals operator here, JS will convert the left hand side to it's number equivalent
console.log("99.99" == 99.99);

// while designed to help you
// implicit conversion can create confusion if you haven't taken the time to learn the rules
// implicit coercion is a mechanism that should be learned by anyone wishing to take JS programming seriously
