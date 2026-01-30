// @ts-nocheck

/* OPERATORS && AND || */

// it’s quite likely that you have seen the || (“logical or”)
// and && (“logical and”) operators in most or all other languages you’ve used
// so it’d be natural to assume that they work basically the same in JS as in other similar languages
// there’s some very little known, but very important, nuance here

// in fact, I would argue these operators shouldn’t even be called “logical ___ operators”
// as that name is incomplete in describing what they do
// if I were to give them a more accurate (if more clumsy) name
// i’d call them “selector operators”, or more completely, “operand selector operators”

// why? because they don’t actually result in a logic value (aka boolean) in JS
// as they do in some other languages
// so what do they result in? They result in the value of one (and only one) of their two operands
// in other words, they select one of the two operand’s values

var a = 42;
var b = "name";
var c = undefined;

console.log("a || b", a || b); // 42
console.log("a && b", a && b); // name
console.log("c || b", c || b); // name
console.log("c && b", c && b); // undefined

// both || and && operators perform a boolean test on the first operand (a or c)
// if the operand is not already boolean, a normal ToBoolean coercion occurs
// so that the test can be performed

// for the || operator, if the test is true
// the || expression results in the value of the first operand (a or c)
// if the test is false, the || expression results in the value of the second operand (b)

// inversely, for the && operator, if the test is true
// the && expression results in the value of the second operand (b)
// if the test is false, the && expression results in the value of the first operand (a or c)

function foo(a, b) {
  const first = a || "first";
  const second = b || "second";

  console.log(`${first} ${second}`);
}

foo("oh my god", ""); // oh my god second
