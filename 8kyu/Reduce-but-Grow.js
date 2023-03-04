// Given a non-empty array of integers, return the 
// result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


// My solution

let product = (arr) =>  arr.reduce((a,b) => a * b ,1)