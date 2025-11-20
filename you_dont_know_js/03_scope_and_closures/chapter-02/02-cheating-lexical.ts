// @ts-nocheck

/* CHEATING LEXICAL */

// cheating lexical scope leads to poorer performance

/* EVAL */

// the eval(..) function in JS takes a string as an argument and
// treats the contents of the string as if
// it had actually been authored code at that point in the program
// in other words, you can programmatically generate code inside of your authored code
// and run the generated code as if it had been there at author time

function foo(str, a) {
  eval(str); // cheating
  console.log(a, b);
}

var b = 2;

foo("var b = 3;", 1); // 1, 3

// the string "var b = 3;" is treated, at the point of the eval(..) call
// as code that was there all along
// because that code happens to declare a new variable b
// it modifies the existing lexical scope of foo(..)
// in fact, as mentioned earlier
// this code actually creates variable b inside of foo(..)
// that shadows the b that was declared in the outer (global) scope
// when the console.log(..) call occurs
// it finds both a and b in the scope of foo(..) and never finds the outer b
// thus, we print out “1, 3” instead of “1, 2” as would have normally been the case

/* PERFORMANCE */

// the JS engine has a number of performance optimizations
// that it performs during the compilation phase
// some of these boil down to being able to essentially statically analyze the code as it lexes
// and predetermine where all the variable and function declarations are
// so that it takes less effort to resolve identifiers during execution
// but if the engine finds an eval(..) or with in the code
// it essentially has to assume that all its awareness of identifier location may be invalid
// because it cannot know at lexing time exactly what code you may pass to eval(..)
// to modify the lexical scope
// or the contents of the object you may pass to with to create a new lexical scope to be consulted
// in other words, in the pessimistic sense
// most of those optimizations it would make are pointless if eval(..) or with are present
// so it simply doesn’t perform the optimizations at all