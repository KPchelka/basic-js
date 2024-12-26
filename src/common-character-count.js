const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = for , the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arrS1 = [];
  let arrS2 = [];
  let num = 0;

  for (let i = 0; i < s1.length; i += 1) {
    arrS1[i] = s1[i];
  }
  for (let i = 0; i < s2.length; i += 1) {
    arrS2[i] = s2[i];
  }

  for(let i = 0; i < s1.length; i += 1) {
    for(let j = 0; j < s2.length; j += 1) {
      if (typeof arrS1[i] == "string" && arrS1[i] === arrS2[j]){
        num += 1;
        delete arrS1[i];
        delete arrS2[j];
      }
    }
  }

  return num;
}

module.exports = {
  getCommonCharacterCount
};
