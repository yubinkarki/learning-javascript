/*
String Shuffle Matcher

Given a list of words and a target string
Determine if the target string can be formed by shuffling the letters of any word in the list
Each letter in the target string must match exactly with a letter from one of the words in the list

Example:

Input 1:
Words List: ["apple", "orange", "banana", "grape"]
Target String: "aeppl"

Output 1:
Match Found: "apple"

Explanation:
The target string aeppl is a shuffled version of the word apple in the list
*/

{
  function findWord(target: string, words: string[]) {
    if (!target || !words) throw new Error("Invalid input");

    const targetWordCount: Record<string, number> = {};

    for (const letter of target) targetWordCount[letter] = (targetWordCount[letter] || 0) + 1;

    const targetWordKeys: string[] = Object.keys(targetWordCount);

    const filteredList: Record<string, number>[] = words.map((item) => {
      const itemCount = {};

      for (let i = 0; i < item.length; i++) itemCount[item[i]] = (itemCount[item[i]] || 0) + 1;

      return itemCount;
    });

    const findWordIndex: number = filteredList.findIndex((item) => {
      const itemKeys: string[] = Object.keys(item);

      if (itemKeys.length !== targetWordKeys.length) return false;

      return itemKeys.every((key: string) => Object.hasOwn(targetWordCount, key) && item[key] === targetWordCount[key]);
    });

    return findWordIndex === -1 ? "Match not found" : `Match found: ${words[findWordIndex]}`;
  }

  const targetWord = "aeppl";
  const wordList: string[] = ["apple", "banana", "grape"];

  console.log(findWord(targetWord, wordList));
}
