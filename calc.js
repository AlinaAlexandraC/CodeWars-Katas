// Operations with sequence

// Steps

// Square the numbers that are greater than zero.
// Multiply by 3 every third number.
// Multiply by -1 every fifth number.
// Return the sum of the sequence.
// Example
// { -2, -1, 0, 1, 2 } returns -6

// 1. { -2, -1, 0, 1 * 1, 2 * 2 }
// 2. { -2, -1, 0 * 3, 1, 4 }
// 3. { -2, -1, 0, 1, -1 * 4 }
// 4. -6
// P.S.: The sequence consists only of integers. And try not to use "for", "while" or "loop" statements.

const calc = (a) => {
    let sum = 0;
    let newArr = [];

    for (let i = 0; i < a.length; i++) {
        if (a[i] > 0) {
            newArr.push(Math.pow(a[i], 2));
        } else {
            newArr.push(a[i]);
        }
    }

    for (let i = 0; i < newArr.length; i++) {
        if ((i + 1) % 3 === 0 && (i + 1) % 5 != 0) {
            sum += newArr[i] * 3;
        } else if ((i + 1) % 5 === 0 && (i + 1) % 3 !== 0) {
            sum += newArr[i] * (-1);
        } else if ((i + 1) % 5 === 0 && (i + 1) % 3 === 0) {
            sum += newArr[i] * (-3);
        } else {
            sum += newArr[i];
        }
    }

    return sum;
};

console.log(calc([ 0, 2, 1, -6, -3, 3 ]));