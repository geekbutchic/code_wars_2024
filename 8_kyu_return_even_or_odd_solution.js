"use strict";

// Original Version
// const evenOrOdd = n => {
//   if (n % 2 === 0) {
//     return "EVEN";
//   } else {
//     return "ODD";
//   }
// };

// Refactored Version
const evenOrOdd = n => (n % 2 === 0 ? `Even` : `Odd`);

let result = evenOrOdd(3);
console.log(result);
