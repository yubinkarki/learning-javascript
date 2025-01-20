// @ts-nocheck

/* VALUE VERSUS REFERENCE */

// in many other languages, values can either be assigned/passed by value-copy or by reference-copy depending on the syntax you use
// for example, in C++ if you want to pass a number variable into a function and have that variable’s value updated, you can declare the function parameter like int& myNum, and when you pass in a variable like x, myNum will be a reference to x
// references are like a special form of pointers, where you obtain a pointer to another variable (like an alias)
// if you don’t declare a reference parameter, the value passed in will always be copied, even if it’s a complex object

// in JS, there are no pointers, and references work a bit differently
// you cannot have a reference from one JS variable to another variable - hat’s just not possible

// a reference in JS points at a (shared) value, so if you have 10 different references, they are all always distinct references to a single shared value
// none of them are references/pointers to each other
// moreover, in JS, there are no syntactic hints that control value versus reference assignment/passing
// instead, the type of the value solely controls whether that value will be assigned by value-copy or by reference-copy

var a = 2;
var b = a; // b is always a copy of the value in "a"
b++;

console.log("Value of b", b);
console.log("Value of a", a);

var c = [1, 2, 3];
var d = c; // d is a reference to the shared value '[1, 2, 3]'
d.push(4);

console.log("Value of c", c);
console.log("Value of d", d);

// simple values (aka scalar primitives) are always assigned/passed by value-copy - null, undefined, string, number, boolean, and ES6’s symbol
// compound values—objects (including arrays, and all boxed object wrappers) and functions always create a copy of the reference on assignment or passing

// in the above snippet, because 2 is a scalar primitive, 'a' holds one initial copy of that value, and b is assigned another copy of the value
// when changing b, you are in no way changing the value in a
// but both c and d are separate references to the same shared value [1,2,3] which is a compound value
// it’s important to note that neither c nor d more “owns” the [1,2,3] value
// both are just equal peer references to the value
// so, when using either reference to modify (.push(4)) the actual shared array value itself, it’s affecting just the one shared value, and both references will reference the newly modified value [1,2,3,4]

// since references point to the values themselves and not to the variables
// you cannot use one reference to change where another reference is pointed:
var e = [1, 2, 3];
var f = e; // [1, 2, 3]

f = [4, 5, 6];

// when we make the assignment f = [4, 5, 6] we are doing absolutely nothing to affect where e is still referencing ([1,2,3])
// to do that, f would have to be a pointer to 'e' rather than a reference to the array
// but no such capability exists in JS!

// the most common way such confusion happens is with function parameters:
function foo(x) {
  x.push(4); // [1, 2, 3, 4]

  // later
  x = [4, 5, 6];
  x.push(7); // [4, 5, 6, 7]
}

foo(e);

console.log("Value of e after passing to function", e); // [1, 2, 3, 4]

// when we pass in the argument e, it assigns a copy of the e reference to x
// x and e are separate references pointing at the same [1,2,3] value
// now, inside the function, we can use that reference to mutate the value itself (push(4))
// but when we make the assignment x = [4,5,6] - this is in no way affecting where the initial reference e is pointing
// it still points at the (now modified) [1,2,3,4] value

// remember: you cannot directly control/override value copy versus reference
// those semantics are controlled entirely by the type of the underlying value

// to effectively pass a compound value (like an array) by value-copy, you need to manually make a copy of it, so that the reference passed doesn’t still point to the original
// for example:
function bar(y) {
  y.push(4); // [1, 2, 3, 4]

  y.length = 0; // empty existing array in-place
  y.push(4, 5, 6, 7); // [4, 5, 6, 7]
}

var g = [1, 2, 3];
bar(g);
console.log("Value of g after passing to function", g);

var h = [1, 2, 3];
bar(h.slice()); // creates a shallow copy
console.log("Value of h after passing to function", h);

// slice(..) with no parameters by default makes an entirely new (shallow) copy of the array
// so, we pass in a reference only to the copied array, and thus bar(..) cannot affect the contents of h

// it may occur to you that if you wanted to pass in a reference to a scalar primitive value like 2, you could just box the value in its Number object wrapper
// it is true - a copy of the reference to this Number object will be passed to the function
// but unfortunately, having a reference to the shared object is not going to give you the ability to modify the shared primitive value, like you may expect:
function incrementByOne(myNum) {
  myNum = myNum + 1;
  console.log("Value of myNum inside function", myNum); // 25
}

var numOne = 24;
var numTwo = new Number(numOne); // or equivalently 'Object(numOne)'

console.log("Value of numOne & numTwo", numOne, numTwo); // 24 [Number: 24]

incrementByOne(numTwo);
console.log("Value of numOne & numTwo after function call", numOne, numTwo); // 24 [Number: 24]

// the problem is that the underlying scalar primitive value is not mutable (same goes for String and Boolean)
// if a Number object holds the scalar primitive value 2, that exact Number object can never be changed to hold another value
// you can only create a whole new Number object with a different value
// when myNum is used in the expression myNum + 1, the underlying scalar primitive value 24 is unboxed (extracted) from the Number object automatically
// so the line myNum = myNum + 1 very subtly changes myNum from being a shared reference to the Number object, to just holding the scalar primitive value 25 as a result of the addition operation 24 + 1
// therefore, numTwo on the outside still references the original unmodified/immutable Number object holding the value 24

// references are quite powerful, but sometimes they get in your way, and sometimes you need them where they don’t exist
// the only control you have over reference versus value-copy behavior is the type of the value itself
// so you must indirectly influence the assignment/passing behavior by which value types you choose to use
