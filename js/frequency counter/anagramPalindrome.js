/*
  Anagram Palindrome

  Given a string, determine if the string can be rearranged to form a palindrome.

  A palindrome is a word that is the same as its reversed. For example: 'racecar'
  and 'noon' are palindromes because they match their reveresed version
  respectively. On the other hand, 'cat' is not a palindrome because 'cat'
  does not equal 'tac'.

  Parameters
  Input: str {String}
  Output: {Boolean}

  Constraints
  Assume the string only contains lowercase letters and no spaces.

  Time: O(N)
  Space: O)N

  Examples
  'carrace' --> true ('carrace' can be rearranged to 'racecar')
  'cat' --> false
*/

function anagramPalindrome(string) {
  // instantiate variables
  let charCounter = {};
  let oddTimesOccurrence = 0;

  // iterate through string
  for (let i = 0; i < string.length; i++) {
    if (charCounter[string[i]]) {
      charCounter[string[i]]++;
    } else {
      charCounter[string[i]] = 1;
    }
  }

  // iterate through hashtable
  for (const key in charCounter) {
    if (charCounter[key] % 2 === 1) {
      oddTimesOccurrence++;
    }
    
    // return false if number of odd-time occurences are > 1
    if (oddTimesOccurrence > 1) {return false};
  }

  // return true
  return true;
}

let str1 = 'carrace';
let str2 = 'cat';

console.log(anagramPalindrome(str1));
console.log(anagramPalindrome(str2));