// Array.diff

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// array_diff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// array_diff([1,2,2,2,3],[2]) == [1,3]

const arrayDiff = (a, b) => {
    let c = [];

    if (b.length === 0) {
        return a;
    }

    for (let i = 0; i < a.length; i++) {
        if (!b.includes(a[i])) {
            c.push(a[i]);
        }
    }

    return c;
};

console.log(arrayDiff([1, 2, 2, 2, 3], [2]));