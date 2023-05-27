// Exercise 1
const number1: number[] = [25, 45, 55, 77, 88, 99];
// Using map() to square each number in the array
const squareNumber: number[] = number1.map((num) => num * num);
console.log(squareNumber);

// Using map() to return a new array the double value of element
const doubledValue: number[] = number1.map((num: number) => num * 2);
console.log(doubledValue);

// Exercise 2

//   Using map() to return a new array that the first letter in the word would be uppercase
const strings: string[] = [
  "avengers",
  "captain america",
  "iron man",
  "black panther",
];

const capitalizedString: string[] = strings.map(
  (str: string) => str.charAt(0).toUpperCase() + str.slice(1)
);
console.log(capitalizedString);
