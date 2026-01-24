// @ts-nocheck

/* GARBAGE COLLECTION */

// another reason block-scoping is useful relates to closures
// and garbage collection to reclaim memory

// function process(data) {
//   // do something interesting
// }

// var someReallyBigData = { .. };

// process(someReallyBigData);

// var btn = document.getElementById("my_button");
// btn.addEventListener(
//   "click",
//   function click(evt) {
//     console.log("button clicked");
//   },
//   /*capturingPhase=*/ false
// );

// the click function click handler callback doesn’t need the
// someReallyBigData variable at all
// that means, theoretically, after process(..) runs
// the big memory-heavy data structure could be garbage collected
// however, it’s quite likely (though implementation dependent)
// that the JS engine will still have to keep the structure around
// since the click function has a closure over the entire scope

// block-scoping can address this concern
// making it clearer to the engine that it does not need to keep someReallyBigData around:
// function process(data) {
//   // do something interesting
// }

// {
//   // anything declared inside this block can go away after!
//   let someReallyBigData = { .. };
//   process(someReallyBigData);
// }

// var btn = document.getElementById("my_button");
// btn.addEventListener(
//   "click",
//   function click(evt) {
//     console.log("button clicked");
//   },
//   /*capturingPhase=*/ false
// );

// declaring explicit blocks for variables to locally bind to
// is a powerful tool that you can add to your code toolbox
