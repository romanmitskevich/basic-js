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
   let arrayWithNumbers = String(n).split('').map(element => Number(element));
   let resultArray = [];

   arrayWithNumbers.map(element => {
      let temporaryArray = [...arrayWithNumbers];
      temporaryArray.splice(temporaryArray.indexOf(element), 1);

      resultArray.push(temporaryArray);
   });

   return Math.max(...resultArray.map(element => element.join('')));
}

module.exports = {
   deleteDigit
};
