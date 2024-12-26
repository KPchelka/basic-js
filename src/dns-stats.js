const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */


// function getDNSStats(domains) {
//   let domainArr = [];
//   let revertDomain = "";
//   let n = 0;
//   let parts = [];
//
//   for(const domain of domains){
//     parts = domain.split('.').reverse();
//     for (let i = 0; i < parts.length; i += 1) {
//       for (let j = 0; j < parts.length; j += 1) {
//         domainArr[i] += "." + parts[j];
//       }
//     }
//   }
//
//   // for (let i = 0; i < domains.length; i += 1) {
//   //   for (let j = 0; j < domains[i].length; j += 1) {
//   //     domainArr[j] = domains[i][j];
//   //   }
//   //   // return domainArr;
//   //   for (let k = domainArr.length - 1; k >= 0; k -= 1) {
//   //     if(domainArr[k] == "."){
//   //       let m = k;
//   //       while (m < domainArr.length){
//   //         revertDomain += domainArr[m];
//   //         m += 1;
//   //         n += 1;
//   //       }
//   //       domainArr.length -= n;
//   //     }
//
//   //   }
//   //   return revertDomain;
//
//   // }
//   return domainArr;
// }

function getDNSStats(/* domains */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getDNSStats
};
