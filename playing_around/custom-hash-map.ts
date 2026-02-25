{
  type keyType = string | number;
  type valueType = string | number | object;

  class CustomHashMap {
    private cacheStorage: Map<keyType, valueType>;

    constructor() {
      this.cacheStorage = new Map();
    }

    /**
     * Inserts a key-value pair into the hash map.
     * @param {keyType} k The key to insert.
     * @param {valueType} v The value to associate with the key.
     * @returns {void}
     */
    public bhitraHal(k: keyType, v: valueType): void {
      this.cacheStorage.set(k, v);
    }

    /**
     * Retrieves the value associated with a given key.
     * @param {keyType} k The key to retrieve the value for.
     * @returns {valueType | undefined} The value associated with the key, or undefined
     * if the key is not found.
     */
    public khoj(k: keyType): valueType | undefined {
      return this.cacheStorage.get(k);
    }

    /**
     * Removes a key-value pair from the hash map.
     * @param {keyType} k The key to remove.
     * @returns {void}
     */
    public eslaiHatau(k: keyType): void {
      if (this.cacheStorage.has(k)) {
        this.cacheStorage.delete(k);
      }
    }
  }

  const myHash: CustomHashMap = new CustomHashMap();

  myHash.bhitraHal("name", "yubin");
  const name: valueType | undefined = myHash.khoj("name");
  const address: valueType | undefined = myHash.khoj("address");
  console.log(name, address);
}
