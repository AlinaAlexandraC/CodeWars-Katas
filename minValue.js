// Form The Minimum

// Task
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.

// Input >> Output Examples
// minValue ({1, 3, 1})  ==> return (13)

// Explanation:
// (13) is the minimum number could be formed from {1, 3, 1} , Without duplications

const minValue = (values) => {
    values.sort((a, b) => a - b);
    let noDuplicates = [];

    values.forEach(value => {
        if (!noDuplicates.includes(value)) {
            noDuplicates.push(value);
        }
    });

    return Number(noDuplicates.join(""));
};

console.log(minValue([1, 3, 1]));