// Even or Odd

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

const evenOrOdd = (number) => {
    return (number % 2 === 0) ? "Even" : "Odd";
}
  
console.log(evenOrOdd(2));
console.log(evenOrOdd(7));