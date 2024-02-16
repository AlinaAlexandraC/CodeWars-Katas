// 4th Column of Katas =>

// Vowel Count

function getCount(str) {
  let vowelCount = 0
  let arr = str.split("")
  arr.forEach(letter => {
    if (["a", "e", "i", "o", "u"].includes(letter)){
      vowelCount++
    }
  })
  return vowelCount;
}

// console.log(getCount("abracadabra"));

// List Filtering

function filter_list(l) {
  let numbersArr = []
  l.forEach(item => {
    if(typeof item !== "string"){
      numbersArr.push(item)
    }
  })
  return numbersArr
}

// console.log(filter_list([1,2,'aasf','1','123',123]));

// Find the stray number

function stray(numbers) {
  numbers.sort((a,b) => a-b)
  return (numbers[0] === numbers[1]) ? numbers[numbers.length-1] : numbers[0]
}

// console.log(stray([1, 1, 2]));

// max diff - easy

function maxDiff(list) {
  list.sort((a,b) => a-b)
  return (list.length > 1) ? list[list.length-1] - list[0] : 0
};

// console.log(maxDiff([-0, 1, 2, -3, 4, 5, -6]));

// Nth power rules them all!

function modifiedSum(a, n) {
  let result = 0
  a.forEach(number => {
    result += (Math.pow(number,n)) - number
  })
  return result
}

// console.log(modifiedSum([1, 2, 3], 3));

// Return substring instance count

function solution1(fullText, searchText){
  let count = fullText.split(searchText).length-1
  return count
}

// console.log(solution1('abcdeb','b'));

// Remove anchor from URL

function removeUrlAnchor(url){
  return (url.includes("#")) ? url.slice(0, url.indexOf("#")) : url
}

// console.log(removeUrlAnchor('www.codewars.com#about'));

// No oddities here

function noOdds( values ){
  let result = []
  values.forEach(item => {
    if(item % 2 === 0){
      result.push(item)
    }
  });
  return result
}

// console.log(noOdds([0,1,2,3]));

// Summing a number's digits

function sumDigits(number) {
  let result = String(Math.abs(number)).split("")
  let sum = 0
  result.forEach(value => {
    sum += Number(value)
  })
  return sum
}

// console.log(sumDigits(-32));

// Disemvowel Trolls

function disemvowel(str) {
  let arr = []
  let lettersArr = str.split("")
  let vowels = ["a", "e", "i", "o", "u","A", "E", "I", "O", "U"]
  lettersArr.forEach(letter => {
    if(!vowels.includes(letter)){
      arr.push(letter)
    }
  })
  return arr.join("")
}

// console.log(disemvowel("This website is for losers LOL!"));

// Find the capitals

var capitals = function (word) {
	let arr = word.split("")
  let indexArr = []
  for (let i = 0; i < arr.length; i++){
    if(arr[i] === arr[i].toUpperCase()){
      indexArr.push(i)
    }
  }
  return indexArr
};

// console.log(capitals('CodEWaRs'));

// String Breakers

function stringBreakers(n, string){
  let newStr = string.split(" ").join("")
  let strArr = []
  let currentIndex = 0
  for(let i = 1; i < newStr.length/n + 1; i++){
    strArr.push(newStr.substring(currentIndex, n*i))
    currentIndex += n    
  }
  return strArr.join("\n")
}

// console.log(stringBreakers(5, 'This is an example string'));

// Matrix Addition

function matrixAddition(a, b){
  for (let i = 0; i < a.length; i++){
    for (let j = 0; j < a[i].length; j++){
      a[i][j] = a[i][j] + b[i][j]
    }
  }
  return a
}

// console.log(matrixAddition(
//   [ [1, 2],
//     [1, 2] ], 
// //    +
//   [ [2, 3],
//     [2, 3] ] ));

// Reverse Letters in Sentence

// reverse the letters in the sentence
function reverser(sentence) {
  if (!sentence.includes(" ") || sentence === " "){
  return sentence.split("").reverse().join("")
}
  let words = sentence.split(" ")
  let newOrder = []
  words.forEach(item => {
    newOrder.push(item.split("").reverse().join(""))
  })
  newOrder = newOrder.join(" ")
  return newOrder
}

