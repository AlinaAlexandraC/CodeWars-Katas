// Abbreviate a Two Word Name

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name) {
    let parts = name.split(' ');
    // let initials = '';

    // for (let i = 0; i < parts.length; i++) {
    //      initials += parts[i][0];    
    // }

    // return initials.split("").join(".");

    return `${parts[0][0]}.${parts[1][0]}`;
}
  
console.log(abbrevName("Sam Harris"));