const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const correctChars = '0123456789ABCDEF';
  let parts = n.split('-');

  if (parts.length !== 6) return false;
  for (let i = 0; i < parts.length; i += 1) {
    for (let j = 0; j < 2; j += 1) {
      if(!correctChars.includes(parts[i][j])) return false;
    }
  }
  return true;
}
module.exports = {
  isMAC48Address
};
