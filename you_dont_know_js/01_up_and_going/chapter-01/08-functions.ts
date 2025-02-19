// @ts-nocheck

/* FUNCTIONS */

// your program will almost certainly want to break up the code’s tasks into reusable pieces
// instead of repeatedly repeating yourself repetitiously (pun intended!)
// the way to do that is define a function
// a function is generally a named section of code that can be “called” by name
// and the code inside it will be run each time

function printAmount() {
  console.log(amount.toFixed(2));
}

var amount = 99.999;
printAmount();
amount = amount * 2;
printAmount();

// functions can optionally take arguments (aka parameters) — values you pass in
// and they can also optionally return a value back

function printAnotherAmount(value) {
  console.log(value.toFixed(2));
}

function formatAmount() {
  return "$" + newAmount.toFixed(2);
}

var newAmount: any = 89.99;
printAnotherAmount(newAmount * 2);
newAmount = formatAmount();
console.log(newAmount);

// the function printAmount(..) takes a parameter that we call value
// the function formatAmount() returns a value
// of course, you can also combine those two techniques in the same function
// functions are often used for code that you plan to call multiple times
// but they can also be useful just to organize related bits of code into named collections

const TAX_RATE = 0.99;

function calculateFinalPrice(amt) {
  amt = amt + amt * TAX_RATE;
  return amt;
}

var pp = 9.99;
pp = calculateFinalPrice(pp);
console.log(pp.toFixed(2));