// console.log(reverser("Hi mom"));

// Operations with sequence

var calc = function(a) {
  let sum = 0
  let newArr = []
  for (let i = 0; i < a.length; i++){
    if (a[i] > 0){
      newArr.push(Math.pow(a[i],2))
    } else {
      newArr.push(a[i])
    }
  }
  for (let i = 0; i < newArr.length; i++){
    if((i+1) % 3 === 0 && (i+1) % 5 != 0){
      sum += newArr[i]*3
    } else if((i+1) % 5 === 0 && (i+1) % 3 !== 0){
      sum += newArr[i]*(-1)
    } else if((i+1) % 5 === 0 && (i+1) % 3 === 0) {
      sum += newArr[i]*(-3)
    } else {
      sum += newArr[i]
    }
  }
  return sum
}

// console.log(calc([ 0, 2, 1, -6, -3, 3 ]));

// Find Your Villain Name

function getVillainName(birthday){
  const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
  const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];
  return `The ${m[birthday.getMonth()]} ${d[birthday.getDate() % 10]}`
}

// console.log(getVillainName(new Date("October 14")))

// 5th Column of Katas =>

// Mumbling

function accum(s) {
  let arr = []
  for(let i = 0; i < s.length; i++){
    arr.push(s[i].toUpperCase() + s[i].toLowerCase().repeat(i))
  }
  return arr.join("-")
}

// console.log(accum("ZpglnRxqenU"));

// Get the Middle Character

function getMiddle(s){
  return (s.length % 2 === 0) ? s.substring((s.length/2)-1, (s.length/2)+1) : s[Math.floor(s.length/2)]
}

// console.log(getMiddle("testing"));
// console.log(getMiddle("middle"));

// Shortest Word

function findShort(s){
  let words = s.split(" ")
  words.sort((a,b) => a.length-b.length)
  return words[0].length
}

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

// Jaden Casing Strings

String.prototype.toJadenCase = function () {
  let words = this.split(' ');
  for(let i = 0; i < words.length; i++){
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ")
};

let input = "How can mirrors be real if our eyes aren't real";

// console.log(input.toJadenCase()); 

// List Filtering

function filter_list(l) {
  let arr = []
  for(let i = 0; i < l.length; i++){
    if(typeof l[i] === "number"){
      arr.push(l[i])
    }
  }
  return arr
}

// console.log(filter_list([1,2,'aasf','1','123',123]));

// Find the stray number

function stray(numbers) {
  numbers.sort((a,b) => a-b)
  return (numbers[0] === numbers[1]) ? numbers[numbers.length-1] : numbers[0]
}

// console.log(stray([17, 17, 3, 17, 17, 17, 17]));

// The highest profit wins!

function minMax(arr){
  let sortedArr = arr.sort((a,b) => a-b)
  return [sortedArr[0],sortedArr[sortedArr.length-1]];
}

// console.log(minMax([2334454, 5]));

// The Coupon Code

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  let currDate = new Date(currentDate)
  let expDate = new Date(expirationDate)
  
  return (enteredCode === correctCode && currDate <= expDate) ? true : false
}

// console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'));

// Sort by Last Char

function last(x){
  let words = x.split(" ")
  words.sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)));
  return words
}

// console.log(last("what time are we climbing up the volcano"));

// max diff - easy

function maxDiff(list) {
  list.sort((a,b) => a-b)
  return (list.length > 1) ? list[list.length-1] - list[0] : 0
};

// console.log(maxDiff([0, 1, 2, 3, 4, 5, 16]));

// String Matcher

function isMatching(string, str1, str2) {
  let stringArr = string.toLowerCase().split("")
  let noSpacesArr = stringArr.filter(word => word !== " ")
  let newLetters = str1.concat(str2).toLowerCase().split("").filter(word => word !== " ")
  for(let i = 0; i < newLetters.length; i++){
    if(!newLetters.includes(noSpacesArr[i]) || noSpacesArr.length > newLetters.length){
      return false
    }
  }
  return true
}

