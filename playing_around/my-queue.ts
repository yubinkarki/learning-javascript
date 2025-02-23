{
  class MyStringQueue {
    private data: string[];

    constructor() {
      this.data = [];
    }

    /**
     * Adds an item to the back of the queue.
     * @param {string} item The string to enqueue.
     * @returns {void}
     */
    public enqueue(item: string): void {
      this.data.push(item);
    }

    /**
     * Removes an item from the front of the queue.
     * @returns {void}
     */
    public dequeue(): void {
      this.data.shift();
    }

    /**
     * Returns a copy of the queue's contents as an array.
     * @returns {string[]} An array containing the strings in the queue.
     */
    public get(): string[] {
      return [...this.data];
    }

    /**
     * Returns a reversed copy of the queue's contents as an array. Empty strings are included.
     * @returns {string[]} A reversed array containing the strings in the queue.
     */
    public reverse(): string[] {
      let reversedList: string[] = [];

      while (this.data.length > 0) {
        const poppedItem: string | undefined = this.data.pop();

        if (poppedItem !== undefined && typeof poppedItem === "string") reversedList.push(poppedItem);
      }

      return reversedList;
    }
  }

  const q: MyStringQueue = new MyStringQueue();

  console.log(q.get()); // []
  q.enqueue("nice");
  q.enqueue("one");
  q.dequeue();
  console.log(q.get()); // [ 'one' ]
  q.enqueue("more");
  console.log(q.reverse()); // [ 'more', 'one' ]
}
