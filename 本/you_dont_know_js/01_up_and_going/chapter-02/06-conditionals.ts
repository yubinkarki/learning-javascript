// @ts-nocheck

/* CONDITIONALS */

// sometimes you may find yourself writing a series of if..else..if statements like this:

if (a == 2) {
  // do something
} else if (a == 10) {
  // do another thing
} else if (a == 43) {
  // do yet another thing
} else {
  // fallback thing
}

// this structure works, but it’s a little verbose because you need to specify the a test for each case
// here’s another option, the switch statement:

switch (a) {
  case 2:
    // do something
    break;
  case 10:
    // do another thing
    break;
  case 43:
    // do yet another thing
    break;
  default:
    // fallback thing
    break;
}

// the break is important if you want only the statement(s) in one case to run
// if you omit break from a case
// and that case matches or runs
// execution will continue with the next case’s statements regardless of that case matching
// this so called “fall through” is sometimes useful/desired

switch (a) {
  case 2:
  case 10:
    // some cool stuff
    break;
  case 43:
    // other stuff
    break;
  default:
    // fallback thing
    break;
}

// here, if a is either 2 or 10, it will execute the “some cool stuff” code statements
// another form of conditional in JS is the “conditional operator” often called the “ternary operator”
// it’s like a more concise form of a single if..else statement, such as:

var num = 42;

var b = num > 41 ? "hello" : "world";

// similar to:

// if (num > 41) {
//   b = "hello";
// } else {
//   b = "world";
// }
