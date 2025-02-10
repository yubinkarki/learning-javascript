// 0 1 1 2 3 5 8 13 21

class CacheFibClass {
  /**
   * Cache for storing calculated Fibonacci numbers.
   */
  private static fibCache: Map<number, number> = new Map();

  /**
   * Recursively calculates the Fibonacci number for the given position.
   * @param num - The position in the Fibonacci sequence.
   * @returns The Fibonacci number at the given position.
   */
  public calculate(num: number): number {
    if (num === 2) {
      CacheFibClass.fibCache.set(num, 1);
      return 1;
    }

    if (num === 1) {
      CacheFibClass.fibCache.set(num, 0);
      return 0;
    }

    console.log(">>", num);

    if (CacheFibClass.fibCache.has(num)) return CacheFibClass.fibCache.get(num)!;

    const result = this.calculate(num - 1) + this.calculate(num - 2);

    CacheFibClass.fibCache.set(num, result);

    return result;
  }

  /**
   * Returns a string representation of the Fibonacci sequence, sorted in ascending order, using the cached values.
   * @returns A comma-separated string of Fibonacci numbers with spaces after the commas.
   */
  public showSequence = function (): string {
    const cacheValues: MapIterator<number> = CacheFibClass.fibCache.values();
    const cacheValueList: number[] = Array.from(cacheValues).sort((a, b) => a - b);

    if (cacheValueList.length > 10) {
      const firstHalf: string = cacheValueList.slice(0, 8).join(", ");
      const secondHalf: string = cacheValueList.slice(-2).join(", ");
      return firstHalf + " . . . " + secondHalf;
    } else return cacheValueList.join(", ");
  };
}

const fib: CacheFibClass = new CacheFibClass();
const numberToCalculate: number = 45;

console.time("⏳ fib calculation time");
const fibResult: number = fib.calculate(numberToCalculate);
console.timeEnd("⏳ fib calculation time");
console.log(`Fib result in sequence ${numberToCalculate} =`, fibResult);
console.log(`Fib sequence till ${numberToCalculate} sequence =`, fib.showSequence());
