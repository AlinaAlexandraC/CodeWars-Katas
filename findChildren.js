// Santa's Naughty List

// Christmas is coming, and Santa has a long list to go through, to find who deserves presents for the big day. Go through a list of children, and return a list containing every child who appeared on Santa's list. Do not add any child more than once. Output should be sorted.

// Comparison should be case sensitive and the returned list should contain only one copy of each name: "Sam" and "sam" are different, but "sAm" and "sAm" are not.

const findChildren = (santasList, children) => {
  let niceKids = [];

  santasList.forEach(value => {
    if (children.includes(value) && !niceKids.includes(value)) {
      niceKids.push(value);
    }
  });

  return niceKids.sort();
};

console.log(findChildren(["Jason", "Jackson", "Jordan", "Johnny", "sAm", 'Sam'], ["Jason", "Jordan", "Jennifer", "sAm", "sam"]));