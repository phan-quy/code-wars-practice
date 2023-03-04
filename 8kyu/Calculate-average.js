// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// My solution 

function findAverage(array) {
    if (array.length ===0)  {
      return 0 
    }
    
    const sum = array.reduce((a, b) => {
      return a + b
    }, 0)
    let average = sum / array.length  
    return average 
  }