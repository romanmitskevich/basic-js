const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
   if (!Array.isArray(arr)) {
      throw Error("'arr' parameter must be an instance of the Array!");
   }

   const arrayToCheck = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
   let resultArray = JSON.parse(JSON.stringify(arr));

   for (let i = 0; i < resultArray.length; i++) {
      if (arrayToCheck.includes(resultArray[i])) {
         if (i === 0) resultArray.shift();
         if (i === resultArray.length - 1) resultArray.pop();

         if (resultArray[i] === arrayToCheck[0]) {
            arrayToCheck.includes(resultArray[i + 2]) ? resultArray.splice(i, 3) : resultArray.splice(i, 2);
         }
         if (resultArray[i] === arrayToCheck[1]) {
            resultArray.splice(i - 1, 2);
         }
         if (resultArray[i] === arrayToCheck[2]) {
            resultArray[i] = resultArray[i + 1];
         }
         if (resultArray[i] === arrayToCheck[3]) {
            resultArray[i] = resultArray[i - 1];
         }
      }
   }

   return resultArray;
}

module.exports = {
   transform
};
