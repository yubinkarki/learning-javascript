/* 
Write a program that takes multiple numbers as an input
Return 'Yes' if the digit 0 appears anywhere in the array
Otherwise, return 'No'

The first input should be the count of the numbers to be provided
Each subsequent number will be part of the array
Each input should be provided in a new line

Example:

Input 1:
> 3  
> 1  
> 2  
> 205

Output 1:
> Yes

Input 2:
> 4  
> 1  
> 2  
> 3  
> 99

Output 2:
> No 
*/

{
  function checkForZero(numList: number[]): "Yes" | "No" {
    if (numList.length === 0) throw new Error("Invalid input");

    const digitToCheck: string = "0";
    const stringNumList: string[] = [];

    // convert each number from the input to string
    numList.forEach((item) => {
      const stringNum: string = item.toString();

      if (stringNum.length === 1) stringNumList.push(stringNum);

      if (stringNum.length > 1) {
        for (let i = 0; i < stringNum.length; i++) {
          stringNumList.push(stringNum[i]);
        }
      }
    });

    const zeroExists: boolean = stringNumList.includes(digitToCheck);

    return zeroExists ? "Yes" : "No";
  }

  // function checkForZero(numList: number[]): "Yes" | "No" {
  //   if (numList.length === 0) {
  //     throw new Error("Invalid input");
  //   }

  //   const zeroExists: boolean = numList.some((num: number) =>
  //     num.toString().includes("0")
  //   );

  //   return zeroExists ? "Yes" : "No";
  // }

  const numberList: number[] = [3231, 231, 21, 40123];

  try {
    console.log(checkForZero(numberList));
  } catch (e: unknown) {
    console.error(e);
  }
}
