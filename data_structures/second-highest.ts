/*
From an array of numbers, return the 2nd highest number

Example:

Input 1: [12, 14, 15, 9, 100]  
Output 1: 15 
*/

{
  function secondHighest(numberList: number[]): number | undefined {
    let highest: number = 0;
    const sortedList: number[] = [];

    for (let _ = 0; _ < numberList.length; _++) {
      for (const i of numberList) {
        if (i > highest && !sortedList.includes(i)) highest = i;
      }

      sortedList.push(highest);
      highest = 0;
    }

    return sortedList[1];
  }

  function optimizedSecondHighest(numList: number[]): number | undefined {
    let max: number = -Infinity;
    let second: number = -Infinity;

    for (const n of numList) {
      if (n > max) {
        second = max;
        max = n;
      } else if (n < max && n > second) {
        second = n;
      }
    }

    return second === -Infinity ? undefined : second;
  }

  console.log(secondHighest([5, 3, 21, 56, 37, 12]));
}
