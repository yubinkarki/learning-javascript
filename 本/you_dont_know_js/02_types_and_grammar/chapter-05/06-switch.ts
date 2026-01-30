// @ts-nocheck

/* SWITCH */

// let’s briefly explore the switch statement
// a sort-of syntactic short‐hand for an if..else if..else statement chain:
// switch (a) {
//   case 2:
//     // do something
//     break;
//   case 42:
//     // do another thing
//     break;
//   default:
//   // fallback to here
// }

// as you can see, it evaluates a once
// then matches the resulting value to each case expression (just simple value expressions here)
// if a match is found, execution will begin in that matched case
// and will either go until a break is encountered or until the end of the switch block is found

// that much may not surprise you
// but there are several quirks about switch you may not have noticed before

// first, the matching that occurs between the a expression
// and each case expression is identical to the === algorithm
// often times switches are used with absolute values in case statements as shown above
// so strict matching is appropriate

// however, you may wish to allow coercive equality
// and to do so you’ll need to sort of “hack” the switch statement a bit:
var a = "42";

switch (true) {
  case a == 10:
    console.log("10 or '10'");
    break;
  case a == 42:
    console.log("42 or '42'");
    break;
  default:
  // never gets here
} // 42 or '42'

// this works because the case clause can have any expression (not just simple values)
// which means it will strictly match that expression’s result to the test expression (true)
// since a == 42 results in true here, the match is made

// despite ==, the switch matching itself is still strict, between true and true here
// if the case expression resulted in something that was truthy but not strictly true
// it wouldn’t work
// this can bite you if you’re for instance using a “logical operator”
// like || or && in your expression:
var b = "hello world";
var c = 10;

switch (true) {
  case b || c == 10:
    // never gets here
    break;
  default:
    console.log("Sad");
} // Sad

// since the result of (a || b == 10) is "hello world" and not true the strict match fails
// in this case, the fix is to force the expression explicitly to be a true or false
// such as case !!(a || b == 10)

// lastly, the default clause is optional
// and it doesn’t necessarily have to come at the end (although that’s the strong convention)
// even in the default clause
// the same rules apply about encountering a break or not:

switch (c) {
  case 1:
  case 2:
  // never gets here
  default:
    console.log("default");
  case 3:
    console.log("3");
    break;
  case 4:
    console.log("4");
} // default 3

// the way this snippet processes is that it passes through all the case clause matching first
// finds no match, then goes back up to the default clause and starts executing
// since there’s no break there, it continues executing in the already skipped over case 3 block,
// before stopping once it hits that break
