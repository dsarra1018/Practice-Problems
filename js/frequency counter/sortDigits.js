/*
  Sort Digits

  Given an integer, sort the digits in ascending order and return the new integer.
  Ignore leading zeros.

  Parameters
  Input: num {Integers}
  Output: {Integer}

  Constraints
  Do not convert the integer into a string or other data type.

  Time: O(N) where N is the number of digits
  Space: O(1)

  Examples
  8970 --> 789
  32445 --> 23445
  10101 --> 111

  UNDERSTANDING
    - we rearrange the input in ascending order
    - we ignore zeros
    - can't convert integers into another data type 

  DIAGRAM
    8970 -> 0789 -> 789
    32445 -> 23445
    10101 -> 00111 -> 111
  
  PSEUDOCODE
    - 
*/

// CODE
function sortDigits(n) {
  // iterate through the digits
  let digitCounter = {};
  let sortedDigit = 0;
  let power = 0;

  // iterate through the int
  while (n > 0) {
    let digit = n % 10;
    if (digitCounter[digit]) {
      digitCounter[digit]++;
    } else {
      digitCounter[digit] = 1;
    }
    n = parseInt(n/10);
  }
  
  // iterate through the hashtable
  for (let i = 9; i > 0; i--) {
    if (digitCounter[i]) {
      while (digitCounter[i] > 0) {
        sortedDigit += i * Math.pow(10, power);
        power++;
        digitCounter[i]--;
      }
    }
  }
  
  // return digit counter
  return sortedDigit;
}

num1 = 8970;
num2 = 23445;
num3 = 10101;

console.log(sortDigits(num1));
console.log(sortDigits(num2));
console.log(sortDigits(num3));
