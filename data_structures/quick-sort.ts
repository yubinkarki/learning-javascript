/* 
Quicksort

Write a quicksort algorithm for an array of sorted numbers

Example:

Input 1: [2, 5, 1, 3, 8]  
Output 1: [1, 2, 3, 5, 8]  

Source: https://www.educative.io/answers/how-to-implement-quicksort-in-python
*/

{
  function quickSort(arr: number[], low: number = 0, high: number = arr.length - 1): number[] {
    if (low >= high) return arr;

    let right: number = high;
    let left: number = low + 1;
    const pivot: number = arr[low];

    while (left <= right) {
      if (arr[left] <= pivot) left++;
      else if (arr[right] > pivot) right--;
      else [arr[left], arr[right]] = [arr[right], arr[left]];
    }

    [arr[low], arr[right]] = [arr[right], arr[low]];

    quickSort(arr, low, right - 1);
    quickSort(arr, right + 1, high);

    return arr;
  }

  const nums: number[] = [5, 3, 8, 4, 2, 7, 1];
  console.log(quickSort(nums));
}
