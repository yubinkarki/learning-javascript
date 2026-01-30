// @ts-nocheck

/* BLOCKS */

// we often need to group a series of statements together, which we often called a block
// in JS, a block is defined by wrapping one or more statements inside a curly-brace pair {..}

var blockAmount = 99.99;

{
  blockAmount = blockAmount * 2;
  console.log("Inside block", blockAmount);
}

// this kind of standalone block is valid, but isn't as commonly seen in JS programs
// typically, blocks are attached to some other control statement, such as an if statement or a loop

var stockAmount = 10;

// block attached to 'if' - a block does not need a semicolon to conclude it
if (stockAmount > 10) {
  stockAmount = stockAmount * 2;
  console.log("Stock amount", stockAmount);
}
