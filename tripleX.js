// L2: Triple X

// Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".

// "abraxxxas" → true
// "xoxotrololololololoxxx" → false
// "softX kitty, warm kitty, xxxxx" → true
// "softx kitty, warm kitty, xxxxx" → false
// Note :

// capital X's do not count as an occurrence of "x".
// if there are no "x"'s then return false

const tripleX = (str) => {
    let pos = str.indexOf("x".toLowerCase());

    return (str[pos] === str[pos + 1] && str[pos + 1] === str[pos + 2]) ? true : false;
};

console.log(tripleX("XXkittysoft"));