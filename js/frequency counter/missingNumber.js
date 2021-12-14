/*
  Missing Number

  Given range of 1 to N and an array of unique integers that are within that range, 
  return the missing integers not found in the array.

  Parameters
  Input: n {Integer}
  Input: arr {Array of Integers}
  Output: {Array of Integers}

  Constraints
  Time: O(N)
  Space: O(N)

  Examples
  4, [1, 4, 2] --> [3]
  8, [4, 7, 1, 6] --> [2, 3, 5, 8]
  6, [6, 4, 2, 1] --> [3, 5]
*/

function missingNumber(n, arr) {

  // instantiate variables
  let newArr = [];

  // iterate through the array and add the missing numbers
  for (let i = 1; i <= n; i++) {
    if (!arr.includes(i)) {
      newArr.push(i);
    } 
  }

  // return array of missing numbers
  return newArr;
}

console.log(missingNumber(4, [1, 4, 2]));
console.log(missingNumber(8, [4, 7, 1, 6]));
console.log(missingNumber(6, [6, 4, 2, 1]));