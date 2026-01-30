// @ts-nocheck

/* UNDERSTANDING SCOPE */

// the way we will approach learning about scope
// is to think of the process in terms of a conversation
// but, who is having the conversation?

// let’s meet the cast of characters that interact to process the program var a = 2;
// so we understand their conversations that we’ll listen in on shortly:
// engine: responsible for start-to-finish compilation and execution of our JS program
// compiler: one of engine’s friends; handles all the dirty work of parsing and code-generation
// scope: another friend of engine; collects and maintains a look-up list of all
//  the declared identifiers (variables)
//  and enforces a strict set of rules as to how these are accessible to currently executing code

// for you to fully understand how JS works
// you need to begin to think like engine (and friends) think, ask the questions they ask
// and answer those questions the same

// when you see the program var a = 2;, you most likely think of that as one statement
// but that’s not how our new friend engine sees it
// in fact, engine sees two distinct statements
// one that Compiler will handle during compilation, and one that engine will handle during execution

// so, let’s break down how engine and friends will approach the program var a = 2;

// the first thing compiler will do with this program
// is perform lexing to break it down into tokens, which it will then parse into a tree
// but when compiler gets to code generation
// it will treat this program somewhat differently than perhaps assumed

// a reasonable assumption would be that compiler will produce code
// that could be summed up by this pseudocode:
// "allocate memory for a variable, label it a, then stick the value 2 into that variable”
// unfortunately, that’s not quite accurate

// to summarize: two distinct actions are taken for a variable assignment:
// first, compiler declares a variable (if not previously declared) in the current scope
// and second, when executing, engine looks up the variable in scope and assigns to it, if found

/* ERRORS */

// why does it matter whether we call it LHS or RHS?
// because these two types of look-ups behave differently in the circumstance
// where the variable has not yet been declared (is not found in any consulted scope)

// when the RHS look-up occurs for b the first time, it will not be found
// this is said to be an “undeclared” variable, because it is not found in the scope
// if an RHS look-up fails to ever find a variable, anywhere in the nested scopes
// this results in a ReferenceError being thrown by the engine
// it’s important to note that the error is of the type ReferenceError

// ReferenceError is scope resolution-failure related
// whereas TypeError implies that scope resolution was successful
// but that there was an illegal/impossible action attempted against the result
