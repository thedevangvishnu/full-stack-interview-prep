// Definiton and example explanation

// Question 1: What is map() method in js?

// const array = [10, 20, 30, 40];
// const newArray = array.map((value, index, arr) => value * 2);
// console.log(newArray);
/**
 * Output:
 * [20, 40, 60, 80]
 * Answer/Explanation:
 * .map() method is a native array method (defined on Array.prototype) in Js that transforms each element of the array (by performing some transfomation/computation) and return a new array.
 * This method takes in a callback function, inside which we perform some transformation/computation on each element of the array. map() then returns the new array with newly transformed elements
 */

/* ********************************************************* */

// Question 2: What is filter() method in js?

// const nums = [1, 2, 3, 4, 5, 6];
// const evenNums = nums.filter((num, i, arr) => num % 2 === 0);
// console.log(evenNums);

/**
 * Output:
 * [2, 4, 6]
 * Answer/Explanation:
 * fitler() method is a native array method (defined in Array.prototype) that returns a new array of all the elements that meet a certain condition.
 * filter() method takes in a callback function and returns the array with all elements meeting a condition.
 */

/* ********************************************************* */

// Question 3: What is reduce() method in js?

// const nums = [10, 20, 30, 40];
// const sum = nums.reduce((acc, num, i, arr) => acc + num, 0);
// console.log(sum);

/**
 * Output:
 * 100
 *
 * Answer/Explanation:
 * reduce() method is a native array method in js (defined in Array.prototype) that "executes a reducer function" (which is provided as callback to reduce()) on each element of the array and returns a single value.
 * It takes a callback function (called as reducer function, whose first two paramerters are: an accumulator (accumulated previous value) and the current value of the element of the array). Using the value of the accumulator defined and the operation logic, it returns a single value.
 *
 * note: If no value of accumulator is provided, then the value of accumulator is the value of the first element of the array. Consequently, the iteration starts from the second element.
 */

/* ********************************************************* */

// Polyfills for all these methods

// Question 3: Create a polyfill for map() method

// if (!Array.prototype.myMap) {
//   Array.prototype.myMap = function (cb) {
//     const array = this;

//     const newArray = [];

//     array.forEach((value, i, arr) => {
//       newArray.push(cb(value, i, arr));
//     });

//     return newArray;
//   };
// }

// const arr = [10, 20, 30];
// const newArr = arr.myMap((val, i, arr) => val * 2);
// console.log(newArr);

/**
 * Output:
 * [20, 40, 60]
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 4: Create a polyfill for filter() method

// Array.prototype.myFilter = function (cb) {
//   const array = this;
//   const filtered = [];

//   for (let i = 0; i < array.length; i++) {
//     if (cb(array[i], i, array)) {
//       filtered.push(array[i]);
//     }
//   }

//   return filtered;
// };

// const arr = [10, 15, 20, 25, 30];
// const filteredArray = arr.myFilter((val, i) => val >= 20 && i > 2);
// console.log(filteredArray);

/**
 * Output:
 * [25, 30]
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 5: Create a polyfill for reduce() method **

// Array.prototype.myReduce = function (cb, initialValue) {
//   const array = this;
//   let acc = initialValue;

//   for (let i = 0; i < array.length; i++) {
//     acc = acc ? cb(acc, array[i], i, array) : array[0];
//   }

//   return acc;
// };

// const nums = [10, 20, 30, 40];
// const sum = nums.myReduce((acc, num, i, arr) => acc + num, 20);
// console.log(sum);

/**
 * Output:
 * 120
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 6: What is the difference between map() and forEach();

// const nums = [10, 20, 30];

// const newNums = nums.map((num, i, arr) => num * 2);
// console.log(newNums); // [20, 40, 60]
// console.log(nums); // [10, 20, 30]

// nums.forEach((num, i, arr) => console.log(num * 2)); // 20, 40, 60
// console.log(nums); // [10, 20, 30]

/**
 * Output:
 *
 * Answer/Explanation:
 * map() method and forEach() method are both native array method in js that are used to iterate over elements of the array and perform some operation.
 * The main difference is that map() method return a new array with the transformed element and it doesn't mutate the original array while forEach() method just performs some operation on each element of the array. forEach() method returns "undefined". We can chain more array methods on map() as it return an array but cannot do the same on filter()
 */

/* ********************************************************* */

// Question 7: Using map(), filter(), reduce() scenario based

// 7.1: Return only the name of students in Capital letters

// const students = [
//   { name: "Aman", id: 20, marks: 75 },
//   { name: "Shyan", id: 21, marks: 95 },
//   { name: "Rohit", id: 22, marks: 85 },
//   { name: "Mira", id: 23, marks: 92 },
// ];

// const names = students.map((student) => student.name.toUpperCase());
// console.log(names); // ["AMAN", "SHYAN", "ROHIT", "MIRA"]

// // 7.2: Return only the details of those students who scored more than 90

// const moreThan90 = students.filter((student) => student.marks > 90);
// console.log(moreThan90);
// // [{ name: "Shyan", id: 21, marks: 95 },{ name: "Mira", id: 23, marks: 92 }]

// // 7.3: Return only the details of those students who scored more than 80 and id greater than 21

// const result3 = students.filter(
//   (student) => student.marks > 80 && student.id > 21
// );
// console.log(result3);
// // [{ name: "Rohit", id: 22, marks: 85 },{ name: "Mira", id: 23, marks: 92 }]

// // 7.4: Calculate the sum of marks of all of the students

// const sum = students.reduce((acc, val, i, arr) => acc + val.marks, 0);
// console.log(sum); // 347

// // 7.5: Return only names of those students who scored more than 80

// const result5 = students
//   .filter((student) => student.marks > 80)
//   .map((student) => student.name);
// console.log(result5); // ["Shyan", "Rohit", "Mira"]

// // 7.6: Return total marks for students with marks greater than 90 after 10 marks have been added to those who scored less than 90 *

// const result6 = students
//   .map((stu) => (stu.marks < 90 ? stu.marks + 10 : stu.marks))
//   .filter((marks) => marks > 90)
//   .reduce((acc, val) => acc + val, 0);

// console.log(result6); // 282

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 8: Use map() to capitalize the first letter of each string in an array of strings.

const words = ["hello", "how", "are", "you?"];
// The output should be: Hello How Are You

console.log(words.map((val, i) => val[0].toUpperCase() + val.slice(1)));

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 9: Given an array of strings, use reduce() to count the number of occurrences of each string.

const strs = ["hello", "hey", "hey", "hi", "hi", "hi", "hello", "heya"];

const frequency = strs.reduce((acc, val, i, arr) => {
  acc[val] = !acc[val] ? 1 : acc[val] + 1;

  return acc;
}, {});
console.log(frequency);

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 10: Use reduce() to flatten an array of arrays into a single array. These are can nested multiple levels deep.

const numbers = [10, 20, [30, 40, [50, 60], 70], 80];

function flattenArray(arr) {
  return arr.reduce((acc, val, i, arr) => {
    if (Array.isArray(val)) {
      return acc.concat(flattenArray(val));
    } else {
      acc.push(val);
      return acc;
    }
  }, []);
}

console.log(flattenArray(numbers)); // [10, 20, 30, 40, 50, 60, 70, 80]

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 8: Use map() to capitalize the first letter of each string in an array of strings.

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// 2 -Count Occurrences:

//
