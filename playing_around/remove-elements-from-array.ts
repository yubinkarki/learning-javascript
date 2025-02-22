// showcasing splice and slice

{
  function modifyArrayByItem(inputArray: (string | number)[]): void {
    const itemToRemove = "Rock";
    const indexToRemove = inputArray.indexOf(itemToRemove);

    // remove one item at the specified index
    inputArray.splice(indexToRemove, 1);
    // inputArray.splice(indexToRemove, 0, "Alex", "Patty");
    console.log("⭐️ Result >>", inputArray);
  }

  const myNumbers: number[] = [1, 2, 3, 4, 5];
  const nameList: string[] = ["Chris", "Rock", "Matt", "Pratt"];

  modifyArrayByItem(nameList);

  const filteredList: string[] = nameList.filter((item) => item !== "Chris");

  console.log("🚀 Filtered list >>", filteredList);

  const slicedNumbers: number[] = myNumbers.slice(0, 1).concat(myNumbers.slice(2));

  console.log("$ Sliced numbers >>", slicedNumbers);
}
