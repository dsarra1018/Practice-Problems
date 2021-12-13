/*
  Unique

  Given an array of integers, return an array with all duplicates removed.

  Parameters
  Input: arr {Array of Integers}
  Output: {Array of Integers}

  Constraints
  Time: O(N)
  Space: O(N)

  Examples
  [1, 2, 4, 4, 5, 6] --> [1, 2, 4, 5, 6]
  [1, 1, 2, 2, 3, 3] --> [1, 2, 3]
  [1, 2, 3, 1, 2] --> [1, 2, 3]
*/
'use strict';

function unique(arr) {
  // instantiate variables
  let hashTable = {}; // keep track of number instances
  let newArr = []; // contains unique instance of number from the original array

  // iterating through the array and count the instances of each numbers
  for (let i = 0; i < arr.length; i++) {
    if (hashTable[arr[i]]) {
      hashTable[arr[i]]++;
    } else {
      hashTable[arr[i]] == 1;
      newArr.push(arr[i]);
    }
  }

  // return new array
  return newArr;
}

let arr1 = [1, 2, 4, 4, 5, 6];
let arr2 = [1, 1, 2, 2, 3, 3];
let arr3 = [1, 2, 3, 1, 2];

console.log(unique(arr1));
console.log(unique(arr2));
console.log(unique(arr3));