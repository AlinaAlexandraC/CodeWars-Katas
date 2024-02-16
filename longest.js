// Thinkful - List Drills: Longest word (retired)

// Complete the function that takes one argument, a list of words, and returns the length of the longest word in the list.

// For example:

// ['simple', 'is', 'better', 'than', 'complex'] ==> 7

const longest = (words) => {
    let maxLength = words[0].length;

    for (let i = 0; i < words.length; i++){
      if(maxLength < words[i].length){
          maxLength = words[i].length;
      }
    }
    
    return maxLength
}
  
console.log(longest(['simple', 'is', 'better', 'than', 'complex']));