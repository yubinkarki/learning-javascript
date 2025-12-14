// @ts-nocheck

/* COMPLEXITY */

// will it scale?
// this age-old question is always asked
// during the design phase of software development and comes in several flavors
// from an architectural standpoint, scalability is how easy it is to make changes to your app
// from a db standpoint, scalability is about how long it takes to save or retrieve data in the db
// for algorithms, scalability refers to how the algorithm performs
// in terms of execution time and memory usage as the input size increases

// when you’re working with a small amount of data, an expensive algorithm may still feel fast
// however, as the amount of data increases, an expensive algorithm becomes crippling
// so how bad can it get? Understanding how to quantify this is an important skill for you to know
// in this chapter, you’ll take a look at the Big O notation
// for the different levels of scalability in two dimensions: execution time and memory usage

/* TIME COMPLEXITY */

// time complexity is a measure of the time
// required to run an algorithm as the input size increases
// in this section, you’ll go through the most common time complexities & learn how to identify them

/* CONSTANT TIME */

// a constant-time algorithm has the same running time regardless of the size of the input
// consider the following:
function checkFirst(names: string[]): void {
  if (names.length > 0) console.log(names[0]);
  else console.log("no names");
}

// the number of items in names has no effect on the running time of this function
// whether the input has 10 items or 10 million items
// this function only prints the first element of the list

// as input data increases, the amount of time the algorithm takes does not change
// for brevity, programmers use a way of writing known as Big O notation
// to represent various magnitudes of time complexity
// the Big O notation for constant time is O(1)
// https://www.theknowledgeacademy.com/_files/images/Constant_Time_Complexity.png

/* LINEAR TIME */

// consider the following snippet of code:
function printNames(names: string[]): void {
  for (const name of names) console.log(name);
}

// this function prints out all the names in a list
// as the input list increases in size
// the number of iterations that the for loop makes increases by the same amount
// this behavior is known as linear time complexity
// linear time complexity is usually the easiest to understand
// as the amount of data increases, the running time increases by the same amount
// that’s why you have the straight linear graph
// the Big O notation for linear time is O(n)
// https://www.theknowledgeacademy.com/_files/images/Linear_Time_Complexity.png

/* QUADRATIC TIME */

// more commonly referred to as n squared
// this time complexity refers to an algorithm that takes time proportional to the square of the input size
// consider the following code:
function printMoreNames(names: string[]): void {
  for (const _ of names) {
    for (const name of names) console.log(name);
  }
}

// this time, the function prints out all the names in the list for every name in the list
// if you have a list with ten pieces of data, it will print the full list of ten names ten times
// that’s 100 print statements
// if you increase the input size by one, it will print the full list of eleven names eleven times
// resulting in 121 print statements
// unlike the previous function, which operates in linear time
// the n squared algorithm can quickly run out of control as the data size increases
// https://www.theknowledgeacademy.com/_files/images/Quadratic_Time_Complexity.png
// as the size of the input data increases
// the amount of time it takes for the algorithm to run increases drastically
// thus, n squared algorithms don’t perform well at scale
// the Big O notation for quadratic time is O(n²)

// note: no matter how inefficiently a linear time O(n) algorithm is written
// for a sufficiently large n
// the linear time algorithm will execute faster than a super optimized quadratic algorithm
// always
// every time

/* LOGARITHMIC TIME */

// so far, you’ve learned about the linear and quadratic time complexities
// where each element of the input is inspected at least once
// however, there are scenarios in which only a subset of the input needs to be inspected
// leading to a faster runtime
// algorithms that belong to this category of time complexity can leverage
// some shortcuts by making some assumptions about the input data

// for instance, if you had a sorted list of integers
// what’s the quickest way to find if a particular value exists?
// a naive solution would be to inspect the list from start to finish before reaching a conclusion
// the following is an example of this:
function naiveContains(targetNumber: number, numberList: number[]): boolean {
  for (const element of numberList) if (element == targetNumber) return true;
  return false;
}

// note: you might be thinking
// “hey, if the value that I’m searching for is at the beginning of the list
// then the algorithm can exit early. Isn’t that O(1) or at least better than O(n)?”
// Big O notation always tells you the worst-case scenario
// while it’s possible that the algorithm above could finish immediately
// it’s also possible that you would have to check every element
// while you might think that looking at the worst case is a pessimistic way to view the world
// it’s also very helpful because you know it can’t get any worse than that
// and once you know the worst case, you can try to improve the algorithm

// linear time is fairly good, but you can do better
// since the input list is sorted there’s an optimization you can make

// if you were checking whether the number 451 existed in the list
// the naive algorithm would have to iterate from beginning to end
// making a total of nine inspections for the nine values in the list
// however, since the list is sorted, you can, right off the bat
// drop half of the comparisons necessary by checking the middle value:
function betterNaiveContains(targetNumber: number, numberList: number[]): boolean {
  if (numberList.length == 0) return false;
  const middleIndex: number = Math.floor(numberList.length / 2);

  if (targetNumber > numberList[middleIndex]) {
    // only search in the right half of the list
    for (let i = middleIndex; i < numberList.length; i++) if (numberList[i] == targetNumber) return true;
  } else {
    for (let i = middleIndex; i >= 0; i--) if (numberList[i] == targetNumber) return true;
  }

  return false;
}

