// String Breakers

// I will give you an integer (N) and a string. Break the string up into as many substrings of N as you can without spaces. If there are leftover characters, include those as well.

// Example: 

// N = 5;

// String = "This is an example string";

// Return value:
// Thisi
// sanex
// ample
// strin
// g

// Return value as a string: 'Thisi'+'\n'+'sanex'+'\n'+'ample'+'\n'+'strin'+'\n'+'g'

const stringBreakers = (n, string) => {
    let newStr = string.split(" ").join("");
    let strArr = [];
    let currentIndex = 0;

    for (let i = 1; i < newStr.length / n + 1; i++) {
        strArr.push(newStr.substring(currentIndex, n * i));
        currentIndex += n;
    }

    return strArr.join("\n");
};

console.log(stringBreakers(5, 'This is an example string'));