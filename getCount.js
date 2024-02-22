// Vowel Count

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

const getCount = (str) => {
  let vowelCount = 0;
  let arr = str.split("");

  arr.forEach(letter => {
    if (["a", "e", "i", "o", "u"].includes(letter)) {
      vowelCount++;
    }
  });

  return vowelCount;
};

console.log(getCount("abracadabra"));