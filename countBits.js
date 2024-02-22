// Bit Counting

// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

const countBits = (n) => {
    let binaryNumber = n.toString(2);

    return (binaryNumber.split("").filter(numbers => numbers === "1")).length;
};

console.log(countBits(10));