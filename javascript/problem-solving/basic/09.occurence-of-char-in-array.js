// Write a function that takes in the array of strings as first parameter and a char as second parameter and returns the occurence of that char (case-insensitive) for each word of the array

const names = [
  "Tom",
  "Charlie",
  "Harry",
  "Sarah",
  "Huda",
  "Samantha",
  "Emily",
  "Elizabeth",
];

function findOccurenceOfAChar(arr, char) {
  for (const value of arr) {
    let str = value.toLowerCase();
    char = char.toLowerCase();

    let modifiedValue = str.replaceAll(char, "");
    let charCount = str.length - modifiedValue.length;
    console.log(`${value} contains ${charCount} ${char}`);
  }

  // TC: O(n * m)
}

// findOccurenceOfAChar(names, "A");

function findOccurenceOfAChar2(arr, char) {
  for (const value of arr) {
    let charCount = value.toLowerCase().split(char.toLowerCase()).length - 1;

    console.log(`${value} contains ${charCount} ${char}`);
  }

  // TC: O(n)
}

findOccurenceOfAChar2(names, "A");
