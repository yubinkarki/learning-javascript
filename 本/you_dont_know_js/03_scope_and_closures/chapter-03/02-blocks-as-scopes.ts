// @ts-nocheck

/* BLOCKS AS SCOPES */

// while functions are the most common unit of scope
// and certainly the most widespread of the design approaches
// in the majority of JS in circulation, other units of scope are possible
// and the usage of these other scope units can lead to even better, cleaner to maintain code

// but even if you’ve never written a single line of code in block-scoped fashion
// you are still probably familiar with this extremely common idiom in JavaScript:
for (var i = 0; i <= 10; i++) console.log(i);

// we declare the variable i directly inside the for loop head
// most likely because our intent is to use i only within the context of that for loop
// and essentially ignore the fact that
// the variable actually scopes itself to the enclosing scope (function or global)
// that’s what block-scoping is all about. Declaring variables as close as possible
// as local as possible, to where they will be used
// another example:
// var foo = true;

// if (foo) {
//   var bar = foo * 2;
//   bar = something(bar);
//   console.log(bar);
// }

// we are using a bar variable only in the context of the if statement
// so it makes a kind of sense that we would declare it inside the if block
// however, where we declare variables is not relevant when using var
// because they will always belong to the enclosing scope
// this snippet is essentially fake block-scoping, for stylistic reasons
// and relying on self-enforcement not to accidentally use bar in another place in that scope

/* LET */

// thus far, we’ve seen that JS only has some strange niche behaviors
// that expose block scope functionality
// if that were all we had, and it was for many, many years
// then block scoping would not be terribly useful to the JS developer
// fortunately, ES6 changes that, and introduces a new keyword let
// which sits alongside var as another way to declare variables

// the let keyword attaches the variable declaration to the scope of
// whatever block (commonly a { .. } pair) it’s contained in
// in other words, let implicitly hijacks any block’s scope for its variable declaration

// var foo = true;

// if (foo) {
//   let bar = foo * 2;
//   bar = something(bar);
//   console.log(bar);
// }

// console.log(bar); // ReferenceError

// using let to attach a variable to an existing block is somewhat implicit
// it can confuse if you’re not paying close attention
// to which blocks have variables scoped to them and are in the habit of moving blocks around
// wrapping them in other blocks, etc as you develop and evolve code

// creating explicit blocks for block-scoping can address some of these concerns
// making it more obvious where variables are attached and not
// usually, explicit code is preferable over implicit or subtle code

// var foo = true;

// if (foo) {
//   {
//     // <-- explicit block
//     let bar = foo * 2;
//     bar = something(bar);
//     console.log(bar);
//   }
// }

// console.log(bar); // ReferenceError

// we can create an arbitrary block for let to bind to by
// simply including a { .. } pair anywhere a statement is valid grammar
// in this case, we’ve made an explicit block inside the if statement
// which may be easier as a whole block to move around later in refactoring
// without affecting the position and semantics of the enclosing if statement

// declarations made with let
// will not hoist to the entire scope of the block they appear in
// such declarations will not observably “exist” in the block until the declaration statement

// {
//   console.log(bar); // ReferenceError!
//   let bar = 2;
// }
