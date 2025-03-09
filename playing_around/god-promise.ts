{
  let someResult: Promise<unknown> = new Promise(
    (resolve: (value: unknown) => void, reject: (reason?: any) => void): void => {
      // this executor function is invoked automatically when the promise is created
      setTimeout((): void => {
        const randomValue: number = Number(Math.random().toFixed(1));
        if (randomValue > 0.5) resolve(randomValue);
        else reject(randomValue);
      }, 1000);
    }
  );

  function getDataWithPromise(): void {
    someResult
      .then((res: unknown) => console.log("Success >>", res))
      .catch((err: unknown) => console.error("Failure >>", err));
  }

  function getDataWithoutPromise(): void {
    console.log("Data is ready");
  }

  getDataWithPromise();
  getDataWithoutPromise();
}
