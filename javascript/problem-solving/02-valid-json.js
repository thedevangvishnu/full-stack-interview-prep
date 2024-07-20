// Write a function that takes a string as an input and returns true if it's a valid json or else returns false. You cannot use try/catch or any other external libraries

/**
 * Approach:
 * - first check whether the input is of type string or not. If it's not, then its another data type and hence not a valid json string
 * - remove white space from start and end
 * - now, json strng has either {} or []. Hence, we will try to match this pattern
 */

function isValidJson(str) {
  if (typeof str !== "string") return false;
  str = str.trim();

  const pattern1 = { start: "{", end: "}" };
  const pattern2 = { start: "[", end: "]" };

  if (
    (str.startsWith(pattern1.start) || str.startsWith(pattern2.start)) &&
    (str.endsWith(pattern1.end) || str.endsWith(pattern2.end))
  ) {
    return true;
  } else {
    return false;
  }

  // TC: O(n) --> .trim() in worst case, might take O(n)
  // SC: O(n)
}

console.log(isValidJson('{"name": "Alice"}'));
console.log(isValidJson("[1, 2, 3]"));
console.log(isValidJson("Just a regular string"));
console.log(isValidJson({ name: "Devang" }));
