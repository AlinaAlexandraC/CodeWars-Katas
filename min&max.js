// Find Maximum and Minimum Values of a List

// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// Notes
// You may consider that there will not be any empty arrays/vectors.

const min = (list) => {
    // let minNumber = list[0];

    // for (let i = 1; i < list.length; i++){
    //     if (list[i] < minNumber) {
    //         minNumber = list[i];
    //     } 
    // }

    // return minNumber;

    return Math.min(...list);
};

const max = (list) => {
    // let maxNumber = list[0];

    // for (let i = 1; i < list.length; i++){
    //     if (list[i] > maxNumber) {
    //         maxNumber = list[i];
    //     } 
    // }

    // return maxNumber;

    return Math.max(...list);
};

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));
