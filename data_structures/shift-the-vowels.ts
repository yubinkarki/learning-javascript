/*
Replace all vowels in a sentence with the next closest vowel in the sentence itself
The last vowel should be replaced by the first vowel in the sentence

Example:

Input 1:
> Hello World

Output 1:
> Hollo Werld
*/

function changeVowel(sentenceToChange: string): string {
  if (sentenceToChange.length === 0) throw new Error("Invalid input");

  const vowels: Set<string> = new Set(["a", "e", "i", "o", "u"]);

  const vowelsInSentence: string[] = [];
  const lettersToChange: string[] = Array.from(sentenceToChange);

  // collect vowels in the sentence
  for (const char of lettersToChange) {
    if (vowels.has(char.toLowerCase())) {
      vowelsInSentence.push(char);
    }
  }

  // if no vowels are found, return the original sentence
  if (vowelsInSentence.length === 0) return sentenceToChange;

  let vowelIndex: number = 0;

  for (let i = 0; i < lettersToChange.length; i++) {
    if (vowels.has(lettersToChange[i].toLowerCase())) {
      lettersToChange[i] = vowelsInSentence[vowelIndex + 1] || vowelsInSentence[0];
      vowelIndex++;
    }
  }

  return lettersToChange.join("");
}

const mySentence = "Esophagus";

try {
  console.log(changeVowel(mySentence));
} catch (e) {
  console.error(e);
}
