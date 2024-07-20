// Write a function that takes a string as an input and returns true if the string contains all unique characters, otherwise returns false.

function containsAllUniqueChars(str) {
  let set = new Set(str);
  return set.size === str.length;

  // TC: O(n)
  // SC: O(n)
}

// Approach 2: using .indexOf() and .lastIndexOf() comparison

function containsAllUniqueChars2(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (str.indexOf(char) !== str.lastIndexOf(char)) return false;
  }

  return true;

  // TC: O(n^2) -> because .indexOf() and .lastIndexOf() search through the entire array to find the first and last occurence for the char. Hence, this operation has O(n) time complexity. And since we are iterating over each char in the array, we again have O(n), which in total becomes O(n^2)
  // SC: O(1)
}

console.log(containsAllUniqueChars("hello"));
console.log(containsAllUniqueChars("asdfqwer"));

console.log(containsAllUniqueChars2("hello"));
console.log(containsAllUniqueChars2("asdfqwer"));
