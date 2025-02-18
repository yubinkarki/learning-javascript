// @ts-nocheck

/* DATE TO NUMBER */

// another common usage of the unary + operator is to coerce a Date object into a number
// because the result is the Unix timestamp (milliseconds elapsed since 1 January 1970 00:00:00 UTC)
// representation of the date/time value:
var d = new Date("Mon, 18 Aug 2014 08:53:06 CDT");
console.log(+d, typeof +d); // 1408369986000 number

// the most common usage of this idiom is to get the current now moment as a timestamp, such as:
console.log(+new Date(), typeof +new Date());

// but coercion is not the only way to get the timestamp out of a Date object
// a non-coercion approach is perhaps even preferable, as it’s even more explicit:
console.log("Current timestamp", new Date().getTime(), typeof new Date().getTime());

// but an even more preferable non-coercion option is to use the Date.now() static function added in ES5:
console.log("Date.now()", Date.now(), typeof Date.now());

// and if you want to polyfill Date.now() into older browsers, it’s pretty simple:
if (!Date.now) {
  Date.now = function () {
    return +new Date();
  };
}

// i’d recommend skipping the coercion forms related to dates
// use Date.now() for current now timestamps
// and new Date( .. ).get Time() for getting a timestamp of a specific non-now date/time that you need to specify
