// @ts-nocheck

/* VARIABLES */

// most programs need to track a values as it changes over the course of the program, undergoing different operations as called for by your program's intended tasks
// the easiest way to do that is to assign a value to a symbolic container called a variable
// in some programming languages, you declare a variable to hold a specific type of value, such as number or string
// static typing, otherwise knows as type enforcement, is typically cited as a benefit for program correctness by preventing unintended value conversions
// other languages emphasize types for values instead of variables
// weak typing, otherwise known as dynamic typing, allows a variable to hold any type of value at any time
// it's typically cited as a benefit for program flexibility

// JS uses dynamic typing, meaning variables can hold values of any type without any type enforcement
var amount = 99.99;
amount = amount * 2;
console.log(amount);
amount = "$" + String(amount);
console.log(amount);

// another common usage of variables is for centralizing value setting

// this is more typically called constants, when you declare a variable with a value and intend for the value to now change throughout the program
var TAX_RATE = 0.08;
var newAmount = 99.99;
newAmount = newAmount * 2;
newAmount = newAmount + newAmount * TAX_RATE;
console.log(newAmount);
console.log(newAmount.toFixed(2));

// the TAX_RATE variable is only constant by convention - there's nothing special in this program that prevents it from being changed

// in ES6, we can use const keyword to declare constants
const VAT_RATE = 0.08;

// if you tried to assign  any different value to VAT_RATE after that first declaration, your program would reject the change
// this kind of "protection" against mistakes is similar to the static-typing type enforcement
