// Convert number to reversed array of digits

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

const digitize = (number) => {
    let reversedArray = Array.from(Array.from(String(number), Number));
    reversedArray = reversedArray.reverse();

    return reversedArray;
};

console.log(digitize(35231));