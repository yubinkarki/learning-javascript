// @ts-nocheck

/* STATEMENTS & EXPRESSIONS */

// it’s fairly common for developers to assume that
// the term“statement” and “expression” are roughly equivalent
// but, here we need to distinguish between the two
// because there are some very important differences in our JS programs

// to draw the distinction
// let’s borrow from terminology you may be more familiar with:
// the English language

// a “sentence” is one complete formation of words that expresses a thought
// it’s comprised of one or more “phrases”
// each of which can be connected with punctuation marks or conjunctions (“and”, “or”, etc.)
// a phrase can itself be made up of smaller phrases
// some phrases are incomplete and don’t accomplish much by themselves
// while other phrases can stand on their own
// these rules are collectively called the grammar of the English language

// and so it goes with JavaScript grammar
// statements are sentences, expressions are phrases, and operators are conjunctions/punctuation

// every expression in JS can be evaluated down to a single, specific value result

// for example:
var a = 3 * 6;

var b = a;
b;

// in this snippet, 3 * 6 is an expression (evaluates to the value 18)
// but a on the second line is also an expression
// as is b on the third line
// the a and b expressions both evaluate to the values stored in those variables at that moment
// which also happens to be 18

// moreover, each of the three lines is a statement containing expressions
// var a = 3 * 6 and var b = a are called “declaration statements”
// because they each declare a variable (and optionally assign a value to it)
// the a = 3 * 6 and b = a assignments (minus the vars) are called assignment expressions

// the third line contains just the expression b
// but it’s also a statement all by itself (though not a terribly interesting one!)
// as such, this is generally referred to as an “expression statement”

/* EXPRESSION SIDE EFFECTS */

// most expressions don’t have side effects
// for example:
var c = 2;
var d = c + 3;

// the expression c + 3 did not itself have a side effect
// like for instance changing c
// it had a result, which is 5, and that result was assigned to d in the statement d = c + 3

// the most common example of an expression
// with (possible) side effects is a function call expression:
function foo() {
  a = a + 1;
}

foo();

console.log("a >>", a);

// there are other side-effecting expressions, though
// for example:
var e = 42;
var f = e++;

console.log("e >>", e); // 43
console.log("f >>", f); // 42

// the expression e++ has two separate behaviors
// first, it returns the current value of e, which is 42 (which then gets assigned to f)
// but next, it changes the value of e itself, incrementing it by one
// many developers would mistakenly believe that f has value 43 just like e does
// but the confusion comes from not fully considering the when of the side effects of the ++ operator

// the ++ increment operator and the -- decrement operator are both unary operators
// which can be used in either a post-fix (“after”) position or prefix (“before”) position:
var g = 42;

console.log("g++", g++); // 42
console.log("g", g); // 43
console.log("++g", ++g); // 44
console.log("g", g); // 44

// when ++ is used in the prefix position as ++g
// its side effect (incrementing g) happens before the value is returned from the expression
// rather than after as with g++

var h = 42,
  i;
i = (h++, h); // h++ increases the value and the second h is what is assigned in i

console.log("h", h); // 43
console.log("i", i); // 43

// one last example of a side-effecting operator
// which may at once be both obvious and non-obvious, is the = assignment operator

var j;
j = 40;
console.log("j", j); // 40

// it may not seem like = in j = 40 is a side-effecting operator for the expression
// but if we examine the result value of the j = 40 statement
// it’s the value that was just assigned (40)
// so the assignment of that same value into j is essentially a side effect

// this behavior that an assignment expression (or statement) results
// in the assigned value is primarily useful for chained assignments, such as:
var k, l, m;

k = l = m = 42;

// here, m = 42 is evaluated to 42 (with the side effect of assigning 42 to m)
// then l = 42 is evaluated to 42 (with the side effect of assigning 42 to l)
// and finally k = 42 is evaluated (with the side effect of assigning 42 to k)
