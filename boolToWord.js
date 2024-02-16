// Convert boolean values to strings 'Yes' or 'No'.

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

const boolToWord = ( bool ) => {
    return bool ? "Yes" : "No";
}
  
console.log(boolToWord(true));  
console.log(boolToWord(false));