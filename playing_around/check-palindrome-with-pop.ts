{
  function checkPalindrome(value: string) {
    const wordList: string[] = value.split("");
    const reversedWordList: string[] = [];

    while (wordList.length > 0) {
      const lastItem: string | undefined = wordList.pop();

      if (lastItem !== undefined) reversedWordList.push(lastItem);
    }

    return reversedWordList.join("") === value;
  }

  const input = "abba";
  console.log(checkPalindrome(input));
}
