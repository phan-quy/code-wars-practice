// Given an integral number, determine if it's a square number:

// My solution

var isSquare = n => Math.sqrt(n) === Math.floor(Math.sqrt(n)) ? true : false;


// Better solution

function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
  }