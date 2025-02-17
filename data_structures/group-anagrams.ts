/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order. 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:
There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

Example 2:

Input: strs = [""]
Output: [[""]]

Example 3:

Input: strs = ["a"]
Output: [["a"]]
*/

{
  function groupAnagrams(wordList: string[]): string[][] {
    const checkedWords: Map<string, string[]> = new Map();

    for (const word of wordList) {
      const sortedWord = word.split("").sort().join("");

      if (!checkedWords.has(sortedWord)) checkedWords.set(sortedWord, [word]);
      else (checkedWords.get(sortedWord) ?? []).push(word);
    }

    return Array.from(checkedWords.values());
  }

  const myWords: string[] = ["eat", "tea", "tan", "ate", "nat", "bat"];

  console.log("Result >>", groupAnagrams(myWords));
}
