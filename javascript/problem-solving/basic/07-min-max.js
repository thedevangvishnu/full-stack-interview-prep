// Write a function that finds the min and max value in an array of numbers

function findMinAndMax(arr) {
  return {
    min: Math.min(...arr),
    max: Math.max(...arr),
  };
}

const nums = [10, 20, 11, 35, 12, 40, 13, 65, 14, 78, 16];

console.log(findMinAndMax(nums));

// Follow up: You can not use Math object

function findMinAndMax2(arr) {
  let max = -Infinity;
  let min = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
      console.log(`For i = ${i}, min = ${min}`);
    }
  }

  return {
    min,
    max,
  };
}

console.log("2nd Functon", findMinAndMax2(nums));
