/*
Write a program that takes a string as input
Print either the encoded or decoded string
Logic is provided with the question

Encoding:  
Encoded string will only have characters and no digits
Replace N consecutively repeated letters with the number N+2 followed by the letter (case sensitive)

Decoding:  
Decoded string will have both characters and digits
It will reverse the encoding logic

Example:

Input 1 (Encoding): AAAAAAaaaXMMMMMMMMMMMM
Output 1: 8A5a3X14M

Input 2 (Decoding): 8A5a3X14M
Output 2: AAAAAAaaaXMMMMMMMMMMMM
*/

{
  function encoder(textToEncode: string): string {
    const individualLetters: string[] = textToEncode.split("");

    let countList: number[] = [];
    let encodedList: string[] = [];
    let newCountList: string[] = [];
    let uniqueLetters: string[] = [];

    for (const char of individualLetters) {
      if (!uniqueLetters.includes(char)) uniqueLetters.push(char);
    }

    for (const letter of uniqueLetters) {
      const count: number = textToEncode.split(letter).length - 1;
      countList.push(count);
    }

    for (const value of countList) newCountList.push(String(value + 2));

    for (let i: number = 0; i < newCountList.length; i++) encodedList.push(newCountList[i] + uniqueLetters[i]);

    return encodedList.join("");
  }

  function optimizedEncoder(textToEncode: string): string {
    const order: string[] = [];
    const counts: Map<string, number> = new Map();

    for (const char of textToEncode) {
      if (!counts.has(char)) {
        counts.set(char, 1);
        order.push(char);
      } else counts.set(char, counts.get(char)! + 1);
    }

    return order.map((item: string): string => `${counts.get(item)! + 2}${item}`).join("");
  }

  const inputOne = "AAAAAAaaaXMMMMMMMMMMMMSSSDDFFAAeeeRRRR";

  console.time("encoder");
  const result: string = encoder(inputOne);
  console.timeEnd("encoder");

  console.time("optimizedEncoder");
  const optimizedResult: string = optimizedEncoder(inputOne);
  console.timeEnd("optimizedEncoder");

  function decoder(textToDecode: string): string {
    let mixedList: string[] = [];
    const contentList: (number | string)[] = [];
    const numbersList: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    let i: number = 0;

    while (i < textToDecode.length) {
      const currentChar: string = textToDecode[i];
      const nextChar: string = textToDecode[i + 1];

      if (numbersList.includes(currentChar)) {
        // check if next char is also a number (2-digit case)
        if (nextChar && numbersList.includes(nextChar)) {
          const joinedNumber: number = parseInt(currentChar + nextChar, 10);
          contentList.push(joinedNumber);
          textToDecode = textToDecode.slice(0, i + 1) + textToDecode.slice(i + 2);
        } else contentList.push(parseInt(currentChar, 10));
      } else contentList.push(currentChar);

      i++;
    }

    // decode
    for (let i = 0; i < contentList.length; i += 2) {
      const count = (contentList[i] as number) - 2;
      const char = contentList[i + 1] as string;
      mixedList.push(char.repeat(count));
    }

    return mixedList.join("");
  }

  function optimizedDecoder(textToDecode: string): string {
    const mixedList: string[] = [];
    const contentList: Array<number | string> = [];

    let i: number = 0;

    while (i < textToDecode.length) {
      const currentChar: string = textToDecode[i];
      const currentNumber: number = Number(currentChar);

      if (!Number.isNaN(currentNumber)) {
        let numStr: string = currentChar;

        // Check if next character is also a digit (2-digit number)
        if (i + 1 < textToDecode.length && !Number.isNaN(Number(textToDecode[i + 1]))) {
          numStr += textToDecode[i + 1];
          i++;
        }

        contentList.push(Number(numStr));
      } else contentList.push(currentChar);

      i++;
    }

    for (let j = 0; j < contentList.length; j += 2) {
      const count: number = (contentList[j] as number) - 2;
      const char: string = contentList[j + 1] as string;
      mixedList.push(char.repeat(count));
    }

    return mixedList.join("");
  }

  console.log(decoder(result));
}
