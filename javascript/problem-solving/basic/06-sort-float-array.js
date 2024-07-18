// Write a function that takes in an array of floats and sorts them in ascending order

function sortFloats(arr) {
  return arr.sort((a, b) => a - b);
}

const nums = [86.999385869, 67.2645807464, 12.5768967449, 55.978746363];
console.log(sortFloats(nums));
