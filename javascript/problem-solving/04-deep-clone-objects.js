// 07:20
// Create a function that deeply clones a nested object

/**
 * The input can be null (or a non-object), an object or an array.
 * Hence, we need to check for each of these conditions.
 * If, input is null or a non-object, we can simply return the same value
 * If, input is an array, then we can map over each element of the input and call the same function to again check for the tree conditions
 * If input is an object, then we can iterate over each enumerable "own" property using for..in loop and do the same thing as the last condition
 */

function cloneDeeply(input) {
  if (typeof input === "null" || typeof input !== "object") {
    return input;
  }

  if (Array.isArray(input)) {
    return input.map((item) => cloneDeeply(item));
  }

  if (typeof input === "object") {
    let obj = {};
    for (const key in input) {
      if (input.hasOwnProperty(key)) {
        obj[key] = cloneDeeply(input[key]);
      }
    }
    return obj;
  }

  // TC: O(n)
  // SC: O(n)
}

const obj = {
  a: 1,
  b: 2,
  c: [3, 4, [5, [6]]],
  d: {
    e: 7,
    f: {
      g: 8,
    },
  },
};

const clone = cloneDeeply(obj);

obj.c[2] = 6;
obj.d.f = 8;

console.log(obj);
console.log(clone);

console.log(clone.c === obj.c);
console.log(clone.d.f === obj.d.f);
