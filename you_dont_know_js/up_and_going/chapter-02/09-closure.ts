// @ts-nocheck

/* CLOSURE */

// closure is one of the most important, and often least understood, concepts in JS
// you can think of closure as a way to “remember” and continue to access a function’s scope (its variables) even once the function has finished running

function makeAdder(x) {
  // parameter x is an inner variable

  // inner function 'add()' uses 'x', so it has a 'closure' over it
  function add(y) {
    return y + x;
  }

  return add;
}

// gets a reference to the inner 'add()' function with closure over the 'x' parameter of the outer 'makeAdder()' function
var plusOne = makeAdder(1);
var plusTen = makeAdder(10);

plusOne(5); // 5 (y) + 1 (x)
plusTen(2); // 2 (y) + 10 (x)

// when we call makeAdder(1), we get back a reference to its inner add(..) that remembers x as 1
// we call this function reference plusOne(..)
// when we call plusOne(5), it adds 5 (its inner y) to the 1 (remembered by x), and we get 6 as the result

// don’t worry if this seems strange and confusing at first—it can be!
// it’ll take lots of practice to understand it fully
// but trust me, once you do, it’s one of the most powerful and useful techniques in all of programming

/* MODULES */

// the most common usage of closure in JavaScript is the module pattern
// modules let you define private implementation details (variables, functions) that are hidden from the outside world, as well as a public API that is accessible from the outside

function User() {
  var username, password;

  function doLogin(user, pw) {
    username = user;
    password = pw;

    // rest of the login process
  }

  var publicAPI = {
    login: doLogin,
  };

  return publicAPI;
}

// create a 'User' module instance
var fred = User();

fred.login("fred", "password");

// the User() function serves as an outer scope that holds the variables username and password, as well as the inner doLogin() function
// these are all private inner details of this User module that cannot be accessed from the outside world
// we are not calling "new User()"" here, on purpose, despite the fact that probably seems more common to most readers
// User() is just a function, not a class to be instantiated, so it’s just called normally
// executing User() creates an instance of the User module — a whole new scope is created, and thus a whole new copy of each of these inner variables/functions
// we assign this instance to fred - if we run User() again, we’d get a new instance entirely separate from fred
// the inner doLogin() function has a closure over username and password, meaning it will retain its access to them even after the User() function finishes running
// publicAPI is an object with one property/method on it, login, which is a reference to the inner doLogin() function
// when we return publicAPI from User(), it becomes the instance we call fred
// at this point, the outer User() function has finished executing
// normally, you’d think the inner variables like username and password have gone away - but here they have not, because there’s a closure in the login() function keeping them alive
// that’s why we can call fred.login(..) — the same as calling the inner doLogin(..) — and it can still access username and password inner variables
// there’s a good chance that with just this brief glimpse at closure and the module pattern, some of it is still a bit confusing
// that’s OK! tt takes some work to wrap your brain around it
