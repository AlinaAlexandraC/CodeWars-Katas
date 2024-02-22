// Find the capitals

// Instructions
// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

const capitals = (word) => {
    let arr = word.split("");
    let indexArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i].toUpperCase()) {
            indexArr.push(i);
        }
    }

    return indexArr;
};

console.log(capitals('CodEWaRs'));