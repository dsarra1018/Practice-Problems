/*
  Number of Ones

  Given a sorted bit array (values of either 0 or 1), determine the number of 1's in the array

  Parameters
  Input: arr {Array of Integers}
  Output: {Integer}

  Constraints
  Time: O(logN)
  Space: O(1)

  Examples
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1] --> 8
  [0, 0, 0] --> 0
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1] --> 7

  UNDERSTANDING
  - given an array of bit
  - sorted
  - constant auxilary space complexity
  - logarithmic space complexity

  DIAGRAM
  let start = 0;
  let end = arr.length - 1;
  let mid;
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1] --> 8
  if (arr[m] === 1) && arr[m - 1] === 0 --> return (arr.length - m;
  if (arr[m] === 0) --> start++;
  else if (arr[m] === 1 && arr[m - 1]) --> end--;
  1. start = 0, end = 10, mid = 5, arr[5] = 1, arr[4] --> end--;
  2. start = 0, end = 9, mid = 4, arr[4] = 1, arr[3] --> end--;
  3. start = 0, end = 8, mid = 4, arr[4] = 1, arr[3] --> end--;
  4. start = 0, end = 7, mid = 3, arr[3] = 1, arr[2] --> 10 - 3 = 7;

  [0, 0, 0] --> 0
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1] --> 7

  PSEUDOCODE
  - instantiate variables: start, mid, and end
  - while loop: while (start <= end)
  - set mid as Math.floor((start + end) / 2)
  - return if arr[m] === 1 and arr[m - 1] = 0
  - if arr[m] === 0, increment start by 1
  - if arr[m] === 1 and arr[m - 1] === 1, decrement end by 1
  - if while loop ends, return 0
*/
let arr1 = [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1];
let arr2 = [0, 0, 0];
let arr3 = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1];

function numberOfOnes(arr) {
  // instantiate variables
  let start = 0;
  let end = arr.length - 1;
  let mid;

  // iterate through the array
  while(start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] === 1 && arr[mid - 1] === 0) {return arr.length - mid};
    if (arr[mid] === 0) {
      start++;
    } else if (arr[mid] === 1 && arr[mid - 1] === 1) {
      end--;
    }
  }

  // return 0 if while loops ends
  return 0;
}

console.log(numberOfOnes(arr1));
console.log(numberOfOnes(arr2));
console.log(numberOfOnes(arr3));