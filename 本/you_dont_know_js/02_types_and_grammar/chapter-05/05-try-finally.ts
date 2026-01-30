// @ts-nocheck

/* TRY..FINALLY */

// you’re probably familiar with how the try..catch block works
// but have you ever stopped to consider the finally clause that can be paired with it?
// in fact, were you aware that try only requires either catch or finally
// though both can be present if needed?

// the code in the finally clause always runs (no matter what)
// and it always runs right after the try (and catch if present) finish
// before any other code runs
// in one sense, you can kind of think of the code in a finally clause
// as being in a callback function
// that will always be called regardless of how the rest of the block behaves

// so what happens if there’s a return statement inside a try clause?
// it obviously will return a value, right?
// but does the calling code that receives that value run before or after the finally?

function foo() {
  try {
    return 42;
  } finally {
    console.log("Hello from finally foo");
  }

  console.log("After try"); // unreachable
}

// console.log(foo()); // finally runs first

// the return 42 runs right away, which sets up the completion value from the foo() call
// this action completes the try clause and the finally clause immediately runs next
// only then is the foo() function complete
// so that its completion value is returned back for the console.log(..) statement to use

// the exact same behavior is true of a throw inside try:
function bar() {
  try {
    throw 42;
  } finally {
    console.log("Hello from finally bar");
  }
}

// console.log(bar()); // finally runs first

// now, if an exception is thrown (accidentally or intentionally) inside a finally clause
// it will override as the primary completion of that function
// if a previous return in the try block had set a completion value for the function
// that value will be abandoned:
function baz() {
  try {
    return 42;
  } finally {
    throw "Oops!";
  }
}

// console.log(baz());

// it shouldn’t be surprising that other nonlinear control statements like
// continue and break exhibit similar behavior to return and throw:
for (var i = 0; i < 10; i++) {
  try {
    continue;
  } finally {
    console.log(i);
  }
}

// the console.log(i) statement runs at the end of the loop iteration
// which is caused by the continue statement
// however, it still runs before the i++ iteration update statement
// which is why the values printed are 0..9 instead of 1..10

// a return inside a finally has the special ability
// to override a previous return from the try or catch clause
// but only if return is explicitly called:
function goo() {
  try {
    return 42;
  } finally {
    // no 'return' here, so no override
  }
}

function gar() {
  try {
    return 42;
  } finally {
    return;
  }
}

function gaz() {
  try {
    return 42;
  } finally {
    return "Hello";
  }
}

console.log(goo()); // 42
console.log(gar()); // undefined
console.log(gaz()); // Hello
