/*
  Given an array of integers and a target value, determine if there are two integers that add to the sum

  Input: [4, 2, 6, 5, 7, 9, 10], 13
  Output: true
 */

function twoSum(arr, target) {
  // instantiate variables
  let hasSeen = new Set();
  let difference;

  // iterate through the array
  for (let i = 0; i < arr.length; i++) {
    
    // assign target - arr[i] to difference
    difference = target - arr[i];

    // check if difference is in set
    if(hasSeen.has(difference)) {return true;}

    // add number to the set
    hasSeen.add(arr[i]);
  }

  // if no two integers in the array add up to the target return false
  return false;
}

console.log(twoSum([4, 2, 6, 5, 10], 13));
console.log(twoSum([4, 2, 6, 5, 7, 9, 10], 13));