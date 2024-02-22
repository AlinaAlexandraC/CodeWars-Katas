// My Languages

// Task
// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

// Note: the scores will always be unique (so no duplicate values)

// Examples
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

const myLanguages = (results) => {
    let languages = [];
    let result = [];

    for (let i = 0; i < Object.keys(results).length; i++) {
        if (Object.values(results)[i] >= 60) {
            languages.push({ key: Object.keys(results)[i], value: Object.values(results)[i] });
        }
    }

    languages.sort((a, b) => b.value - a.value);
    languages.forEach(value => {
        result.push(value.key);
    });

    return result;
};

console.log(myLanguages({ "Hindi": 60, "Greek": 71, "Dutch": 93 }));