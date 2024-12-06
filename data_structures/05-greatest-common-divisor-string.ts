/*
For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t
(i.e., t is concatenated with itself one or more times)
Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"

Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"

Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""
*/

// function gcd(a: number, b: number): number {
//   return b === 0 ? a : gcd(b, a % b);
// }

// function uncommonString(firstString: string, secondString: string): string {
//   if (firstString.concat(secondString) !== secondString.concat(firstString)) return "";

//   const gcdLength: number = gcd(firstString.length ?? 0, secondString.length ?? 0);

//   return firstString.substring(0, gcdLength);
// }

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
