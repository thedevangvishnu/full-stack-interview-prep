// Write a function that merges two arrays, removes the duplicates and sort them in ascending order
// let a = [6, 2, 8, 1, 2];
// let b = [4, 2, 1, 3, 9];
// Output -> [1, 2, 3, 4, 6, 8, 9]

function mergeUniqueAndSort(arr1, arr2) {
  let merged = [...new Set(arr1.concat(arr2))];

  return merged.sort((a, b) => a - b);
}

let nums1 = [6, 2, 8, 1, 2];
let nums2 = [4, 2, 1, 3, 9];

console.log(mergeUniqueAndSort(nums1, nums2));
