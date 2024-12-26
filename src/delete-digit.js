const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nArr = n.toString().split("").map(Number);
  for(let i = 0; i < nArr.length; i += 1) {
    if (nArr[i] < nArr[i + 1]){
      nArr[i] = '';
    }
  }
  let output = Number(nArr.join(''));
  if (output === n) {
    output = Math.floor(output / 10);
  }
  return output;
}
module.exports = {
  deleteDigit
};
