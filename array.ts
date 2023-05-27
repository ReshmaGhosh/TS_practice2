// Exercise 1

const vegetables: string[] = ["garlic", "carrot", "broccoli", "pumpkin"];
// 1. Sort the array in alphabetically
const sortedVegetables: string[] = [...vegetables].sort();
console.log(vegetables);

// 2. What is the length of the array
const lengthOfArrey: number = vegetables.length;
console.log(lengthOfArrey);

// 3. Write a function called myVeggieList to console.log() the length of the array
function myVeggieList(veggies: string[]): void {
  console.log(veggies.length);
}
myVeggieList(vegetables);

// 4. Push one more item to the array called "onion"
vegetables.push("onion");
console.log(vegetables);

// 5. Write a function using if-else condition to check if the length of the array is bigger than 4.
function checkLength(vegetables: any[]): boolean {
  if (vegetables.length > 4) {
    return true;
  } else {
    return false;
  }
}

// 6.  Using forEach or map to loop and console.log() the item in the array
vegetables.map((veg: string) => {
  console.log(veg);
  return veg;
});

// 7. using slice to remove the element carrot in the array
const index: number = vegetables.indexOf("carrot");
if (index > -1) {
  vegetables.splice(index, 1);
} else {
  console.log("not valid");
}
console.log(vegetables);

// Exercise 2
type Character = {
  name: string;
  height: number;
  mass: number;
  eye_color: string;
  gender: string;
};

const characters: Character[] = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

// 1. Get characters with mass greater than 100
const getCharacters: Character[] = characters.filter(
  (character: Character) => character.mass > 100
);

console.log(getCharacters);

// 2. Get characters with height less than 200
const getHeight: Character[] = characters.filter(
  (character: Character) => character.height < 200
);

console.log(getHeight);

// 3. Get all male characters
const getMaleCharacters: Character[] = characters.filter(
  (character: Character) => character.gender === "male"
);
console.log(getMaleCharacters);

// 4. Get all female characters
const getFemaleCharacters: Character[] = characters.filter(
  (character: Character) => character.gender === "female"
);
console.log(getFemaleCharacters);

// Exercise 3
const numberListArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

// using reduce method to get the sum of all numbers in the numberList array
const sum: number = numberListArray.reduce(
  (accumulator: number, currentValue: number) => accumulator + currentValue,
  0
);

console.log(sum);

// using find method to get the first element that bigger than 3
const firstNumberGreaterThanThree: number | undefined = numberListArray.find(
  (number: number) => number > 3
);

console.log(firstNumberGreaterThanThree);

// using findIndex method to get the index of the first number that smaller than 7
const firstNumberLessThanSevenIndex = numberListArray.findIndex(
  (number: number) => number < 7
);

console.log(firstNumberLessThanSevenIndex);
