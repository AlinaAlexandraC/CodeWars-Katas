// Count Repeats

// Write a function that returns the count of characters that have to be removed in order to get a string with no consecutive repeats.

// Note: This includes any characters

// Examples
// 'abbbbc'  => 'abc'    #  answer: 3
// 'abbcca'  => 'abca'   #  answer: 2
// 'ab cca'  => 'ab ca'  #  answer: 1

const countRepeats = (str) => {
    let newArr = [];
    let arrFromStr = str.split("");

    for (let i = 0; i < arrFromStr.length; i++) {
        if (arrFromStr[i] === arrFromStr[i + 1]) {
            newArr.push(arrFromStr[i]);
        }
    }

    return newArr.length;
};

console.log(countRepeats('AaBBCCC'));