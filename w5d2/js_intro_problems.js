// function mysteryScoping1() {
//   var x = 'out of block';
//   if (true) {
//     var x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }
// // prints "in block" and "in block" because var x has global scope
//
//
// function mysteryScoping2() {
//   const x = 'out of block';
//   if (true) {
//     const x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }
// // prints "in block" and "out of block" because const x is declared in a
// // separate scope within the if statement
//
// function mysteryScoping3() {
//   const x = 'out of block';
//   if (true) {
//     var x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }
// // throws an error because var x tries to populate the global scope
// // but const x has already been defined and can't be declared again
//
//
// function mysteryScoping4() {
//   let x = 'out of block';
//   if (true) {
//     let x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }
// // prints "in block" and "out of block" since the variables are assigned
// // in separate scopes
//
// function mysteryScoping5() {
//   let x = 'out of block';
//   if (true) {
//     let x = 'in block';
//     console.log(x);
//   }
//   let x = 'out of block again';
//   console.log(x);
// }
// // errors out because x has been declared 'out of block'
// // and x = 'out of block' again creates a conflict
//
// // madLib
//
// function madLib(verb, adjective, noun) {
//   console.log(`We shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase()}.`);
// }
//
// madLib("eat", "amazingest", "pizza");
// madLib("win", "fanciest", "cows");
//
// // isSubstring
// function isSubstring(searchString, subString) {
//   console.log(searchString.includes(subString));
// }
//
// isSubstring("shoelace", "ace");

// FizzBuzz
var FizzBuzz = (arr) => {
  let magicArray = [];
  for(let i = 0; i < arr.length;i++) {
    if ((arr[i] % 15 !== 0 ) &&
       (arr[i] % 5 === 0 || arr[i] % 3 === 0)){
        magicArray.push(arr[i]);
      }
    }
     return magicArray;
};

FizzBuzz([15, 30, 60, 3, 4, 5, 12]);

// isPrime
var isPrime = (number) => {
  for(let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

// sumOfNPrimes
var firstNPrimes = (n) => {
  let i = 2, primes = [];
  while (primes.length < n) {
    if (isPrime(i) === true) {
      primes.push(i);
    }
    i++;
  }
  return primes;
};

// console.log(firstNPrimes(3));

var sumOfNPrimes = (n) => {
  let sum = 0;
  firstNPrimes(n).forEach(element => {
      sum += element;
    }
  );
  return sum;
};

console.log(sumOfNPrimes(5));
