/*
  Get Duplicates

  Given an array of values, return only the values that have duplicates in the array

  Parameters
  Input: arr {Array}
  Output: {Array}

  Constraints
  Time: O(N)
  Space: O(N)

  Examples
  [1, 2, 4, 2] --> [2]
  [3, 2, 3, 2, 3, 3, 4] --> [3, 2]
  [1, 2, 3, 4] --> []

  UNDERSTANDING
    - check array to see if numbers have duplicates.

  DIAGRAM
    - [1, 2, 4, 2] -> 1: 1, 2: 2, 4: 1 -> return [2]
    - [3, 2, 3, 2, 3, 3, 4] -> 3: 4, 2: 2, 4: 1 -> return [3, 2]
    - [1, 2, 3, 4] -> 1: 1, 2: 1, 3: 1, 4: 1 -> return []

  PSEUDOCODE
    - create an empty array that will hold the duplicates
    - create a hashtable to keep track how frequent the numbers occur in the array
    - iterate through the hashtable and check which numbers have duplicates
    - return array with number with duplicates
*/
// CODE

function getDuplicates(arr) {
  // instatiate variables
  let duplicates = [];
  let hasDuplicate = new Set();

  // iterate through the array
  for (let i = 0; i < arr.length; i++) {
    if (hasDuplicate.has(arr[i]) && !duplicates.includes(arr[i])) {
      duplicates.push(arr[i]);
    } else {
      hasDuplicate.add(arr[i]);
    }
  }
  
  // return array with duplicates
  return duplicates;
}

let arr1 = [1, 2, 4, 2];
let arr2 = [3, 2, 3, 2, 3, 3, 4, 1];
let arr3 = [1, 2, 3, 4];

console.log(getDuplicates(arr1));
console.log(getDuplicates(arr2));
console.log(getDuplicates(arr3));