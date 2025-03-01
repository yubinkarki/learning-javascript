/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order
And two integers m and n, representing the number of elements in nums1 and nums2 respectively

Merge nums1 and nums2 into a single array sorted in non-decreasing order

The final sorted array should not be returned by the function
But instead be stored inside the array nums1
To accommodate this, nums1 has a length of m + n
Where the first m elements denote the elements that should be merged
And the last n elements are set to 0 and should be ignored - nums2 has a length of n

Example:

Input 1: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output 1: [1,2,2,3,5,6]

Explanation: The arrays we are merging are [1,2,3] and [2,5,6]
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1

Input 2: nums1 = [1], m = 1, nums2 = [], n = 0
Output 2: [1]

Explanation: The arrays we are merging are [1] and []
The result of the merge is [1]

Input 3: nums1 = [0], m = 0, nums2 = [1], n = 1
Output 3: [1]

Explanation: The arrays we are merging are [] and [1]
The result of the merge is [1]
Note that because m = 0, there are no elements in nums1
The 0 is only there to ensure the merge result can fit in nums1

Constraints:
  nums1.length == m + n
  nums2.length == n
  0 <= m, n <= 200
  1 <= m + n <= 200
  -109 <= nums1[i], nums2[j] <= 109
*/

{
  function mergeArray(arrOne: number[], numOne: number, arrTwo: number[], numTwo: number): void {
    const slicedArrOne = arrOne.slice(0, numOne);
    const slicedArrTwo = arrTwo.slice(0, numTwo);

    arrOne.length = 0;

    arrOne.splice(0, 0, ...slicedArrOne, ...slicedArrTwo);
    arrOne.sort((a, b) => a - b);
  }

  const m: number = 3;
  const n: number = 3;
  const secondArr: number[] = [2, 5, 6];
  const firstArr: number[] = [1, 2, 3, 0, 0];

  mergeArray(firstArr, m, secondArr, n);
  console.log(firstArr);
}
