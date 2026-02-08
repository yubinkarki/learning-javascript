/* 
Take a string and convert all characters to uppercase
Replace space by * except for any leading and trailing spaces
Those spaces should be left as it is

Example: (underscore means whitespace)

Input 1: Hello_my_friend 
Output 1: HELLO*MY*FRIEND  

Input 2: __No_Way__
Output 2: __NO*WAY__
*/

{
  function toUpper(myInput: string): string {
    const upper: string = myInput.toUpperCase();
    const chars: string[] = upper.split("");

    let start: number = 0;
    let end: number = chars.length - 1;

    while (start < chars.length && chars[start] === " ") start++;
    while (end >= 0 && chars[end] === " ") end--;

    console.log(start, end);

    for (i = start; i <= end; i++) {
      console.log(chars[i]);
      if (chars[i] === " ") chars[i] = "*";
    }
    
    return chars.join("");
  }

  console.log(toUpper(" Hello my friend "))
}
