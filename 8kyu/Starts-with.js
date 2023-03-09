// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"

//My solution

function areYouPlayingBanjo(name) {
    let banjoCheck = name.toLowerCase();
    if (banjoCheck.startsWith('r')) {
      return `${name} plays banjo`;
    }
    return `${name} does not play banjo`;
  }


  // Better solution
  
  function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
  }