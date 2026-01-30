// @ts-nocheck

/* LEXICAL SCOPE */

// there are two predominant models for how scope works
// the first of these is by far the most common
// it’s called lexical scope, and we will examine it in depth
// the other model, which is still used by some languages
// (such as Bash scripting, some modes in Perl etc) is called dynamic scope

/* LEX-TIME */

// if you recall, the lexing process examines a string of source code characters
// and assigns semantic meaning to the tokens as a result of some stateful parsing

// it is this concept that provides the foundation to understand what lexical scope is
// and where the name comes from

// to define it somewhat circularly, lexical scope is scope that is defined at lexing time
// in other words, lexical scope is based on where variables and blocks of scope are authored, by you
// at write time, and thus is set in stone by the time the lexer processes your code

// let’s consider this block of code:
// function foo(a) {
//   var b = a * 2;

//   function bar(c) {
//     console.log(a, b, c);
//   }

//   bar(b * 3);
// }

// foo(2); // 2, 4, 12

// there are three nested scopes inherent in this code example
// it may be helpful to think about these scopes as bubbles inside of each other

// bubble 1 encompasses the global scope and has just one identifier in it: foo
// bubble 2 encompasses the scope of foo, which includes the three identifiers: a, bar, and b
// bubble 3 encompasses the scope of bar, and it includes just one identifier: c

// the structure and relative placement of these scope bubbles
// fully explains to the engine all the places it needs to look to find an identifier

// scope look-up stops once it finds the first match
// the same identifier name can be specified at multiple layers of nested scope
// which is called “shadowing” (the inner identifier “shadows” the outer identifier)
// regardless of shadowing, scope look-up always starts at the innermost scope
// being executed at the time, and works its way outward/upward until the first match, and stops

// the lexical scope look-up process only applies to first-class identifiers
// such as the a, b, and c
// if you had a reference to foo.bar.baz in a piece of code
// the lexical scope look-up would apply to finding the foo identifier
// but once it locates that variable
// object property-access rules take over to resolve the bar and baz properties, respectively
