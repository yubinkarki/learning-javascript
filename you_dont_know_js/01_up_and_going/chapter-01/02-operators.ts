// @ts-nocheck

/* OPERATORS */

var a = 2;
var b = a + 1;

// here, we assign the value 2 to the 'a' variable
// then we get the value of the 'a' variable
// add 1 to it resulting in the value 3, then store that value in the 'b' variable
// while not technically an operator, you'll need the keyword var in every program
// as it's the primary way you declare variables
// you should always declare the variable by name before you use it
// but you only need to declare a variable once for each scope;
// it can be used as many times after that as needed

a += 1;
a = a * 2;

/* COMMON OPERATORS */

// assignment: =, as in a = 2
// math: +, -, *, /, %
// compound assignment: +=, -=, *=, /=, as in a = a + 2
// increment/decrement: ++, --
// object property access: .
//   objects are values that hold other values at specific named locations called properties
//   myObj.a means an object value called myObj with a property of the name 'a'
//   properties in an object can also be accessed as myObj["a"]
// equality: ==, ===, !=, !==
// comparison: <, >, <=, >=
// logical: &&, ||
//     these operators are used to express compound conditionals, like if either a or b is true
