// @ts-nocheck

/* SYMBOL COERCION */

// up to this point, there’s been almost no observable outcome difference
// between explicit and implicit coercion
// only the readability of code has been at stake

// but ES6 Symbols introduce a gotcha into the coercion system
// that we need to discuss briefly
// for reasons that go well beyond the scope of what we’ll discuss in this book
// explicit coercion of a symbol to a string is allowed
// but implicit coercion of the same is disallowed and throws an error

var s1 = Symbol("ok");
console.log(String(s1)); // "Symbol(ok)"

var s2 = Symbol("no");
// console.log(s2 + ""); // TypeError: Cannot convert a Symbol value to a string

// symbol values cannot coerce to number at all (throws an error either way)
// but strangely they can both explicitly and implicitly coerce to boolean (always true)

// consistency is always easier to learn
// and exceptions are never fun to deal with
// but we just need to be careful around the new ES6 symbol values and how we coerce them

// the good news: it’s probably going to be exceedingly rare for you to need to coerce a symbol value
// the way they’re typically used (see Chapter 3) will probably not call for coercion on a normal basis
