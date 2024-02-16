// Sorted? yes? no? how?

// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise

// You can assume the array will always be valid, and there will always be one correct answer.

const compareArrays = (a, b) => {
    return a.toString() === b.toString();
};

const isSortedAndHow = (array) => {
    let ascArray = [];
    let desArray = [];
  
    array.forEach(value => {
      ascArray.push(value);
      desArray.push(value);
    });
  
    ascArray.sort((a,b) => a-b);
    desArray.sort((a,b) => b-a);
  
    if(compareArrays(array, ascArray)){
        return "yes, ascending";
    } else if (compareArrays(array, desArray)){
        return "yes, descending";
    } 

    return "no";
}
  
console.log(isSortedAndHow([1, 2]));
console.log(isSortedAndHow([15, 7, 3, -8]));
console.log(isSortedAndHow([4, 2, 30]));