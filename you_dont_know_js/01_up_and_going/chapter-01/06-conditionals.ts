// @ts-nocheck

/* CONDITIONALS */

// there are quite a few ways we can express conditionals in our programs
// the most common one is the if statement

var bankBalance = 302.13;
var bankAmount = 99.99;

if (bankAmount < bankBalance) {
  console.log("I want to buy this phone!");
}

// the if statement requires an expression in between the parentheses that can be treated as either true or false
// you can even provide an alternative if the condition isn't true, called an else clause

const ACCESSORY_PRICE = 9.99;

var anotherBankBalance = 302.13;
var anotherAmount = 99.99;

anotherAmount = anotherAmount * 2;

if (anotherAmount < anotherBankBalance) {
  console.log("I'll take the accessory!");
  anotherAmount = anotherAmount + ACCESSORY_PRICE;
} else {
  console.log("No, thanks.");
}

// values that aren't of an expected type are often coerced to that type
// the if statement expects a boolean, but if you pass it something that's not already boolean, coercion will occur
// JS defines a list of specific values that are considered 'falsy' because when coerced to a boolean, they become false
// these include values like 0 and ""
// any other value not on the 'falsy' list is automatically 'truthy'
// conditionals exist in other forms besides the if statement
// the switch statement can be used as a shorthand for a series of if..else statements
// loops use a conditional to determine if the loop should keep going or stop
