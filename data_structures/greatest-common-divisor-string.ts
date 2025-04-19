/*
For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t
Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2

Example:

Input 1: str1 = "ABCABC", str2 = "ABC"
Output 1: "ABC"

Input 2: str1 = "ABABAB", str2 = "ABAB"
Output 2: "AB"

Input 3: str1 = "LEET", str2 = "CODE"
Output 3: ""
*/

// function gcd(a: number, b: number): number {
//   return b === 0 ? a : gcd(b, a % b);
// }

// function uncommonString(firstString: string, secondString: string): string {
//   if (firstString.concat(secondString) !== secondString.concat(firstString)) return "";

//   const gcdLength: number = gcd(firstString.length ?? 0, secondString.length ?? 0);

//   return firstString.substring(0, gcdLength);
// }

{
  function uncommonString(firstString: string, secondString: string): string {
    if (firstString.concat(secondString) !== secondString.concat(firstString)) return "";

    if (firstString.startsWith(secondString)) {
      const modifiedString: string = firstString.slice(secondString.length);
      return modifiedString;
    }

    return "";
  }

  try {
    const myFirstString: string = "ABCABC";
    const mySecondString: string = "ABC";

    console.log(uncommonString(myFirstString, mySecondString));
  } catch (e) {
    console.error(e);
  }
}
