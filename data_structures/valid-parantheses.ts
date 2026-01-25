/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']'
Determine if the input string is valid

An input string is valid if:
- Open brackets must be closed by the same type of brackets
- Open brackets must be closed in the correct order
- Every close bracket has a corresponding open bracket of the same type
 
Example:

Input 1: s = "()"
Output 1: true

Input 2: s = "()[]{}"
Output 2: true

Input 3: s = "(]"
Output 3: false

Input 4: s = "([])"
Output 4: true

Constraints:
  1 <= s.length <= 104
  s consists of parentheses only '()[]{}'.
*/

{
  // order of braces does not matter
  function checkValid(input: string): boolean {
    const openBraces: string[] = ["(", "{", "["];
    const closeBraces: string[] = [")", "}", "]"];

    const countMap: Map<string, number> = new Map();

    for (const item of input) {
      if (openBraces.includes(item)) {
        const existingBracketCount: number = countMap.get(item) ?? 0;

        countMap.set(item, existingBracketCount + 1);
      } else if (closeBraces.includes(item)) {
        const openBrace: string = openBraces[closeBraces.indexOf(item)];
        const existingBracketCount: number = countMap.get(openBrace) ?? 0;

        countMap.set(openBrace, existingBracketCount - 1);
      }
    }

    for (const value of countMap.values()) if (value !== 0) return false;

    return true;
  }

  // check for order of braces
  function checkValidWithOrder(input: string): boolean {
    const openBraces: string[] = ["(", "{", "["];
    const closeBraces: string[] = [")", "}", "]"];

    const stack: string[] = [];

    for (const item of input) {
      if (openBraces.includes(item)) stack.push(item);
      else if (closeBraces.includes(item)) {
        const openBrace: string = openBraces[closeBraces.indexOf(item)];

        if (stack.length === 0 || stack.pop() !== openBrace) return false;
      }
    }

    return stack.length === 0;
  }

  const input: string = "([)]";
  console.log(checkValid(input));
  console.log(checkValidWithOrder(input));
}
