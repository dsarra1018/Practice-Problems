/*
  Word Count

  Given a body of text, return a hash table of the frequency of each word.

  Parameters
  Input: text {String}
  Output: {Hash Table}

  Constraints
  Capital and lower case versions of the same word should be counted as the same word.

  Remove punctuations from all words.

  Time: O(N)
  Space: O(N)
  Where N is the number of characters in the string.

  Examples
  'The cat and the hat.' --> '{the: 2, cat: 1, and: 1, hat: 1}'
  'As soon as possible.' --> '{as: 2, soon: 1, possible: 1}'
  'It's a man, it's a plane, it's superman!' --> '{its: 3, a: 2, man: 1, plane: 1, superman: 1}'
*/
'use strict';

function wordCount(sentence) {
  // instantiate variables
  let words = sentence.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()']/g,"").split(" ");
  let wordCounter = {};

  // edge case
  if (sentence.length === 0) {
    return wordCounter;
  }

  // iterate through the array and counting each instances of a word
  for (let i = 0; i < words.length; i++) {
    if (wordCounter[words[i]]) {
      wordCounter[words[i]]++;
    } else {
      wordCounter[words[i]] = 1;
    }
  }

  // return object wordCounter
  return wordCounter;
}

let str1 = "The cat and the hat.";
let str2 = "As soon as possible.";
let str3 = "It's a man, it's plane, it's superman!";
let str4 = "";

console.log(wordCount(str1));
console.log(wordCount(str2));
console.log(wordCount(str3));
console.log(wordCount(str4));