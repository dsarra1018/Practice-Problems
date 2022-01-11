/*
  Challenge 1: Sort a Bit Array
  Given a bit array, return it sorted in-place (a bit array is simply an array that contains only bits, either 0 or 1).

  Input: [0, 1, 1, 0, 1, 1, 1, 0]
  Output: [0, 0, 0, 1, 1, 1, 1, 1]
*/

function sortBitArray(arr) {
  // instantiate variables
  let zeroAndOnesCounter = {};

  // iterate through the array
  for (let i = arr.length-1; i >= 0; i--) {
    if (zeroAndOnesCounter[arr[i]]) {
      zeroAndOnesCounter[arr[i]]++;
      arr.pop();
    } else {
      zeroAndOnesCounter[arr[i]] = 1;
      arr.pop();
    }
  }

  // iterate through hashtable
  for (let i = 0; i <= 1; i++) {
    while (zeroAndOnesCounter[i] > 0) {
      arr.push(i);
      zeroAndOnesCounter[i]--;
    }
  }

  // return sorted array
  return arr;
}

console.log(sortBitArray([0, 1, 1, 0, 1, 1, 1, 0]));