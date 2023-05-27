// Exercise 1
const numberList: number[] = [1, -4, 12, 0, -3, 29, -150];

// Return a new array contains number bigger than 0
const positiveNumber: number[] = numberList.filter((number) => number > 0);
console.log(positiveNumber);

// Return a new array contains number less than 10
const lessThanTen: number[] = numberList.filter((numb) => numb < 10);
console.log(lessThanTen);

// Exercise 2
const number: number[] = [25, 45, 55, 77, 88, 99];
// Using filter() to return new array that contains even number
const evenNumber: number[] = number.filter((numb) => {
  if (numb % 2 == 0) {
    return "Even number";
  } else {
    ("Odd number");
  }
});
console.log(evenNumber);

// Using filter() to return new array that contains odd number
const oddNumber: number[] = number.filter((numb) => {
  if (numb % 2 !== 0) {
    return "Even number";
  } else {
    ("Odd number");
  }
});
console.log(oddNumber);
