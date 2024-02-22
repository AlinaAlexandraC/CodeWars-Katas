// Replace With Alphabet Position

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabet_position("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

const alphabetPosition = (text) => {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let textArr = text.toLowerCase().split("").filter(char => char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123);
    let result = [];

    for (let i = 0; i < textArr.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (textArr[i] === alphabet[j]) {
                result.push(alphabet.indexOf(alphabet[j]) + 1);
            }
        }
    }

    return result.join(" ");
};

console.log(alphabetPosition("The sunset sets at twelve o' clock."));