// 1 - Here, we are creating promises based on function calls. Change the resolve timing of two promises and see whether there's any difference in the output

function myPromise1() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Promise 1 resolved");
      //   rej("Promise rejected");
    }, 2000);
  });
}

function myPromise2() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Promise 2 resolved");
      //   rej("Promise rejected");
    }, 2000);
  });
}

async function handlePromise() {
  const p1 = await myPromise1();
  console.log("hello");
  console.log(p1);

  const p2 = await myPromise2();
  console.log("hello again");
  console.log(p2);
}

handlePromise();

//////////////////////////////////////////

// 2 - Here, each promise is diractly assigned to a variable. What will be the output here? Change the timing of resolving inside setTimeout to see the difference in result.

// const myPromise1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Promise 1 resolved");
//     //   rej("Promise rejected");
//   }, 4000);
// });

// const myPromise2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Promise 2 resolved");
//     //   rej("Promise rejected");
//   }, 2000);
// });

// async function handlePromise() {
//   let p1 = await myPromise1;
//   console.log("hello");
//   console.log(p1);

//   // p1 = await myPromise1;
//   // console.log("hello");
//   // console.log(p1);

//   let p2 = await myPromise2;
//   console.log("hello again");
//   console.log(p2);
// }

// handlePromise();

// try calling this function inside the console while the promise is getting resolved. Will it work?

function logName(name) {
  console.log(name);
}
