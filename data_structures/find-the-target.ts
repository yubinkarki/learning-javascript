/* 
Find the Target

From a given string, return the number of occurrence of the target word

Example:

Input 1:
> The weather is the, nice today the.
> Target = the  

Output 1: 3  
*/

{
  function occurrence(input: string): number {
    const TARGET_WORD: string = "the";
    const PUNCTUATION: ReadonlySet<string> = new Set([";", ",", ".", "!"]);

    const tokens: string[] = input.split(" ");
    let count: number = 0;

    for (const token of tokens) {
      let cleaned: string = "";

      for (const letter of token) {
        if (!PUNCTUATION.has(letter)) cleaned += letter;
      }

      if (cleaned.toLowerCase() === TARGET_WORD) count++;
    }

    return count;
  }

  console.log(occurrence("The weather is the, the nice today the."));
}
