// Question 1: What are objects in js? How to access, modify and delete any object property? How to add "multi-word" properties in objects and how to access them?

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 2: Determine the output

// const func = (function (num) {
//   delete num;
//   return num;
// })(5);

// console.log(func);

/**
 * Output:
 * 5
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 3: How can you loop through the keys of an object and print the value for that key.

// const person = {
//   name: "Devang Vishnu",
//   age: 24,
//   isAdmin: false,
// };

// for (const key in person) {
//   console.log(`${key}: ${person[key]}`);
// }

// follow up: how can you do the same without using for...in loop

// for (const [key, value] of Object.entries(person)) {
//   console.log(key + ": " + value);
// }

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 4: Determine the output

// const obj = {
//   a: "one",
//   c: "four",
//   b: "two",
//   a: "three",
//   c: "five",
// };

// console.log(obj);

/**
 * Output:
 * {a: "three", c: "five", b: "two"}
 * Answer/Explanation:
 * Using same key names for properties will replace the old value with the new value for that property. It's not like there will be two different properties with the same name. Just one, with the new value. The position of this property will be the position of its first occurence.
 */

/* ********************************************************* */

// Question 5: Create a function multiplyByTwo(obj) that multiplies all numeric property values of nums by 2.

// let nums = {
//   a: 100,
//   b: 200,
//   title: "My numbers",
// };

// function multiplyByTwo(obj) {
//   for (const key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] *= 2;
//     }
//   }
// }

// multiplyByTwo(nums);
// console.log(nums);

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 6: Determine the output

// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);

/**
 * Output:
 * 456
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 7: What is JSON.stringify() and JSON.parse()? What is their use case? Give examples

// 7.2
// const settings = {
//   username: "Devang",
//   level: 20,
//   health: 90,
// };

// const json = JSON.stringify(settings);

// console.log(JSON.stringify(settings, ["level", "health"]));

/**
 * Output:
 *
 * Answer/Explanation:
 * Use case examples
 *  - to store items in and/or get items from localStorage.
 *  - to send data from client to server and parse that data on the client
 */

/* ********************************************************* */

// Question 8: Determine the output

// 8.1
// console.log([..."Devang"]);
// // ["D", "e", "v", "a", "n", "g"]

// // 8.2
// const user = { name: "Devang", age: 24 }; //
// const admin = { admin: true, ...user };

// console.log(admin);
// // {admin: true, name: "Devang", age: 24}

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 9: Determine the output

// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   parameter: () => 2 * Math.PI * this.radius,
// };

// console.log(shape.diameter());
// console.log(shape.parameter());

/**
 * Output:
 * 20
 * NaN
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 10: What is object destructuring?

// let user = {
//   name: "Devang",
//   age: 24,
//   courses: {
//     first: "100xDevs",
//     second: "Zero to Mastery",
//   },
// };

// const {
//   name: username,
//   age: myAge,
//   courses: { first, second },
// } = user;
// console.log(username, myAge);
// console.log(name, age); // Tell me what will happen here and why?

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 11: What are array-like objects? Determine output for the following

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 12: Determine the output

// Explain this too. What will the output for the below function
// function getItems(fruits, ...args, favouireFruit) {
//   return [...fruits, ...args, favouireFruit];
// }

// function getItems(fruits, favouireFruit, ...args) {
//   return [...fruits, ...args, favouireFruit];
// }

// console.log(getItems(["banana, apple"], "peers", "orange"));

/**
 * Output:
 * ["banaa", "apple", "orange", "peers"]
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 13: What is object referencing? Determine the output

// 13.1
// const obj1 = { str: "Hello" };
// const obj2 = obj1;
// obj1.str = "Hey";
// console.log(obj2.str);

// // 13.2
// console.log({ a: 1 } == { a: 2 });
// console.log({ a: 1 } === { a: 2 });

// 13.3
let user = { username: "Shivam" };
console.log(user); // {username: "Shivam"}

user.username = null;
console.log(user); // {username: null}

// 13.4
let person = { name: "Devang" };
const members = [person];

console.log(members);

person.name = null;
console.log(members);

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 6: Determine the output

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 6: Determine the output

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 6: Determine the output

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 6: Determine the output

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */
