// @ts-nocheck

/* STRICT MODE */

// ES5 added a “strict mode” to the language, which tightens the rules for certain behaviors
// generally, these restrictions are seen as keeping the code to a safer and more appropriate set of guidelines
// also, adhering to strict mode makes your code generally more optimizable by the engine
// you can opt in to strict mode for an individual function, or an entire file, depending on where you put the strict mode pragma

function foo() {
  "use strict";

  // this code is strict mode

  function bar() {
    // this code is strict mode
  }
}

// this code is not strict mode

// compare that to:

("use strict");

function baz() {
  // this code is strict mode

  function paz() {
    // this code is strict mode
  }
}

// this code is strict mode

// one key difference (improvement!) with strict mode is disallowing the implicit auto-global variable declaration from omitting the var:

function tryOut() {
  "use strict";
  a = 1; // 'var' missing, ReferenceError
}

tryOut();

// if strict mode causes issues in your program, it’s almost certainly a sign that you have things in your program you should fix
