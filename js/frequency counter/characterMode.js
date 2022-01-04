/*
  Character Mode

  Given a string, find the most frequent occuring letter(s) in the string.

  Parameters
  Input: str {String}
  Output: {String}

  Constraints
  If more than one letter is tied for the most frequent, return a string of all the letters in one string.

  Upper case characters should count as lower case, and don not include spaces as characters.

  Time: O(N)
  Space: O(N)

  Examples
  'hello' --> 'l'
  'A walk in the park' --> 'a'
  'noon' --> 'no'

  UNDERSTANDING:
    - uppercase counts as lowercase
    - spaces are ignored
    - punctuations are ignored
    - time complexity of O(N)
    - space complexity of O(N)
    - going through a string to see the most frequent occuring letter

  DIAGRAM:
    'hello' -> h: 1, e: 1, l: 2, o: 1 return 'l'
    'A walk in the park' -> a: 3, w: 1, l: 1, k: 2, i: 1, n: 1, t: 1, h: 1, e: 1, p: 1, r: 1 return 'a'
    'noon' -> n: 2, o: 2 return 'no'
  
    PSEUDOCODE
    - change to lowercase all uppercase
    - remove all spaces and punctuations
    - create a hashtable to keep track of each of the characters
    - iterate through strings and use the hashtable to record character occurence
    - iterate through the hashtable to see the most occuring letter(s) in the string
    - return string holding the most occuring letter(s) in the string

*/

// CODE
function characterMode(string) {
  // instantiate variables
  let charCounter = {};
  let frequentChar = "";
  let newString = string.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s']/g, "");

  // iterate through the string
  for (let i = 0; i < newString.length; i++) {
    if (charCounter[newString[i]]) {charCounter[newString[i]]++}
    else {charCounter[newString[i]] = 1};
  }

  // iterate over the hashtable
  for (const key in charCounter) {
    if (frequentChar === '' || charCounter[frequentChar[0]] < charCounter[key]) {frequentChar = key}
    else if (charCounter[frequentChar[0]] === charCounter[key]) {frequentChar += key}
  }

  // return hashtable
  return frequentChar;
}

console.log(characterMode('hello'));
console.log(characterMode('A walk in the park'));
console.log(characterMode('noon'));