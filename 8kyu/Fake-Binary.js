// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. 
// Return the resulting string.

// My solution

function fakeBin(x){

    let splitdigit = x.split('')
    let replacedDigits = splitdigit.map((digits) => {
      if(digits < 5)  {
        return "0" 
      } else  {
        return "1"}
    })
    return replacedDigits.join('')
  }