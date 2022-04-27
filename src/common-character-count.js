const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
   const array1 = Array.from(s1).sort();
   const array2 = Array.from(s2).sort();
   const maxLength = Math.max(array1.length, array2.length);
   let count = 0;

   for (let i = 0; i < maxLength; i++) {
      if (array1[i] === array2[i] || array1[i + 1] === array2[i]) {
         count++;
      }
   }

   return count;
}

module.exports = {
   getCommonCharacterCount
};
