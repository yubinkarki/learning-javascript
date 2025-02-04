// @ts-nocheck

/* ABSTRACT VALUE OPERATIONS */

// before we can explore explicit versus implicit coercion, we need to learn the basic rules
// that govern how values become either a string,number, or boolean
// the ES5 spec in section 9 defines several“abstract operations” with the rules of value conversion
// we will specifically pay attention to ToString, ToNumber, and ToBoolean, and to a lesser extent, ToPrimitive

/* ToString */

// when any non-string value is coerced to a string representation
// the conversion is handled by the ToString abstract operation in section 9.8 of the specification
// built-in primitive values have natural stringification: null becomes "null", undefined becomes "undefined"
// and true becomes "true"
// numbers are generally expressed in the natural way you’d expect, but as we discussed in Chapter 2
// very small or very large numbers are represented in exponent form:

// multiplying "1.07" by "1000", seven times over
var a = 1.07 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000;
console.log(a.toString()); // "1.07e+21"

// for regular objects, unless you specify your own, the default toString()
// (located in Object.prototype.toString()) will return the internal [[Class]] (see Chapter 3)
// like for instance "[objectObject]"
// but as shown earlier, if an object has its own toString() method on it
// and you use that object in a string-like way, its toString() will automatically be called
// and the string result of that call will be used instead

var myObj = { a: 1, b: 2 };
console.log(myObj.toString()); // [object Object]

// arrays have an overridden default toString() that stringifies as the (string) concatenation of all its values
// (each stringified themselves) with "," in between each value:
var b = [1, 2, 3];
console.log(b.toString()); // "1,2,3"

// again, toString() can either be called explicitly
// or it will automatically be called if a non-string is used in a string context