// the algorithm first checks the middle value to see how it compares with the desired value
// if the middle value is bigger than the desired value
// the algorithm won’t bother looking at the values on the right half of the list
// since the list is sorted, values to the right of the middle value can only get bigger
// in the other case, if the middle value is smaller than the desired value
// the algorithm won’t look at the left side of the list
// this optimization cuts the number of comparisons by half

// an algorithm that can repeatedly drop half of the required comparisons
// will have logarithmic time complexity
// https://www.theknowledgeacademy.com/_files/images/Logarithmic_Time_Complexity.png

// when you have an input size of 100, halving the comparisons means you save 50 comparisons
// if input size is 100,000, halving the comparisons means you save 50,000 comparisons
// the more data you have, the more the halving effect scales
// thus, you can see that the graph appears to approach horizontal

// algorithms in this category are few but extremely powerful in situations that allow for it
// the Big O notation for logarithmic time complexity is O(log n)

// note: is it log base 2, log base 10, or the natural log?
// in the above example, log base 2 applies
// however, since Big O notation only concerns itself with the shape of the performance
// the actual base doesn’t matter

/* QUASILINEAR TIME */

// another common time complexity you’ll encounter is quasilinear time
// quasilinear time algorithms perform worse than linear time
// but dramatically better than quadratic time
// you can think of quasi-linear as “kind of” like linear time for large data sets
// an example of a quasilinear time algorithm is Dart’s sort method

// the Big-O notation for quasilinear time complexity is O(n log n)
// which is a multiplication of linear and logarithmic time
// https://miro.medium.com/v2/resize:fit:1400/1*kKx4cg5-YoTEwrJL5sMWrA.png
// quasilinear time complexity nears a linear slope at higher values
// this makes it more resilient to large data sets

/* OTHER TIME COMPLEXITIES */

// the five time complexities you’ve encountered so far
// are the ones you’ll deal with in this book
// other time complexities do exist but are far less common
// and tackle more complex problems that are not covered in this book
// these time complexities include:
// - O(nᵏ): polynomial time
// - O(2ⁿ): exponential time
// - O(n!): factorial time
// and there are many more

// it’s important to note that time complexity is a high-level overview of performance
// and it doesn’t judge the speed of the algorithm beyond the general ranking scheme
// this means that two algorithms can have the same time complexity
// but one may still be much faster than the other
// for small data sets, time complexity may not be an accurate measure of actual speed

/* IMPROVING ALGORITHM PERFORMANCE */

// suppose you wrote the following code that finds the sum of numbers from 1 to n

function sumFromOneTo(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += i;
  return sum;
}

// the code loops 10000 times and returns 50005000
// it’s O(n) and will take a moment to run as it counts through the loop and prints results
// if you’re curious about how long it takes to run on your machine
// you can measure it like so:
console.time("sum");
sumFromOneTo(10000000000);
console.timeEnd("sum");

// now try the following implementation:
function betterSumFromOneTo(n: number): number {
  return (n * (n + 1)) / 2;
}

console.time("betterSum");
betterSumFromOneTo(10000000000);
console.timeEnd("betterSum");

// this version of the function uses a trick that Fredrick Gauss noticed in elementary school
// namely, you can compute the sum using simple arithmetic
// this final version of the algorithm is O(1) and tough to beat
// a constant time algorithm is always preferred
// if you ran betterSumFromOneTo in a loop, you only end up with linear time
// the previous O(n) version was just one outer loop away from slow, quadratic time

/* SPACE COMPLEXITY */

// the time complexity of an algorithm can help predict scalability
// but it isn’t the only metric
// space complexity is a measure of the memory required for an algorithm to run
// consider the following code:
function multiply(a: number, b: number): number {
  return a * b;
}

// to perform this simple algorithm Dart needs to allocate space
// for the two input parameters, a and b, as well as space for the return value
// the actual size that Dart allocates internally depends on the implementation details
// and where the code is running
// but whatever the case it’s still a fixed amount of space
// even for very large input values, the return value will just overflow
// it won’t take more space
// that means the space complexity for this algorithm is constant
// and so the Big O notation is O(1)

// however, now take a look at this example:
function fillList(length: number): string[] {
  return Array(length).fill("a");
}

// this algorithm creates a list filled with the string 'a'
// the larger length is, the longer the list will be and
// thus the more space will be required to store the list in memory
// since the space increases proportionally with the input value
// the space complexity of this algorithm is linear and the Big O notation is O(n)

// with one small change you could make that algorithm have quadratic space complexity:
function stuffList(n: number): string[] {
  return Array(length).fill("a" * n);
}

// not only do larger values for length make the list longer
// they also increase the size of the string in each element of the list
// specifying 5 for length would create a list of length 5 whose elements are 'aaaaa'
// as with quadratic time complexity, the Big O notation for quadratic space complexity is O(n²).

/* OTHER NOTATIONS */

// so far, you’ve evaluated algorithms using Big O notation
// which tells the worst case runtime
// this is by far the most common measurement that programmers evaluate with
// however, other notations exist as well:
// - Big Omega notation is used to measure the best-case runtime for an algorithm
// this isn’t as useful as Big O because getting the best case is often untenable
// - Big Theta notation is used to measure the runtime for an algorithm
// that is between the best and worse-case scenarios
