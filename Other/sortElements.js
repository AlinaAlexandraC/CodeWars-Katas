// Sort an array of integers, in ascending order, without using the sort built in function

const sortElements = (numbersArray) => {
    let aux;
    
    for (let i = 0; i < numbersArray.length; i++) {
        for (let j = i + 1; j < numbersArray.length; j++) {
            if (numbersArray[j] < numbersArray[i]) {
                aux = numbersArray[i];
                numbersArray[i] = numbersArray[j];
                numbersArray[j] = aux;
            }
        }
    }

    return numbersArray;
};

console.log(sortElements([3, 2, 1, -1, -3]));