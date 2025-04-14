// @ts-nocheck

/* NATIVE PROTOTYPES */

// one of the most widely known and classic pieces of JS best practice wisdom is:
// never extend native prototypes

// whatever method or property name you come up with to add to Array.prototype that doesn’t (yet) exist
// if it’s a useful addition, well-designed, and properly named
// there’s a strong chance it could eventually end up being added to the spec
// in which case your extension is now in conflict

/* SHIMS/POLYFILLS */

// it’s usually said that the only safe place to extend a native
// is in an older (non-spec-compliant) environment
// since that’s unlikely to ever change
// new browsers with new spec features replace older browsers rather than amending them

if (!Array.prototype.foobar) {
  // silly, silly
  Array.prototype.foobar = function () {
    this.push("foo", "bar");
  };
}

// if there’s already a spec for Array.prototype.foobar
// and the specified behavior is equal to this logic
// you’re pretty safe in defining such a snippet
// and in that case it’s generally called a “polyfill” (or “shim”)

// such code is very useful to include in your code base to “patch” older browser environments
// that aren’t updated to the newest specs
// using polyfills is a great way to create predictable code across all your supported environments

// if there’s likely a coming standard
// and most discussions agree what it’s going to be called and how it will operate
// creating the ahead-of-time polyfill for future-facing standards compliance
// is called “prollyfill” (probably fill)

// some developers believe that the if guard around a polyfill/shim should include
// some form of conformance test, replacing the existing method either
// if it’s absent or fails the tests
// this extra layer of compliance testing is sometimes used to distinguish a “shim”
// (compliance tested) from a “polyfill” (existence checked)

// the only absolute takeaway is that there is no absolute right answer here
// extending natives, even when done “safely” in older environments, is not 100% safe
// the same goes for relying upon (possibly extended) natives in the presence of others’ code

/* SCRIPTS */

// most browser-viewed websites/applications have more than one file that contains their code
// and it’s common to have a few or several <script src=..></script> elements in the page
// that load these files separately, and even a few inline-code <script> .. </script> elements as well

// but do these separate files/code snippets constitute separate programs
// or are they collectively one JS program?

// the (perhaps surprising) reality is they act more like independent JS programs in most
// but not all, respects

// the one thing they share is the single global object (window in the browser)
// which means multiple files can append their code
// to that shared namespace and they can all interact

// so, if one script element defines a global function foo()
// when a second script later runs
// it can access and call foo() just as if it had defined the function itself

// but global variable scope hoisting does not occur across these boundaries
// so the following code would not work (because foo()’s declaration isn’t yet declared)
// regardless of if they are inline <script> .. </script> elements or
// externally loaded <script src=..></script> files:
// <script>foo();</script>
// <script>
// function foo() { .. }
// </script>

// but either of these would work instead:
// <script>
// foo();
// function foo() { .. }
// </script>

// Or:
// <script>
// </script>
// function foo() { .. }
// <script>foo();</script>

// also, if an error occurs in a script element (inline or external)
// as a separate standalone JS program it will fail and stop
// but any subsequent scripts will run (still with the shared global) unimpeded
