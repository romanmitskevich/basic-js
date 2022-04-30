const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
   calculateDepth(array, countDepth = 1) {
      for (let element of array) {
         if (Array.isArray(element)) {
            countDepth++;
            return this.calculateDepth(array.flat(), countDepth);
         }
      }

      return countDepth;
   }
}

module.exports = {
   DepthCalculator
};
