/*
Write a program that takes multiple strings as input
Print the number of common letters in all the strings
The first input n represents the number of string inputs to be taken
Each subsequent input will be a string
Each input should be taken in a new line

Example:

Input 1:
> 3  
> aeiouxyz  
> aumnpez  
> nmzea  

Output 1: 3 (because 3 letters 'z, e and a' are common in the 3 strings) 
*/

// @ts-nocheck
import * as readline from "node:readline";

{
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function ask(question: string): Promise<string> {
    return new Promise<string>((resolve: (answer: string) => void) => {
    rl.question(question, (answer: string) => resolve(answer));
  });
  }

  function countCommonLetters(inputs: string[]): number {
    if (inputs.length === 0) return 0;

    let common: ReadonlySet<string> = new Set<string>(inputs[0]);

    for (let i = 1; i < inputs.length; i++) {
      const currentSet: ReadonlySet<string> = new Set<string>(inputs[i]);
      common = new Set<string>([...common].filter((ch: string) => currentSet.has(ch)));
    }

    return common.size;
  }

  async function main(): Promise<void> {
    const count: number = Number(await ask("Enter the total number of strings: ").trim());

    if (!Number.isInteger(count) || count <= 0) {
      console.log("Invalid number");
      rl.close();
      return;
    }

    const inputs: string[] = [];

    for (let i = 0; i < count; i++) {
      const value = (await ask(`Enter string ${i + 1}: `)).trim();
      inputs.push(value.trim());
    }

    console.log(`\nCommon letters count: ${countCommonLetters(inputs)}`);
    rl.close();
  }

  void main();
}
