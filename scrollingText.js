// Scrolling Text

// Let's create some scrolling text!

// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

// Example
// scrollingText("codewars") should return:

// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]

const scrollingText = (text) => {
    let letters = text.toUpperCase().split("");
    let rotations = [];
  
    for (let i = 0; i < letters.length; i++){
        rotations.push(letters.join(""));
        let element = letters.splice([0], 1)[0];
        letters.splice(letters.length, 0, element);
    }

    return rotations;
}
  
console.log(scrollingText("codewars"));