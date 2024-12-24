// @ts-nocheck

/* INTO YDKJS */

// what is this series all about?
// put simply, it’s about taking seriously the task of learning all parts of JS
// not just some subset of the language that someone called “the good parts” and not just whatever minimal amount you need to get your job done at work
// serious developers in other languages expect to put in the effort to learn most or all of the language(s) they primarily write in
// but JS developers seem to stand out from the crowd in the sense of typically not learning very much of the language
// this is not a good thing, and it’s not something we should continue to allow to be the norm

// the You Don’t Know JS (YDKJS) series stands in stark contrast to the typical approaches to learning JS, and is unlike almost any other JS books you will read
// it challenges you to go beyond your comfort zone and to ask the deeper “why” questions for every single behavior you encounter
// are you up for that challenge?

// I’m going to use this final chapter to briefly summarize what to expect from the rest of the books in the series, and how to most effectively go about building a foundation of JS learning on top of YDKJS

/* SCOPES & CLOSURES */

// perhaps one of the most fundamental things you’ll need to quickly come to terms with is how scoping of variables really works in JS
// it’s not enough to have anecdotal fuzzy beliefs about scope
// the Scope & Closures title starts by debunking the common misconception that JS is an “interpreted language” and therefore not compiled
// the JS engine compiles your code right before (and sometimes during!) execution
// so we use some deeper understanding of the compiler’s approach to our code to understand how it finds and deals with variable and function declarations
// along the way, we see the typical metaphor for JS variable scope management, “hoisting”
// this critical understanding of “lexical scope” is what we then base our exploration of closure on for the last chapter of the book
// closure is perhaps the single most important concept in all of JS, but if you haven’t first grasped firmly how scope works, closure will likely remain beyond your grasp

/* this & OBJECT PROTOTYPES */

// perhaps one of the most widespread and persistent mistruths about JS is that the this keyword refers to the function it appears in
// the this keyword is dynamically bound based on how the function in question is executed, and it turns out there are four simple rules to understand and fully determine this binding
// closely related to the this keyword is the object prototype mechanism, which is a look-up chain for properties, similar to how lexical scope variables are found
// but wrapped up in the prototypes is the other huge miscue about JS: the idea of emulating (fake) classes and (so-called “prototypal”) inheritance
// unfortunately, the desire to bring class and inheritance design pattern thinking to JS is just about the worst thing you could try to do
// because while the syntax may trick you into thinking there’s something like classes present, in fact the prototype mechanism is fundamentally opposite in its behavior
// what’s at issue is whether it’s better to ignore the mismatch and pretend that what you’re implementing is “inheritance” or whether it’s more appropriate to learn and embrace how the object prototype system actually works
// the latter is more appropriately named “behavior delegation”

/* TYPES & GRAMMAR */

// the third title in this series primarily focuses on tackling yet another highly controversial topic: type coercion
// perhaps no topic causes more frustration with JS developers than when you talk about the confusions surrounding implicit coercion
// by far, the conventional wisdom is that implicit coercion is a “bad part” of the language and should be avoided at all costs
// in fact, some have gone so far as to call it a “flaw” in the design of the language
// indeed, there are tools whose entire job is to do nothing but scan your code and complain if you’re doing anything even remotely like coercion
// but is coercion really so confusing, so bad, so treacherous, that your code is doomed from the start if you use it?
// i say no - after having built up an understanding of how types and values really work in chapters 1-3, chapter 4 takes on this debate and fully explains how coercion works, in all its nooks and crevices

/* ASYNC & PERFORMANCE */

//tThe first three titles of this series focus on the core mechanics of the language, but the fourth title branches out slightly to cover patterns on top of the language mechanics for managing asynchronous programming
// asynchrony is not only critical to the performance of our applications, it’s increasingly becoming the critical factor in writability and maintainability
// the book starts first by clearing up a lot of terminology and concept confusion around things like “async”, “parallel” and “concurrent” and explains in depth how such things do and do not apply to JS
// then we move into examining callbacks as the primary method of enabling asynchrony
// but it’s here that we quickly see that the callback alone is hopelessly insufficient for the modern demands of asynchronous programming
// we identify two major deficiencies of callbacks-only coding: Inversion of Control (IoC) trust loss and lack of linear reason-ability
// to address these two major deficiencies, ES6 introduces two new mechanisms (and indeed, patterns): promises and generators

/* ES6 & BEYOND */

// no matter how much you feel you’ve mastered JS to this point, the truth is that JS is never going to stop evolving, and moreover, the rate of evolution is increasing rapidly
// since ES6 is nearly complete at the time of this writing, ES6 & Beyond starts by dividing up the concrete stuff from the ES6 landscape into several key categories, including new syntax, new data structures (collections), and new processing capabilities and APIs
// some exciting ES6 things to look forward to reading about: destructuring, default parameter values, symbols, concise methods, computed properties, arrow functions, block scoping, promises, generators, iterators, modules, proxies, weakmaps, and much, much more!
// phew, ES6 packs quite a punch!
