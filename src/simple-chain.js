const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
   arrayForChain: [],

   getLength() {
      return this.arrayForChain.length;
   },

   addLink(value) {
      this.arrayForChain.push(`( ${value} )`);
      return this;
   },

   removeLink(position) {
      if (!this.arrayForChain[position - 1]) {
         this.arrayForChain.length = 0;
         throw Error("You can't remove incorrect link!");
      } else {
         this.arrayForChain.splice(position - 1, 1);
      }
      return this;
   },

   reverseChain() {
      this.arrayForChain.reverse();
      return this;
   },

   finishChain() {
      let resultChain = this.arrayForChain.join('~~');
      this.arrayForChain.length = 0;

      return resultChain;
   }
};

module.exports = {
   chainMaker
};
