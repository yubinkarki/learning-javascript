// @ts-nocheck

/* LOOPS */

// repeating a set of actions until a certain condition fails - in other words, repeating only while the condition holds is the job of programming loops
// loops can take different forms, but they all satisfy this basic behavior
// a loop includes the test condition as well as a block ({..})
// each time a loop executes, it's called an iteration

var numOfCustomers = 2;

while (numOfCustomers > 0) {
  console.log("How may I help you?");

  // help the customer

  numOfCustomers = numOfCustomers - 1;
}

do {
  console.log("How may I help you?");

  // help the customer

  numOfCustomers = numOfCustomers - 1;
} while (numOfCustomers > 0);

// the only practical difference between these loops is whether the conditional is tested before the first iteration or after
// in either form, if the conditional tests as false, the next iteration will not run
// that means, if the condition is initially false, a while loop will never run, but a do..while loop will run just the first time
// sometimes you are looping for the intended purpose of counting a certain set of numbers, like from 0 to 9
// you can do that by setting a loop iteration variable like i at value 0 and incrementing it by 1 each iteration
// for a variety of historical reasons, programming languages almost always count things in a zero-based fashion
// the conditional is tested on each iteration, much as if there is an implied if statement inside the loop
// we can use the break statement to stop a loop
// also, we can observe that it's awfully easy to create a loop that would otherwise run forever without a breaking mechanism

var i = 0;

while (true) {
  if (i <= 9) {
    console.log(i);
    i = i + 1;
  } else {
    break;
  }
}

// this is not necessarily a practical form you'd want to use for you loops - it's presented here for illustration purposes only
// while a while (or do..while) can accomplish the task manually, there’s another syntactic form called a for loop for just that purpose

for (var i = 0; i <= 9; i = i + 1) {
  console.log(i);
}

// the for loop has three clauses: the initialization clause (var i=0), the conditional test clause (i <= 9), and the update clause (i = i + 1)
// there are other specialized loop forms that are intended to iterate over specific values, such as the properties of an object
