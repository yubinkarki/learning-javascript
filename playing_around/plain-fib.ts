// 0 1 1 2 3 5 8 13 21

class PlainFibClass {
  /**
   * Recursively calculates the Fibonacci number for the given position.
   * @param num - The position in the Fibonacci sequence.
   * @returns The Fibonacci number at the given position.
   */
  public calculate(num: number): number {
    if (num === 2) return 1;

    if (num === 1) return 0;

    console.log(">>", num);

    const result = this.calculate(num - 1) + this.calculate(num - 2);

    return result;
  }
}

const plainFib: PlainFibClass = new PlainFibClass();
const numberToCal: number = 30;

console.time("⌛️ fib calculation time");
const plainFibResult = plainFib.calculate(numberToCal);
console.timeEnd("⌛️ fib calculation time");
console.log(`Fib result in sequence ${numberToCal} =`, plainFibResult);
