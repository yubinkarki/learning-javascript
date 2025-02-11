/*
Given a string s, reverse only all the vowels in the string and return it
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once

Example 1:

Input: s = "IceCreAm"
Output: "AceCreIm"

Explanation:
The vowels in s are ['I', 'e', 'e', 'A']
On reversing the vowels, s becomes "AceCreIm"

Example 2:

Input: s = "leetcode"
Output: "leotcede" 
*/

{
  function reverseVowels(stringToReverse: string): string {
    if (stringToReverse.length === 0) throw new Error("Invalid input");

    const vowelsInString: string[] = [];

    const vowels: Set<string> = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

    for (const char of stringToReverse) if (vowels.has(char)) vowelsInString.push(char);

    if (vowelsInString.length === 0) return stringToReverse;

    const reversedVowelsInString: string[] = vowelsInString.reverse();

    const letterList: string[] = Array.from(stringToReverse);

    let vowelIndex: number = 0;

    for (let i = 0; i <= letterList.length; i++) {
      if (vowels.has(letterList[i])) {
        letterList[i] = reversedVowelsInString[vowelIndex];
        vowelIndex++;
      }
    }

    return letterList.join("");
  }

  try {
    const inputString: string = "IceCreAm";

    console.log(reverseVowels(inputString));
  } catch (e) {
    console.error(e);
  }
}
