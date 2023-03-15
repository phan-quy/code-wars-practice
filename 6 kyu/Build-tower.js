// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]

// My solution

function buildTower(numFloors) {
  const tower = [];
  for (let i = 1; i <= numFloors; i++) {
    const spaces = ' '.repeat(numFloors - i);
    const blocks = '*'.repeat(i * 2 - 1);
    tower.push(spaces + blocks + spaces);
  }
  return tower;
}
