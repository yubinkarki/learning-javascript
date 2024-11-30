// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

// constructor function
function Fibonacci() {
  const fibCache: Record<string, number> = {};

  this.calculate = function (num: number): number {
    if (num === 1) {
      fibCache[num] = 0;
      return 0;
    }

    if (num === 2) {
      fibCache[num] = 1;
      return 1;
    }

    if (fibCache[num]) return fibCache[num];

    const result: number = this.calculate(num - 1) + this.calculate(num - 2);

    fibCache[num] = result;

    return result;
  };

  this.result = function (): void {
    const valuesList: number[] = Object.values(fibCache);
    console.log("🌀 Fibonacci result >>", valuesList[valuesList.length - 1]);
    console.log("🚀 Fibonacci sequence >>", valuesList);
  };
}

const fibObj = new Fibonacci();

fibObj.calculate(5);
fibObj.result();
