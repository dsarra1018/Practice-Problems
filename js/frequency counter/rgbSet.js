/*
  RGB Set

  Given a string of characters where each character is either 'r', 'g', or 'b', determine the number of complete sets of 'rgb' that can be made with the characters.

  Parameters
  Input: str {String}
  Output: {Integer}

  Constraints
  Time: O(N)
  Space: O(1)

  Examples
  'rgbrgb' --> 2
  'rbgrbrgrgbgrrggbbbbrgrgrgrg' --> 7
  'bbrr' --> 0
*/
'use strict';

function rgb(string) {
  // instantiate variables
  let fullSetCounter = 0;
  let rCount = 0;
  let gCount = 0;
  let bCount = 0;

  // iterate through the array and increment accordingly
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'r') {
      rCount++;
    } else if (string[i] === 'g') {
      gCount++;
    } else if (string[i] === 'b') {
      bCount++;
    }
  }

  // check for the minimum value
  fullSetCounter = Math.min(rCount, gCount, bCount);

  // return number of full set
  return fullSetCounter;
}

let set1 = 'rgbrgb';
let set2 = 'rbgrbrgrgbgrrggbbbbrgrgrgrg';
let set3 = 'bbrr';

console.log(rgb(set1));
console.log(rgb(set2));
console.log(rgb(set3));