// "use strict";

// Question 1: What are objects in js? How to access, modify and delete any object property? How to add "multi-word" properties in objects and how to access them?

// let student = {
//   studentName: "Devang",
//   age: 24,
//   hasGraduated: true,
//   ["is coming to event"]: false,
//   description: {
//     skills: ["JS", "React", "Nextjs"],
//     experience: "1.5years",
//     isWorkingCurrently: false,
//   },
//   greet() {
//     console.log(`Hello everyone, I'm ${this.studentName}!`);
//   },
// };

// delete student["is coming to event"];
// student["is coming to event"] = true;
// student.hasGraduated = false;
// console.log(student);

/**
 * Output:
 *
 * Answer/Explanation:
 * Objects are non-primitive data-type in js that define a collection of related data and functionality. These data items are "key-value" pairs and are called a properties. Those properties, who value in a function, are called as methods. Objects are central to JS, as most of the entities in JS are objects only.
 */

/* ********************************************************* */

// Question 2: Determine the output. Will the output be different in "strict-mode" and "non-strict mode"

// // 2.1
// const func = (function (num) {
//   delete num;
//   return num;
// })(5);

// console.log(func);

// 2.2
// const func = (function (num) {
//   var num = 10;
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

// follow up: What's the difference between for...in and for...of loop

/**
 * Output:
 *
 * Answer/Explanation:
 * for...in loop is used to iterate over the enumerable properties of an object (which are it's keys) while for...of loop is used to iterate over the values of an iterable objects (such as Arrays, Maps, Sets, Strings, arguments object, etc.)
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
// console.log(a);

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

// console.log(JSON.stringify(settings));
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

// const arrayLikeObj = {
//   0: "one",
//   1: "two",
//   2: "three",
//   length: 3,
// };

// const anotherArrayLikeObj = {
//   1: "one",
//   2: "two",
//   3: "three",
//   length: 4,
// };

// const obj1 = {
//   one: 1,
//   two: 2,
//   three: 3,
//   length: 3,
// };

// const obj2 = {
//   one: 1,
//   two: 2,
//   three: 3,
// };

// console.log(Array.from(arrayLikeObj)); // ["one", "two", "three"]
// console.log(Array.from(anotherArrayLikeObj)); // [undefined, "one", "two", "three"]
// console.log(Array.from(obj1)); // [undefined, undefined, undefined,]
// console.log(Array.from(obj2)); // []

/**
 * Output:var num = 20;
 *
 * Answer/Explanation:
 * Array-like objects in js are objects that have "indexed (numerical) properties" and a length property. These behave like arrays but do not have access to native array methods like map, filter, reduce and so on. Such array-like objects in js are arguments objects, HTMLCollection, NodeList, Strings, Objects (that have indexeced property and a property length)
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

// console.log(
//   getItems(["banana, apple"], "peers", "orange", "mangoes", "watermelon")
// );

/**
 * Output:
 * ["banaa", "apple", "orange",  "mangoes", "watermelon", "peers"]
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
// let user = { username: "Shivam" };
// console.log(user); // {username: "Shivam"}

// user.username = null;
// console.log(user); // {username: null}

// // 13.4
// let person = { name: "Devang" };
// const members = [person];

// console.log(members);

// person = null;
// console.log(members);

// // 13.5.1
// let person = { name: "Devang" };
// const members = [person];

// person.name = null;
// console.log(members);

// // 13.5.2
// let person = { name: "Devang" };
// const members = [person];

// console.log(members);

// person.name = null;
// console.log(members);

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 14: Determine the output

// const value = { number: 10 };

// const multiply = (x = { ...value }) => {
//   console.log((x.number *= 2));
// };

// multiply();
// multiply();
// multiply(value);
// multiply(value);

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 15: Determine the output

// function changeAgeAndReference(person) {
//   person.age = 25;
//   person = {
//     name: "John",
//     age: 50,
//   };

//   return person;
// }

// const person1 = {
//   name: "Alex",
//   age: 30,
// };

// const person2 = changeAgeAndReference(person1);

// console.log(person1); // ?
// console.log(person2); // ?

/**
 * Output:
 *
 * Answer/Explanation:
 *
 */

/* ********************************************************* */

// Question 16: How to clone an object? What's a shallow copy and deep copy

/**
 * Output:
 *
 * Answer/Explanation:
 * Three ways:
 *  - Object.assign() (shallow)
 *  - JSON.parse(JSON.stringify(obj))(deep)
 *  - Using spread operator like this {...obj}  (deep)
 */

/* ********************************************************* */
