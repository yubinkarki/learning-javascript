// @ts-nocheck

/* WHAT IS SCOPE? */

// one of the most fundamental paradigms of nearly all programming languages
// is the ability to store values in variables
// and later retrieve or modify those values
// in fact, the ability to store values and pull values out of variables
// is what gives a program state

// without such a concept, a program could perform some tasks
// but, they would be extremely limited and not terribly interesting

// but the inclusion of variables into our program begets
// the most interesting questions we will now address:
// where do those variables live?
// in other words, where are they stored?
// and, most important, how does our program find them when it needs them?

// these questions speak to the need for a well-defined set of rules
// for storing variables in some location
// and for finding those variables at a later time
// we’ll call that set of rules: scope

// but, where and how do these scope rules get set?

/* COMPILER THEORY */

// it may be self-evident, or it may be surprising
// depending on your level of interaction with various languages
// but despite the fact that JS falls under the general category of “dynamic” or “interpreted” languages
// it is in fact a compiled language
// it is not compiled well in advance
// as are many traditionally compiled languages
// nor are the results of compilation portable among various distributed systems

// but, nevertheless, the JS engine performs many of the same steps
// albeit in more sophisticated ways than we may commonly be aware, of any traditional language compiler

// in traditional compiled-language process, a chunk of source code, your program
// will undergo typically three steps before it is executed, roughly called “compilation”:
// tokenizing/lexing, parsing and code-generation

// the JS engine is vastly more complex than just those three steps
// as are most other language compilers
// for instance, in the process of parsing and code-generation
// there are certainly steps to optimize the performance of the execution
// including collapsing redundant elements, etc

// for JS, the compilation that occurs happens, in many cases
// mere microseconds (or less!) before the code is executed
// to ensure the fastest performance
// JS engines use all kinds of tricks (like JITs, which lazy compile and even hot recompile, etc)
// that are well beyond the “scope” of our discussion here

// let’s just say, for simplicity sake, that any snippet of JavaScript has to be compiled before
// (usually right before!) it’s executed
// so, the JS compiler will take the program var a = 2;
// and compile it first, and then be ready to execute it, usually right away
