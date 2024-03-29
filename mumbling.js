// Mumbling

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

const mumbling = (s) => {
    let arr = [];

    for (let i = 0; i < s.length; i++) {
        arr.push(s[i].toUpperCase() + s[i].toLowerCase().repeat(i));
    }

    return arr.join("-");
};

console.log(mumbling("ZpglnRxqenU"));