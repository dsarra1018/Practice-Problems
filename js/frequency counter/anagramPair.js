/*
  Anagram Pair

  Given two strings, determine if the string are anagrams of one another.

  Two words are anagrams of one another if they contain the same letters.

  Parameters
  Input: str1 {String}
  Input: str2 {String}
  Output: {Boolean}

  Constraints
  With N as the length of the first string, and M as the length of the second string.

  Time: O(N)
  Space: O(N)

  Examples
  'cat', 'act' --> true
  'cat', 'dog' --> false
  'racecar', 'aaccrres' --> false

  UNDERSTANDING
  - two strings are anagram of each other if they have the same number
  - one is to one letter occurence
  - has to have same length

  DIAGRAM
  - 'cat', 'act' --> {c: 1, a: 1, t: 1} and {a: 1, c: 1, t: 1} --> return true
  - 'cat' , 'dog' --> {c: 1, a: 1, t: 1} and {d: 1, o: 1, g: 1} --> return false
  - 'racecar', 'aaccrres' --> {r: 2, a: 2, c: 2, e: 1} and {a: 2, c: 2, r: 2, e: 1, s: 1} --> return false

  PSEUDOCODE
  - create a hashtable to keep track of each letters occurence
  - iterate through a string to populate the hashtable
  - iterate through the hashtable and remove each instances of each letter using the second string

*/
// CODE
function anagramPair(str1, str2) {
  // edge cases
  if (str1.length != str2.length) {
    return false;
  }

  // instantiate variables
  let letterCounter = {};
  
  // iterate through the array
  for (let i = 0; i < str1.length; i++) {
    if (letterCounter[str1[i]]) {
      letterCounter[str1[i]]++;
    } else {
      letterCounter[str1[i]] = 1;
    }
  }

  // iterate through the second string 
  for (let i = 0; i < str2.length; i++) {
    if (letterCounter[str2[i]]) {
      letterCounter[str2[i]]--;
    }
  }

  // iterate through hashtable
  for (const key in letterCounter) {
    if (letterCounter[key] > 0) {return false};
  }

  // return true if they're all zero
  return true;
}


let str1 = 'cat';
let str2 = 'act';
let str3 = 'dog';
let str4 = 'racecar';
let str5 = 'aaccrres';

console.log(anagramPair(str1, str2));
console.log(anagramPair(str1, str3));
console.log(anagramPair(str4, str5));