// String Matcher

// isMatching checks if a string can be created by combining and rearranging the letters of two other strings (not case sensitive).

// !Spaces will be ignored but special characters and numbers won't match the string and return false.

// For example:
// isMatching("email box", "b aIl", "Mo x e") return true
// but
// isMatching("bouh", "0b", "uh") return false

// You need to be able to use all the caracters from the two strings so:
// isMatching("kata", "kt", "aaa") return false

const isMatching = (string, str1, str2) => {
    let stringArr = string.toLowerCase().split("");
    let noSpacesArr = stringArr.filter(word => word !== " ");
    let newLetters = str1.concat(str2).toLowerCase().split("").filter(word => word !== " ");
    
    for (let i = 0; i < newLetters.length; i++) {
        if (!newLetters.includes(noSpacesArr[i]) || noSpacesArr.length > newLetters.length) {
            return false;
        }
    }

    return true;
};

console.log(isMatching("impressionistic", "isis isi", "precomnt"));