const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 * 
 * The resultArrayult should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
   let resultArray = matrix.map(el => el.map(el => 0));

   for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
         if (matrix[i][j] === true) {
            if (resultArray[j - 1]) resultArray[i][j - 1]++;
            if (resultArray[j + 1]) resultArray[i][j + 1]++;

            if (resultArray[i - 1]) {
               resultArray[i - 1][j - 1]++;
               resultArray[i - 1][j]++;
               resultArray[i - 1][j + 1]++;
            }

            if (resultArray[i + 1]) {
               resultArray[i + 1][j - 1]++;
               resultArray[i + 1][j]++;
               resultArray[i + 1][j + 1]++;
            }
         }

      }
   }

   return resultArray;
}


module.exports = {
   minesweeper
};
