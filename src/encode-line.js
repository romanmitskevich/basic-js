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
   let arrayForCounting = str.split('');
   let countChars = 1;
   let resultArray = [];

   for (let i = 0; i < arrayForCounting.length; i++) {
      if (arrayForCounting[i] === arrayForCounting[i + 1]) {
         countChars++;
      } else {
         countChars === 1 ? resultArray.push(`${arrayForCounting[i]}`) : resultArray.push(`${countChars}${arrayForCounting[i]}`);
         countChars = 1;
      }
   }

   return resultArray.join('');
}

module.exports = {
   encodeLine
};
