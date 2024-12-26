const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let num = 1;
  output = "";
  for (let i = 0; i < str.length; i += 1) {
    if(str[i] !== str[i + 1]) {
      if(num === 1) num = "";
      output += num + str[i];
      num = 1;
    }

    if(str[i] === str[i + 1]) num += 1;
  }

  return output;
}

module.exports = {
  encodeLine
};
