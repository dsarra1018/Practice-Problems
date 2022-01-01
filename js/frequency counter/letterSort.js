/*
  Letter Sort

  Given a string of letters, return the letters in sorted order.

  Parameters
  Input: str {String}
  Output: {String}

  Constraints
  Time: O(N)
  Space: O(N)

  Examples
  'hello' --> 'ehllo'
  'whiteboard' --> 'abdehiortw'
  'one' --> 'eno'
*/

function letterSort(string) {
  // instantiate variabley
  let arrayOfStrings = [];
  let sortedString = "";

  // iterate through the string
  for (let i = 0; i < string.length; i++) {
    arrayOfStrings.push(string[i]);
  }

  // sort array
  arrayOfStrings.sort();

  // iterate through the string
  for (let i = 0; i < arrayOfStrings.length; i++) {
    sortedString += arrayOfStrings[i];
  }

  //return sorted string
  return sortedString;
}

console.log(letterSort('hello'));
console.log(letterSort('whiteboard'));
console.log(letterSort('one'));