// console.log(isMatching("impressionistic", "isis isi", "precomnt"));

// L2: Triple X

function tripleX(str){
  let pos = str.indexOf("x".toLowerCase())
  return (str[pos] === str[pos+1] && str[pos+1] === str[pos+2]) ? true : false
}

// console.log(tripleX("XXkittysoft"))

// Longest palindrome

function longestPalindrome(str) {
  let arr = str.toLowerCase().split("").sort()
  let newArr = [] 
  let longestPalindromeLength = 0
  let hasOddNumbers = false
  for(let i = 0; i < arr.length; i++){
    if((arr[i].charCodeAt(0) > 47 && arr[i].charCodeAt(0) < 58) || (arr[i].charCodeAt(0) > 96 && arr[i].charCodeAt(0) < 123)){
      newArr.push(arr[i])
    }
  }
  let characters = {};
  for (let i = 0; i < newArr.length; i++) {
    if (characters[newArr[i]]) {
      characters[newArr[i]]++
    } else {
      characters[newArr[i]] = 1;
    }
  }
  Object.values(characters).forEach(char => {
    if(char % 2 === 0){
      longestPalindromeLength += char
    } else {
      longestPalindromeLength += char - 1
      hasOddNumbers = true
    }
  })
  if(hasOddNumbers === true){
    longestPalindromeLength += 1
  }
  return longestPalindromeLength
}

// console.log(longestPalindrome("Hannah"));

// Count Repeats

function countRepeats(str) {
  let newArr = []
  let arrFromStr = str.split("")
  for (let i = 0; i < arrFromStr.length; i++){
    if (arrFromStr[i] === arrFromStr[i+1]){
      newArr.push(arrFromStr[i])
    }
  }
  return newArr.length
}

// console.log(countRepeats('AaBBCCC'))

// 6th Column of Katas =>

// Duck Duck Goose

class Player {
  constructor(name) {
  	this.name = name;
  }
}

let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
let players = ex_names.map((n) => new Player(n));

function duckDuckGoose(players, goose) {
  return players[(goose-1) % players.length].name
}

// console.log(duckDuckGoose(players, 3));

// Currying functions

function multiplyAll(arr) {
  return function(multiplier){
    let multipliedArr = []
    for(let i = 0; i < arr.length; i++){
      multipliedArr.push(arr[i]*multiplier)
    }
    return multipliedArr
  }
}

// console.log(multiplyAll ([1,2,3]) (2))

// Multiples of 3 or 5

function solution2(number){
  let sum = 0
  for(let i = 0; i < number; i++){
    if(i % 3 === 0 || i % 5 === 0){
      sum += i
    }
  }
  return sum
}

// console.log(solution2(10));

// Find the odd int

function findOdd(A) {
  let count = {}
  A.sort((a,b) => a-b)
  for(let i = 0; i < A.length; i++){
    if(count[A[i]]){
      count[A[i]]++
    } else {
      count[A[i]] = 1
    }
  }
  for(let numbers in count){
    if(count[numbers] === 1 || count[numbers] % 2 !== 0){     
      return Number(numbers)
    }
  }
}

// console.log(findOdd([0, 1, 0, 1, 0]))

// Sum of Digits / Digital Root

function digitalRoot(n) {
  if (n < 10) {
    return n
  }
  return digitalRoot(Math.floor(n % 10 + digitalRoot(Math.floor(n / 10))))
}

// console.log(digitalRoot(456));

// Stop gninnipS My sdroW!

function spinWords(string){
  let str = string.split(" ");
  for (let i = 0; i < str.length; i++) {
    if (str[i].length >= 5){
      str[i] = str[i].split("").reverse().join("")
    }
  }
  return str.join(" ")
}

// console.log(spinWords("This is another test"));

// Persistent Bugger.

function persistence(num) {
  let num1 = num.toString().split("")
  let result = 0
  while(num1.length > 1) {
    result++
    num1 = num1.reduce((a,b) => a*b,1).toString().split("")
  }
  return result
}

// console.log(persistence(999));

// Who likes it?

