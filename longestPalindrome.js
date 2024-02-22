// Longest palindrome

// A palindrome is a series of characters that read the same forwards as backwards such as "hannah", "racecar" and "lol".

// For this Kata you need to write a function that takes a string of characters and returns the length, as an integer value, of longest alphanumeric palindrome that could be made by combining the characters in any order but using each character only once. The function should not be case sensitive.

// For example if passed "Hannah" it should return 6 and if passed "aabbcc_yYx_" it should return 9 because one possible palindrome would be "abcyxycba".

const longestPalindrome = (str) => {
    let arr = str.toLowerCase().split("").sort();
    let newArr = [];
    let longestPalindromeLength = 0;
    let hasOddNumbers = false;

    for (let i = 0; i < arr.length; i++) {
        if ((arr[i].charCodeAt(0) > 47 && arr[i].charCodeAt(0) < 58) || (arr[i].charCodeAt(0) > 96 && arr[i].charCodeAt(0) < 123)) {
            newArr.push(arr[i]);
        }
    }

    let characters = {};

    for (let i = 0; i < newArr.length; i++) {
        if (characters[newArr[i]]) {
            characters[newArr[i]]++;
        } else {
            characters[newArr[i]] = 1;
        }
    }

    Object.values(characters).forEach(char => {
        if (char % 2 === 0) {
            longestPalindromeLength += char;
        } else {
            longestPalindromeLength += char - 1;
            hasOddNumbers = true;
        }
    });

    if (hasOddNumbers === true) {
        longestPalindromeLength += 1;
    }

    return longestPalindromeLength;
};

console.log(longestPalindrome("Hannah"));