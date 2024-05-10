// Original Version

function hoopCount(n) {
  if (n >= 10) {
    return `Great, now move on to tricks`;
  } else {
    return `Keep at it until you get it`;
  }
}

let result = hoopCount(10);
console.log(result);

// Refactored Version using ternary statement

const hoopCount2 = n =>
  n >= 10 ? `Great, now move on to tricks` : `Keep at it until you get it`;
let result2 = hoopCount2(10);
console.log(result2);

// To note : When using arrow functions always if using {} curly braces a return statement is needed
