// @ts-nocheck

/* NON-JAVASCRIPT */

// so far, the only things we’ve covered are in the JS language itself
// the reality is that most JS is written to run in and interact with environments like browsers
// a good chunk of the stuff that you write in your code is, strictly speaking, not directly controlled by JS
// that probably sounds a little strange

// the most common non-JavaScript JavaScript you’ll encounter is the DOM API
// for example:

var el = document.getElementById("foo");

// the document variable exists as a global variable when your code is running in a browser
// it’s not provided by the JS engine, nor is it particularly controlled by the JS specification
// it takes the form of something that looks an awful lot like a normal JS object, but it’s not really exactly that
// it’s a special object, often called a “host object”
// moreover, the getElementByID(..) method on document looks like a normal JS function, but it’s just a thinly exposed interface to a built-in method provided by the DOM from your browser
// in some (newer-generation) browsers, this layer may also be in JS, but traditionally the DOM and its behavior is implemented in something more like C/C++

// another example is with input/output (I/O)
// everyone’s favorite alert(..) pops up a message box in the user’s browser window
// alert(..) is provided to your JS program by the browser, not by the JS engine itself
// the call you make sends the message to the browser internals and it handles drawing and displaying the message box
// the same goes with console.log(..); your browser provides such mechanisms and hooks them up to the developer tools
// this book, and this whole series, focuses on JS the language
// that’s why you don’t see any substantial coverage of these non-JavaScript JavaScript mechanisms
// nevertheless, you need to be aware of them, as they’ll be in every JS program you write!
