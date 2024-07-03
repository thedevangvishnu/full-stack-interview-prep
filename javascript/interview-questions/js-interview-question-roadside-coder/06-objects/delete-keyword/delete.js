// Question 1: Determine the output. "delete" keyword

// 1.1
// const ojb = { name: "Devang" };
// console.log(delete ojb.age);
// console.log(delete ojb.name);
// console.log(ojb);

// 1.2.1
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// Person.prototype.age = 24;
// const person = new Person("Devang");
// console.log(person.name, person.age);

// console.log(delete person.age);
// console.log(person.name, person.age);

// 1.2.2
// class Person {
//   constructor(name) {
//     this.name = name;
//     this.age = 24;
//   }
// }

// Person.prototype.age = 24;

// const person = new Person("Devang");
// console.log(person.name, person.age);

// console.log(delete person.age);
// // console.log(delete Person.prototype.age);
// console.log(person.name, person.age);

// 1.3: Define for both strict and non-strict modes

const user = {};
Object.defineProperty(user, "username", {
  value: "Devang",
  configurable: false,
});
Object.defineProperty(user, "age", {
  value: 24,
  configurable: true,
});

console.log(user.username, user.age); // ?

console.log(delete user.username); // ?
console.log(user.username, user.age); // ?

console.log(delete user.age); // ?
console.log(user.username, user.age); // ?

// 1.4: Define for both strict and non-strict modes
// "use strict";

// 1.4.1
// var globalVar = "Devang";
// console.log(delete window.globalVar); // ?
// console.log(window.globalVar); // ?

// 1.4.2

// function abc() {
//   var name = "Devang";
//   console.log(delete name); // throwa a SyntaxError
//   return name;
// }
// console.log(abc());

// 1.4.3

// let name = "Devang";
// console.log(delete name); // false
// console.log(name); // Devang (still exists)