function likes(names) {
  return (names.length === 0) 
    ? "no one likes this"
  : (names.length === 1) 
    ? `${names[0]} likes this`
  : (names.length === 2) 
    ? `${names[0]} and ${names[1]} like this`
  : (names.length === 3) 
    ? `${names[0]}, ${names[1]} and ${names[2]} like this`
  : `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
}

// console.log(likes([]));
// console.log(likes(['Peter']));
// console.log(likes(['Jacob', 'Alex']));
// console.log(likes(['Max', 'John', 'Mark']));
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));

// Counting Duplicates

function duplicateCount(text){
  let obj = {}
  let countDuplicates = 0
  let textFormated = text.toLowerCase()
  textFormated = textFormated.split("").sort()
    for(let i = 0; i < textFormated.length; i++){
      if(obj[textFormated[i]]){
        obj[textFormated[i]]++
      } else {
        obj[textFormated[i]] = 1
      }
    }
    for(let count in obj){
      if(obj[count] > 1){
        countDuplicates++
      }
    }
  return countDuplicates
}

// console.log(duplicateCount("Indivisibilities"))

// Find The Parity Outlier

function findOutlier(integers){
  let odd = integers.filter(word => word % 2 !== 0)
  let even = integers.filter(word => word % 2 === 0)
  return (odd.length > 1) ? even[0] : odd[0]
}

// console.log(findOutlier([2,6,8,10,3]));

// Duplicate Encoder

function duplicateEncode(word){
  let obj = {}
  let newWord = []
  let wordFormated = word.toLowerCase().split("")
  for(let i = 0; i < wordFormated.length; i++){
      if(obj[wordFormated[i]]){
        obj[wordFormated[i]]++
      } else {
        obj[wordFormated[i]] = 1
      }
    }
  for(let i = 0; i < wordFormated.length; i++){
    for(let count in obj){
      if(count === wordFormated[i] && obj[count] === 1){
        newWord.push("(".toString())
      } else if(count === wordFormated[i] && obj[count] > 1){
        newWord.push(")".toString())
      }
    } 
  }
  return newWord.join("")
}

// console.log(duplicateEncode("Success"));

// Array.diff

function arrayDiff(a, b) {
  if(b.length === 0){
    return a
  }
  let c = []
  for(let i = 0; i < a.length; i++){
    if(!b.includes(a[i])){
      c.push(a[i])
    }
  }
  return c
}

// console.log(arrayDiff([1,2,3], [1,2]));

// Bit Counting

var countBits = function(n) {
  let binaryNumber = n.toString(2);
  return (binaryNumber.split("").filter(numbers => numbers === "1")).length
};

// console.log(countBits(10));

// Create Phone Number

function createPhoneNumber(d) {
  return `(${d[0]}${d[1]}${d[2]}) ${d[3]}${d[4]}${d[5]}-${d[6]}${d[7]}${d[8]}${d[9]}`
}

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// Replace With Alphabet Position

function alphabetPosition(text) {
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let textArr = text.toLowerCase().split("").filter(char => char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123)
  let result = []
  for(let i = 0; i < textArr.length; i++){
    for(let j = 0; j < alphabet.length; j++){
      if(textArr[i] === alphabet[j]){
        result.push(alphabet.indexOf(alphabet[j])+1)
      }
    }
  }
  return result.join(" ");
}

// console.log(alphabetPosition("The sunset sets at twelve o' clock."));

// Extra Katas/ Code

// Sort an array of integers, in ascending order, without using the sort built in function

function sortElements (numbersArray) {
  let aux
  for(let i = 0; i < numbersArray.length; i++) {
      for (let j = i+1; j < numbersArray.length; j++) {
          if(numbersArray[j] < numbersArray[i]) {
              aux = numbersArray[i]
              numbersArray[i] = numbersArray[j]
              numbersArray[j] = aux
              }
          }
      }

  return numbersArray
}

// console.log(sortElements([3, 2, 1, -1, -3]))

// Cats and shelves

function solution(start, finish) {
    let moves = finish - start
    let count
    if(moves % 3 === 0) {
        count = moves / 3;
    } else {
        count = Math.floor(moves / 3) + (moves % 3)
    }
    
    return count
}

// console.log(solution(1, 5))

