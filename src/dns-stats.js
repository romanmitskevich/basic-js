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
function getDNSStats(domains) {
   let resultObject = {};
   let arrayWithSplittedArgs = domains.map(el => el.split(''));
   let arrWithIndexes = [];     // массив с индексами точек
   let array = [];              // массив со всеми DNS, но для каждого элемента domains он обнуляется
   let result = [];             // массив cо всеми DNS


   arrayWithSplittedArgs.map(item => {
      for (let i = 0; i < item.length; i++) {
         if (item[i] === '.') {
            arrWithIndexes.push(i);
         }
      }

      for (let i = arrWithIndexes.length - 1; i >= 0; i--) {
         array.push(item.slice(arrWithIndexes[i]).join(''));
         item.splice(arrWithIndexes[i], item.length - arrWithIndexes[i]);
      }

      array.push(`.${item.join('')}`);

      for (let i = 1; i < array.length; i++) {
         if (array[i - 1]) {
            array[i] = array[i - 1] + array[i];
         }
      }

      array.map(element => result.push(element));
      arrWithIndexes = [];
      array = [];
   })

   let count = 0;
   result.map(element => {
      for (let i = 0; i < result.length; i++) {
         if (element === result[i]) {
            count++;
         }
      }

      resultObject[element] = count;
      count = 0;
   })

   return resultObject;
}

module.exports = {
   getDNSStats
};
